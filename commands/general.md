# General Android commands

Emulator, ADB, Frida and Objection commands used during Android testing.

## Contents

- [Command table](#command-table)
- [APK metadata](#apk-metadata)

## Command table

| Category               | Command                                                                 | Description |
|------------------------|-------------------------------------------------------------------------|-------------|
| **Emulator Commands**  | `emulator -list-avds`                                                  | List available Android Virtual Devices |
|                        | `emulator -avd New-Pixel_4 -writable-system -no-snapshot`               | Start emulator with writable system |
|                        | `emulator -avd Pixel_3a_Root -writable-system -no-snapshot -port 5560` | Start emulator on specific port |
| **MobSF**             | `docker run -it --rm -p 8000:8000 -p 1337:1337 -e MOBSF_ANALYZER_IDENTIFIER=emulator-5554 opensecurity/mobile-security-framework-mobsf:latest` | Start MOBSF container |
| **ADB Commands**      | `adb shell pm list packages -3`                                        | List 3rd party packages |
|                        | `adb shell getprop ro.product.cpu.abi`                                 | Get device CPU architecture |
|                        | `adb push frida-server /data/local/tmp/`                               | Push file to device |
|                        | `adb -s emulator-5560 push C:\path\to\frida-server /data/local/tmp` | Push to specific emulator |
|                        | `adb shell "chmod +x /data/local/tmp/frida-server"`                    | Make frida-server executable |
|                        | `adb shell "/data/local/tmp/frida-server &"`                           | Start frida-server in background |
| **Frida Commands**    | `frida-ps -Uia`                                                       | List running apps on USB device |
|                        | `frida -U -f com.target.app --no-pause -l ssl-pinning-bypass.js`       | Inject script into app |
|                        | `frida --codeshare dzonerzy/fridantiroot -f <package-name> -U`         | Use anti-root detection script |
|                        | `frida --codeshare masbog/frida-android-unpinning-ssl -f <package-name> -U` | Use SSL unpinning script |
| **Objection Commands** | `objection-connect`                                                   | Connect to device |
|                        | `objection-patch <my.apk>`                                             | Patch APK for objection |
|                        | `objection -g <package name> explore`                                  | Explore app with objection |
|                        | `android root disable`                                                 | Disable root detection |
|                        | `android sslpinning disable`                                           | Disable SSL pinning |
|                        | `android hooking watch class <package-name>.UserMainActivity`          | Watch class methods |
|                        | `android hooking list classes`                                         | List all classes |

## APK metadata

Read the minimum and target SDK versions from an APK:

```bash
aapt dump badging app.apk | grep sdkVersion
```
