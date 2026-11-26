# Command reference

Field commands for Android testing, grouped by tool. Each page starts with a short table of contents and keeps copy-paste examples intact.

## Contents

- [Drozer commands](drozer.md)
- [General emulator, ADB, Frida and Objection commands](general.md)
- [Objection commands](objection.md)
- [Frida certificate setup](frida-cert.md)
- [Android emulator certificate setup](cert-install.md)
- [MobSF with Docker](mobsf.md)
- [Pidcat logging](pidcat.md)
- [Deeplink discovery](deeplinks.md)
- [Command snippets](snippets.md)

## Scripts

- [`scripts/cert-install.sh`](../scripts/cert-install.sh): automate the emulator certificate flow.
- [`scripts/grep-sensitive-words.sh`](../scripts/grep-sensitive-words.sh): grep a decompiled APK for sensitive keywords.
- [`scripts/androidbb.bat`](../scripts/androidbb.bat): start a rooted emulator and frida-server on Windows.
- [`scripts/exploit.html`](../scripts/exploit.html): minimal WebView bridge test page.
