# MobSF with Docker

[Back to the command index](README.md)

## Contents

- [Static analysis only](#static-analysis-only)
- [Static and dynamic analysis](#static-and-dynamic-analysis)

This file explains how to run MobSF using Docker for both static and dynamic analysis.

---

## Static analysis only

```bash
sudo docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest
```

* Runs MobSF on `http://localhost:8000`
* Only static analysis is supported
* No connection to an Android device/emulator

---

## Static and dynamic analysis

```bash
docker run -it --rm \
  -p 8000:8000 \
  -p 1337:1337 \
  -e MOBSF_ANALYZER_IDENTIFIER=emulator-5554 \
  opensecurity/mobile-security-framework-mobsf:latest
```

* Runs MobSF with support for both static and dynamic analysis
* `1337` is used for dynamic analyzer communication
* `MOBSF_ANALYZER_IDENTIFIER` must match your connected emulator/device ID (e.g., `emulator-5554`)
