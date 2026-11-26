# Learn Android Bug Bounty

Field notes, public reports and tooling for Android application security, maintained by
[Biscuit Security](https://biscuitsecurity.com). This repository combines the
[B3nac reading list](https://github.com/B3nac/Android-Reports-and-Resources) with
practical notes, command references and learning material for Android testing.

## Table of contents

- [What is in this repository](#what-is-in-this-repository)
- [Website](#website)
- [Reports](docs/REPORTS.md)
- [Resource library](docs/LIBRARY.md)
- [Command reference](commands/README.md)
- [Scripts](#scripts)
- [Credits](docs/CREDITS.md)
- [Repository layout](#repository-layout)
- [Local development](#local-development)
- [Contributing](#contributing)

## What is in this repository

- **52 public Android vulnerability reports** across 16 classes.
- **142 resources** split into practice apps, tools, guides, videos, commands and reference material.
- **Command references** for Drozer, Objection, Frida, MobSF, Pidcat, emulator certificate setup and deeplink discovery.
- **Scripts** for certificate installation, sensitive-word searches, emulator bootstrap and WebView bridge testing.

The report list is credited to B3nac. The guides and field notes are maintained here.

## Website

The static site lives in [`site/`](site/). It includes the searchable report tree, the full resource library and the credit roll. It deploys with GitHub Actions through [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

See the [site README](site/README.md) for local development and deployment details.

## Reports

The full report index is generated at [docs/REPORTS.md](docs/REPORTS.md). It groups every report by vulnerability class and links to the original disclosure or writeup.

Sources:

- [B3nac/Android-Reports-and-Resources](https://github.com/B3nac/Android-Reports-and-Resources)
- The report table previously kept in this repository's README

## Resource library

The full library is generated at [docs/LIBRARY.md](docs/LIBRARY.md). Current sections:

| Section | Entries |
| --- | ---: |
| Practice Apps | 14 |
| Tools | 27 |
| Guides | 23 |
| Videos | 48 |
| Commands | 9 |
| Resources | 21 |

## Command reference

- [Command index](commands/README.md)
- [Drozer commands](commands/drozer.md)
- [General emulator, ADB, Frida and Objection commands](commands/general.md)
- [Objection commands](commands/objection.md)
- [Frida certificate setup](commands/frida-cert.md)
- [Android emulator certificate setup](commands/cert-install.md)
- [MobSF with Docker](commands/mobsf.md)
- [Pidcat logging](commands/pidcat.md)
- [Deeplink discovery](commands/deeplinks.md)
- [Command snippets](commands/snippets.md)

## Scripts

- [`scripts/cert-install.sh`](scripts/cert-install.sh): install a Burp certificate in an Android emulator.
- [`scripts/grep-sensitive-words.sh`](scripts/grep-sensitive-words.sh): search decompiled APK files for secrets and risky strings.
- [`scripts/androidbb.bat`](scripts/androidbb.bat): start a rooted emulator and frida-server on Windows.
- [`scripts/exploit.html`](scripts/exploit.html): minimal WebView JavaScript bridge test page.

## Credits

The full credit roll is at [docs/CREDITS.md](docs/CREDITS.md). It covers the researchers, writers, channels and projects behind the linked work. HackerOne report authors are credited as a group because the reading list links to report IDs rather than author profiles.

## Repository layout

```text
.
├── README.md
├── commands/              # Tool-specific command references
├── docs/
│   ├── CREDITS.md         # Generated credit roll
│   ├── LIBRARY.md         # Generated resource library
│   └── REPORTS.md         # Generated report index
├── scripts/               # Helper scripts and test pages
├── site/                  # Static website
└── .github/workflows/     # GitHub Pages deployment
```

## Local development

Rebuild the data and generated docs:

```sh
python3 site/build.py
```

Serve the website locally:

```sh
python3 -m http.server 8000 --directory site
```

Then open <http://localhost:8000>.

## Contributing

Open an issue or submit a pull request to add a report, guide, tool or command reference. Keep entries linked to the original source and include the author or project where known.
