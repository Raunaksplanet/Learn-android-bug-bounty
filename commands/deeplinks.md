# Android deeplink discovery

[Back to the command index](README.md)

## Contents

- [Android-Deeplink-Parser](#1-using-android-deeplink-parser)
- [Drozer](#2-using-drozer-live-device-method)

## 1. Using Android-Deeplink-Parser

Repo: [Android-Deeplink-Parser-BB-Tools](https://github.com/Raunaksplanet/Android-Deeplink-Parser-BB-Tools)

```bash
# Clone the repo
git clone https://github.com/Raunaksplanet/Android-Deeplink-Parser-BB-Tools.git
cd Android-Deeplink-Parser-BB-Tools

# Place your APK in the directory and run the script
python3 deeplink_parser.py your_target.apk
```

---

## 2. Using Drozer (Live Device Method)

```bash
# Run the following command in Drozer shell
dz> run app.activity.info -a -p com.target.app
```
