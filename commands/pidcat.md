# Pidcat for Android logging

A focused `logcat` wrapper for Android security researchers. It filters logs from one app instead of the entire device, which makes vulnerability analysis faster and cleaner.

## Contents

- [Why use pidcat?](#why-use-pidcat)
- [Installation](#installation)
- [Make it universal on Windows](#make-it-universal-on-windows)
- [Example commands](#example-commands)
- [Original repository](#original-repository)

---

## Why use pidcat?

### adb logcat, default behavior

```bash
adb devices
adb -s <device-ip:port> logcat
```

* Captures all logs from the device: system, apps, services.
* Noisy and difficult to isolate logs for one app.

### pidcat, focused behavior

```bash
pidcat -s <device-ip:port> <package.name>
```

* Captures logs only from a specific app using its PID (process ID).
* Automatically updates PID if the app restarts.
* Filters out irrelevant system logs.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/JakeWharton/pidcat.git
cd pidcat
```

### 2. Run directly

#### Linux and macOS

```bash
./pidcat.py -s <device-ip:port> <package.name>
```

#### Windows

```bash
python pidcat.py -s <device-ip:port> <package.name>
```

---

## Make it universal on Windows

To run `pidcat` from any directory:

1. Move `pidcat.py` to a folder like `C:\Tools\pidcat\`

2. Add that folder to the System PATH:

   * Open Environment Variables
   * Edit the `Path` variable
   * Add: `C:\Tools\pidcat`

3. (Optional) Create `pidcat.bat` in the same folder:

   ```bat
   @echo off
   python C:\Tools\pidcat\pidcat.py %*
   ```

Now you can run:

```bash
pidcat -s <device-ip:port> com.target.app
```

---

## Example commands

* For a remote device:

  ```bash
  pidcat -s 192.168.0.101:5555 com.target.app
  ```

* For a USB device:

  ```bash
  pidcat com.target.app
  ```

---

## Original repository

[https://github.com/JakeWharton/pidcat](https://github.com/JakeWharton/pidcat)
