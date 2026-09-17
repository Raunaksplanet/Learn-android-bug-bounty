#!/usr/bin/env bash
#
# burp_cert_install.sh — Push a Burp Suite CA cert into an Android emulator's
# system trust store, fully automated.
#
# Usage:
#   ./burp_cert_install.sh -c burp.der -a Pixel4-API35
#   ./burp_cert_install.sh -c burp.der -a Pixel4-API35 -w 300   # custom boot timeout
#   ./burp_cert_install.sh -c burp.der -a Pixel4-API35 -k       # keep emulator running detached, don't wait for it to close
#
set -euo pipefail

# ---------- defaults ----------
BOOT_TIMEOUT=180       # seconds to wait for cold boot
REBOOT_TIMEOUT=120     # seconds to wait for reboot after cert push
DER_CERT=""
AVD_NAME=""
EMULATOR_ARGS="-writable-system -no-snapshot -netdelay none -netspeed full"
LOG() { echo -e "[*] $*"; }
ERR() { echo -e "[!] $*" >&2; }
OK()  { echo -e "[+] $*"; }

usage() {
  cat <<EOF
Usage: $0 -c <burp_cert.der> -a <avd_name> [-w seconds]

  -c   Path to Burp Suite CA cert in DER format (required)
  -a   Name of the AVD to launch (required) — must already exist (avdmanager list avd)
  -w   Boot timeout in seconds (default: $BOOT_TIMEOUT)
  -h   Show this help
EOF
  exit 1
}

# ---------- arg parsing ----------
while getopts ":c:a:w:h" opt; do
  case $opt in
    c) DER_CERT="$OPTARG" ;;
    a) AVD_NAME="$OPTARG" ;;
    w) BOOT_TIMEOUT="$OPTARG" ;;
    h) usage ;;
    \?) ERR "Invalid option: -$OPTARG"; usage ;;
    :) ERR "Option -$OPTARG requires an argument"; usage ;;
  esac
done

[[ -z "$DER_CERT" || -z "$AVD_NAME" ]] && usage
[[ -f "$DER_CERT" ]] || { ERR "Cert file not found: $DER_CERT"; exit 1; }

# ---------- locate Android SDK tools ----------
# Try common env vars, then fall back to PATH.
SDK_ROOT="${ANDROID_SDK_ROOT:-${ANDROID_HOME:-}}"
if [[ -n "$SDK_ROOT" ]]; then
  export PATH="$SDK_ROOT/emulator:$SDK_ROOT/platform-tools:$SDK_ROOT/cmdline-tools/latest/bin:$PATH"
fi

# ---------- dependency checks / install ----------
need_openssl=false
need_adb=false
need_emulator=false

command -v openssl  >/dev/null 2>&1 || need_openssl=true
command -v adb      >/dev/null 2>&1 || need_adb=true
command -v emulator >/dev/null 2>&1 || need_emulator=true

if $need_openssl; then
  LOG "openssl not found, attempting install..."
  if command -v apt-get >/dev/null 2>&1; then
    sudo apt-get update -y && sudo apt-get install -y openssl
  elif command -v brew >/dev/null 2>&1; then
    brew install openssl
  else
    ERR "Could not auto-install openssl. Install it manually and re-run."
    exit 1
  fi
fi

if $need_adb || $need_emulator; then
  ERR "adb/emulator not found in PATH and not auto-installable (requires Android SDK)."
  ERR "Set ANDROID_SDK_ROOT/ANDROID_HOME to your SDK path, or install Android Studio's"
  ERR "command-line tools and platform-tools, then re-run."
  exit 1
fi

OK "Dependencies present: openssl, adb, emulator"

# ---------- verify AVD exists ----------
if ! emulator -list-avds | grep -qx "$AVD_NAME"; then
  ERR "AVD '$AVD_NAME' not found. Available AVDs:"
  emulator -list-avds || true
  exit 1
fi

# ---------- pick a free adb port / detect already-running instance ----------
EXISTING_SERIAL=""
if adb devices | grep -q "emulator-"; then
  EXISTING_SERIAL=$(adb devices | awk '/emulator-/{print $1; exit}')
  LOG "An emulator instance ($EXISTING_SERIAL) is already running — reusing it."
fi

SERIAL="$EXISTING_SERIAL"

if [[ -z "$SERIAL" ]]; then
  LOG "Starting emulator AVD '$AVD_NAME' (writable-system, no-snapshot)..."
  nohup emulator -avd "$AVD_NAME" $EMULATOR_ARGS >/tmp/emulator-"$AVD_NAME".log 2>&1 &
  EMU_PID=$!
  LOG "Emulator launched (pid $EMU_PID), waiting for adb to register the device..."

  # wait for the serial to appear
  waited=0
  while [[ -z "$SERIAL" && $waited -lt $BOOT_TIMEOUT ]]; do
    SERIAL=$(adb devices | awk '/emulator-/{print $1; exit}')
    [[ -n "$SERIAL" ]] && break
    if ! kill -0 "$EMU_PID" 2>/dev/null; then
      ERR "Emulator process died. Check /tmp/emulator-$AVD_NAME.log"
      exit 1
    fi
    sleep 2
    waited=$((waited+2))
  done

  [[ -z "$SERIAL" ]] && { ERR "Emulator did not register with adb within ${BOOT_TIMEOUT}s"; exit 1; }
  OK "Device online: $SERIAL"
fi

# ---------- wait for full boot completion ----------
wait_for_boot() {
  local serial=$1 timeout=$2 waited=0
  LOG "Waiting for '$serial' to finish booting (timeout ${timeout}s)..."
  adb -s "$serial" wait-for-device
  while [[ $waited -lt $timeout ]]; do
    boot_completed=$(adb -s "$serial" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r\n')
    if [[ "$boot_completed" == "1" ]]; then
      OK "Boot completed."
      return 0
    fi
    sleep 3
    waited=$((waited+3))
  done
  ERR "Timed out waiting for boot completion after ${timeout}s"
  return 1
}

wait_for_boot "$SERIAL" "$BOOT_TIMEOUT" || exit 1

# small extra settle time — boot_completed can flip before services (like adbd root) settle
sleep 5

# ---------- root + remount ----------
LOG "Requesting adb root..."
adb -s "$SERIAL" root
# adb root restarts adbd; wait for device to come back
adb -s "$SERIAL" wait-for-device

# retry remount a few times — can race right after root restart
remount_ok=false
for i in {1..5}; do
  if adb -s "$SERIAL" remount 2>&1 | tee /tmp/remount.log | grep -qiE "remount succeeded|now writable"; then
    remount_ok=true
    break
  fi
  LOG "Remount attempt $i failed, retrying..."
  sleep 3
done

if ! $remount_ok; then
  ERR "adb remount failed. Common causes:"
  ERR "  - AVD not launched with -writable-system"
  ERR "  - Using a Play Store system image (unsupported) instead of Google APIs / AOSP"
  cat /tmp/remount.log >&2 || true
  exit 1
fi
OK "System partition remounted read-write."

# ---------- convert cert ----------
WORKDIR=$(mktemp -d)
trap 'rm -rf "$WORKDIR"' EXIT

PEM_CERT="$WORKDIR/burp.pem"
LOG "Converting DER cert to PEM..."
openssl x509 -inform DER -in "$DER_CERT" -out "$PEM_CERT" || { ERR "DER->PEM conversion failed. Is the cert really DER-encoded?"; exit 1; }

HASH=$(openssl x509 -inform PEM -subject_hash_old -in "$PEM_CERT" | head -1)
[[ -z "$HASH" ]] && { ERR "Failed to compute subject hash."; exit 1; }
OK "Cert subject hash: $HASH"

HASHED_CERT="$WORKDIR/${HASH}.0"
cp "$PEM_CERT" "$HASHED_CERT"

# ---------- push cert ----------
LOG "Pushing cert to /system/etc/security/cacerts/..."
adb -s "$SERIAL" push "$HASHED_CERT" /system/etc/security/cacerts/
adb -s "$SERIAL" shell chmod 644 /system/etc/security/cacerts/"${HASH}".0

# sanity check it landed
if ! adb -s "$SERIAL" shell ls /system/etc/security/cacerts/ | grep -q "${HASH}.0"; then
  ERR "Push verification failed — cert not found on device after push."
  exit 1
fi
OK "Cert pushed and verified on device."

# ---------- reboot and wait ----------
LOG "Rebooting device to apply system trust store changes..."
adb -s "$SERIAL" reboot
sleep 5   # give adb time to drop the old session
adb -s "$SERIAL" wait-for-device
wait_for_boot "$SERIAL" "$REBOOT_TIMEOUT" || exit 1

OK "Done. Burp CA (hash ${HASH}) is installed as a system-trusted root on $SERIAL."
LOG "If HTTPS traffic still fails for a specific app, it's doing SSL pinning —"
LOG "use Frida (frida-android-unpinning / objection) to bypass it."
