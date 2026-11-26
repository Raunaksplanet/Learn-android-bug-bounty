# Command snippets

A compact set of commands used during Android testing.

[Back to the command index](README.md)

## Contents

- [Emulators](#emulators)
- [MobSF](#mobsf)
- [ADB](#adb)
- [Frida](#frida)
- [Objection](#objection)
- [Drozer](#drozer)

## Emulators

```bash
emulator -list-avds
emulator -avd Pixel9-Playstore -writable-system -no-snapshot
emulator -avd Pixel6-Root -writable-system -no-snapshot -port 5560
```

## MobSF

```bash
docker run -it --rm -p 8000:8000 -p 1337:1337 \
  -e MOBSF_ANALYZER_IDENTIFIER=emulator-5560 \
  opensecurity/mobile-security-framework-mobsf:latest
```

## ADB

```bash
adb shell getprop ro.product.cpu.abi
adb forward tcp:31415 tcp:31415
adb shell pm list packages -3
adb install-multiple *.apk
adb shell pm path -
adb pull -
```

## Frida

```bash
frida --codeshare pcipolloni/universal-android-ssl-pinning-bypass-with-frida -U -f <package>
frida --codeshare Q0120S/root-detection-bypass -U -f <package>
frida --codeshare fdciabdul/frida-multiple-bypass -U -f <package>
frida --codeshare TheDauntless/disable-flutter-tls-v1 -U -f <package>
frida -U -f com.example.app -l <script> -l <script> --runtime=v8
```

## Objection

```bash
objection -connect
objection -g <package> explore
android root disable
android sslpinning disable
android hooking list classes
android hooking list activities -e
android hooking list services
android hooking list receivers
android hooking list providers
android hooking search strings
android hooking list broadcast_intents
android hooking list class_methods <class.name>
android intent launch_activity <activity>
android hooking search classes <keyword>
android hooking watch class <class.name>
android hooking set return_value <class_name> <true or false>
```

## Drozer

```bash
run app.provider.finduri <package>
```
