# Objection command reference

A working reference for Objection on Android, tested with Objection 1.11 and newer.

## Contents

- [1. Root and jailbreak detection bypass](#1-root-and-jailbreak-detection-bypass)
- [2. SSL pinning bypass](#2-ssl-pinning-bypass)
- [3. Hooking and runtime manipulation](#3-hooking-and-runtime-manipulation)
- [4. Memory manipulation with Frida](#4-memory-manipulation-with-frida)
- [5. File system and databases](#5-file-system-and-databases)
- [6. Intents and app control](#6-intents-and-app-control)
- [7. Hidden and advanced commands](#7-hidden-and-advanced-commands)

## 1. Root and jailbreak detection bypass

| Command | Description |
|---------|------------|
| `android root disable` | Disable common root checks (RootBeer, SafetyNet, etc.) |
| `android root simulate` | Fake a non-rooted environment |
| `android root status` | Check if root detection is active |
| `android root execute "<command>"` | Run shell commands as root *(if app has root perms)* |

---

## 2. SSL pinning bypass

| Command | Description |
|---------|------------|
| `android sslpinning disable` | Bypass OkHttp, Xamarin, TrustManager, etc. |
| `android sslpinning test` | Verify if pinning is disabled |
| `android sslpinning custom <cert1.der> <cert2.pem> ...` | Manually add custom certs to trust store |

---

## 3. Hooking and runtime manipulation

### Class and Method Exploration

| Command | Description |
|---------|------------|
| `android hooking list classes` | List **all** loaded classes |
| `android hooking search classes <keyword>` | Search classes (e.g., `*User*`) |
| `android hooking search methods <keyword>` | Search methods (e.g., `*password*`) |
| `android hooking watch class <class>` | Trace **all** methods in a class |
| `android hooking watch method <full.method.name>` | Trace a specific method + args |
| `android hooking set return_value <class.method> <value>` | Force a method to return a value (e.g., `false`) |
| `android hooking list activities` | List all app activities |
| `android hooking list services` | List all background services |

### Advanced hooking

| Command | Description |
|---------|------------|
| `android hooking watch method --dump-args --dump-return` | Log method arguments + return value |
| `android hooking watch method --dump-backtrace` | Print stack trace when method is called |
| `android hooking get_current_activity` | Get the currently focused Activity |

---

## 4. Memory manipulation with Frida

| Command | Description |
|---------|------------|
| `memory list modules` | List loaded native libraries (e.g., `libnative.so`) |
| `memory search "<pattern>"` | Search memory (e.g., `"secret_key"`) |
| `memory dump all` | Dump **entire** app memory (⚠️ huge file) |
| `memory dump from_base <address> <size>` | Dump memory at a specific address |
| `memory write <address> "<value>"` | Modify memory at runtime |

---

## 5. File system and databases

| Command | Description |
|---------|------------|
| `file ls <path>` | List files (e.g., `/data/data/com.app`) |
| `file cat <path>` | Read file contents |
| `file download <remote> <local>` | Pull a file from device |
| `file upload <local> <remote>` | Push a file to device |
| `sqlite connect <path>` | Open an SQLite DB (e.g., `shared_prefs.db`) |
| `sqlite query "SELECT * FROM users"` | Run SQL queries |

---

## 6. Intents and app control

| Command | Description |
|---------|------------|
| `android intent launch_activity <Activity>` | Start an Activity (e.g., `com.app.LoginActivity`) |
| `android intent launch_service <Service>` | Start a background service |
| `android intent send_broadcast <Action>` | Send a broadcast (e.g., `android.intent.action.BOOT_COMPLETED`) |
| `android keystore list` | List Android KeyStore entries |
| `android ui screenshot` | Take a screenshot |
| `android shell_exec "whoami"` | Run shell commands |

---

## 7. Hidden and advanced commands

| Command | Description |
|---------|------------|
| `android clipboard monitor` | Monitor clipboard changes |
| `android debug <on/off>` | Enable/disable WebView debugging |
| `android heap execute "<Groovy script>"` | Execute custom Frida scripts |
| `android root execute "chmod 777 /data"` | Run root shell commands *(if permitted)* |

---

## Discover more

- Run `help <command>` inside an Objection session.
- Read the [Objection documentation](https://github.com/sensepost/objection).
- Check the [Frida API](https://frida.re/docs/) for the hooks Objection wraps.
