# Android emulator certificate setup

Install a Burp Suite CA certificate in an Android emulator system trust store. The repository also includes an automated script at [`scripts/cert-install.sh`](../scripts/cert-install.sh).

## Contents

- [1. Create an emulator](#1-create-an-emulator)
- [2. Start the emulator with a writable system](#2-start-the-emulator-with-a-writable-system)
- [3. Enable root and remount the system](#3-enable-root-and-remount-the-system)
- [4. Install the Burp certificate](#4-install-the-burp-certificate)
- [5. Reboot the emulator](#5-reboot-the-emulator)
- [Optional: SSL pinning bypass](#optional-ssl-pinning-bypass)
- [Notes](#notes)

## 1. Create an emulator

### GUI

* Android Studio > AVD Manager > Create Virtual Device
* Choose: Pixel 4
* Select system image:
  `API 35` or `API 36` → x86\_64 + Google APIs
* Finish setup

## 2. Start the emulator with a writable system

```bash
emulator -avd Pixel4-API35 -writable-system -no-snapshot -netdelay none -netspeed full
```

## 3. Enable root and remount the system

```bash
adb root
adb remount
```

## 4. Install the Burp certificate

### Convert `.der` to `.pem`

```bash
openssl x509 -inform DER -in burp.der -out burp.pem
```

### Get subject hash

```bash
openssl x509 -inform PEM -subject_hash_old -in burp.pem | head -1

# Example: abcd1234
```

### Rename and push to system

```bash
mv burp.pem abcd1234.0
adb push abcd1234.0 /system/etc/security/cacerts/
adb shell chmod 644 /system/etc/security/cacerts/abcd1234.0
```

## 5. Reboot the emulator

```bash
adb reboot
```

## Optional: SSL pinning bypass

If the app still blocks HTTPS:
* Use Frida with:
  * `frida-android-unpinning`
  * `objection`
  * `disable-flutter-tls-v1` (for Flutter apps)

## Notes

* Use Google APIs image, not Play Store.
* `adb root` and `remount` only work on an emulator, not a physical device.
* This setup supports ARM apps via translation (if using `x86_64` + Google APIs image).
