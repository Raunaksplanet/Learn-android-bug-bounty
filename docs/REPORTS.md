# Android report index

Public Android vulnerability writeups grouped by attack surface. The base list comes from [B3nac's Android-Reports-and-Resources](https://github.com/B3nac/Android-Reports-and-Resources); the extra entries come from this repository's report table.

## Contents

- [Privilege Escalation (10)](#privilege-escalation)
- [Steal files (8)](#steal-files)
- [Bypasses (7)](#bypasses)
- [XSS (6)](#xss)
- [RCE/ACE (5)](#rceace)
- [Insecure deeplinks (3)](#insecure-deeplinks)
- [Intercept Broadcasts (3)](#intercept-broadcasts)
- [SQL Injection (2)](#sql-injection)
- [Case sensitive account collisions (1)](#case-sensitive-account-collisions)
- [Content Provider LFI (1)](#content-provider-lfi)
- [Cryptography (1)](#cryptography)
- [CSRF (1)](#csrf)
- [Hardcoded credentials (1)](#hardcoded-credentials)
- [Memory corruption (1)](#memory-corruption)
- [Session theft (1)](#session-theft)
- [WebView (1)](#webview)

## Privilege Escalation

Intent spoofing, fragment injection and permission mistakes.

| Report | Source | Link |
| --- | --- | --- |
| 20 Security Issues Found in Xiaomi Devices | Oversecured | [Open](https://oversecured.com/blog/20-security-issues-found-in-xiaomi-devices/) |
| Discovering vendor-specific vulnerabilities in Android | Oversecured | [Open](https://oversecured.com/blog/discovering-vendor-specific-vulnerabilities-in-android/) |
| Common mistakes when using permissions in Android | Oversecured | [Open](https://oversecured.com/blog/common-mistakes-when-using-permissions-in-android/) |
| Two weeks of securing Samsung devices: Part 1 | Oversecured | [Open](https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-1/) |
| Two weeks of securing Samsung devices: Part 2 | Oversecured | [Open](https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-2/) |
| Intent Spoofing | HackerOne | [Open](https://hackerone.com/reports/97295) |
| Access protected components via intent | HackerOne | [Open](https://hackerone.com/reports/200427) |
| Fragment injection | HackerOne | [Open](https://hackerone.com/reports/43988) |
| Javascript injection | HackerOne | [Open](https://hackerone.com/reports/54631) |
| Access of some not exported content providers | HackerOne | [Open](https://hackerone.com/reports/272044) |

## Steal files

Path traversal, exported components and storage flaws that leak files.

| Report | Source | Link |
| --- | --- | --- |
| Android security checklist: theft of arbitrary files | Oversecured | [Open](https://oversecured.com/blog/android-security-checklist-theft-of-arbitrary-files/) |
| How to exploit insecure WebResourceResponse configurations + an example of the vulnerability in Amazon apps | Oversecured | [Open](https://oversecured.com/blog/android-exploring-vulnerabilities-in-webresourceresponse/) |
| Vulnerable to local file steal, Javascript injection, Open redirect | HackerOne | [Open](https://hackerone.com/reports/499348) |
| Token leakage due to stolen files via unprotected Activity | HackerOne | [Open](https://hackerone.com/reports/288955) |
| Steal files due to exported services | HackerOne | [Open](https://hackerone.com/reports/258460) |
| Steal files due to insecure data storage | HackerOne | [Open](https://hackerone.com/reports/44727) |
| Insecure local data storage, makes it easy to steal files | HackerOne | [Open](https://hackerone.com/reports/57918) |
| Steal files due to unprotected exported Activity | HackerOne | [Open](https://hackerone.com/reports/161710) |

## Bypasses

Lock screen, biometric and authentication bypasses.

| Report | Source | Link |
| --- | --- | --- |
| Accidental $70k Google Pixel Lock Screen Bypass | xdavidhu | [Open](https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass) |
| Two-factor authentication bypass due to vuln endpoint | HackerOne | [Open](https://hackerone.com/reports/202425) |
| Another endpoint Auth bypass | HackerOne | [Open](https://hackerone.com/reports/205000) |
| Bypass PIN/Fingerprint lock | HackerOne | [Open](https://hackerone.com/reports/331489) |
| Bypass lock protection | HackerOne | [Open](https://hackerone.com/reports/490946) |
| Bypass of biometrics security functionality | HackerOne | [Open](https://hackerone.com/reports/637194) |
| Golden techniques to bypass host validations | HackerOne | [Open](https://hackerone.com/reports/431002) |

## XSS

Script injection through WebViews and in-app HTML renderers.

| Report | Source | Link |
| --- | --- | --- |
| XSS via Metamask Browser due to CSP not being enforced | HackerOne | [Open](https://hackerone.com/reports/1941767) |
| HTML Injection in BatterySaveArticleRenderer WebView | HackerOne | [Open](https://hackerone.com/reports/176065) |
| XSS via SAMLAuthActivity | HackerOne | [Open](https://hackerone.com/reports/283058) |
| XSS in ImageViewerActivity | HackerOne | [Open](https://hackerone.com/reports/283063) |
| XSS via start ContentActivity | HackerOne | [Open](https://hackerone.com/reports/189793) |
| XSS on Owncloud webview | HackerOne | [Open](https://hackerone.com/reports/87835) |

## RCE/ACE

Dynamic code loading and library flaws that end in code execution.

| Report | Source | Link |
| --- | --- | --- |
| Why dynamic code loading could be dangerous for your apps: a Google example | Oversecured | [Open](https://oversecured.com/blog/why-dynamic-code-loading-could-be-dangerous-for-your-apps-a-google-example/) |
| CVE-2020-8913: Persistent arbitrary code execution in Google Play Core library | Oversecured | [Open](https://oversecured.com/blog/oversecured-automatically-discovers-persistent-code-execution-in-the-google-play-core-library/) |
| TikTok: three persistent arbitrary code executions and one theft of arbitrary files | Oversecured | [Open](https://oversecured.com/blog/oversecured-detects-dangerous-vulnerabilities-in-the-tiktok-android-app/) |
| RCE in TinyCards for Android | HackerOne | [Open](https://hackerone.com/reports/281605) |
| Persistent arbitrary code execution in Android's Google Play Core Library | HackerOne | [Open](https://hackerone.com/reports/971386) |

## Insecure deeplinks

Unvalidated deep links routing untrusted input into sensitive screens.

| Report | Source | Link |
| --- | --- | --- |
| Path traversal in deeplink query parameter | HackerOne | [Open](https://hackerone.com/reports/2553411) |
| Account Takeover Via DeepLink | HackerOne | [Open](https://hackerone.com/reports/855618) |
| Sensitive information disclosure | HackerOne | [Open](https://hackerone.com/reports/401793) |

## Intercept Broadcasts

Exported receivers and implicit broadcasts leaking data.

| Report | Source | Link |
| --- | --- | --- |
| Possible to intercept broadcasts about file uploads | HackerOne | [Open](https://hackerone.com/reports/167481) |
| Vulnerable exported broadcast reciever | HackerOne | [Open](https://hackerone.com/reports/289000) |
| View every network request response's information | HackerOne | [Open](https://hackerone.com/reports/56002) |

## SQL Injection

Untrusted input reaching SQL in providers and local stores.

| Report | Source | Link |
| --- | --- | --- |
| SQL Injection in Content Provider | HackerOne | [Open](https://hackerone.com/reports/291764) |
| Another SQL Injection in Content Provider | HackerOne | [Open](https://hackerone.com/reports/1650264) |

## Case sensitive account collisions

Account takeover via case-sensitive email handling.

| Report | Source | Link |
| --- | --- | --- |
| overwrite account associated with email via android application | HackerOne | [Open](https://hackerone.com/reports/187714) |

## Content Provider LFI

Local file inclusion through an exported content provider.

| Report | Source | Link |
| --- | --- | --- |
| Content Provider Local File Inclusion | YouTube | [Open](https://www.youtube.com/watch?v=34tNXsqYe9A&list=PLxyxUSarDsdB3MDNzb6Q7GOaBch8IWbOj&index=17) |

## Cryptography

How cryptography is used, and misused, in mobile apps.

| Report | Source | Link |
| --- | --- | --- |
| Use cryptography in mobile apps the right way | Oversecured | [Open](https://oversecured.com/blog/use-cryptography-in-mobile-apps-the-right-way/) |

## CSRF

Cross-site request forgery reached through app links.

| Report | Source | Link |
| --- | --- | --- |
| Deeplink leads to CSRF in follow action | HackerOne | [Open](https://hackerone.com/reports/583987) |

## Hardcoded credentials

API secrets and credentials shipped inside the app binary.

| Report | Source | Link |
| --- | --- | --- |
| Disclosure of all uploads via hardcoded api secret | HackerOne | [Open](https://hackerone.com/reports/351555) |

## Memory corruption

Native memory bugs and how they are exploited on Android.

| Report | Source | Link |
| --- | --- | --- |
| Exploiting memory corruption vulnerabilities on Android | Oversecured | [Open](https://oversecured.com/blog/exploiting-memory-corruption-vulnerabilities-on-android/) |

## Session theft

Session material exposed to other apps or to an attacker.

| Report | Source | Link |
| --- | --- | --- |
| Steal user session | HackerOne | [Open](https://hackerone.com/reports/328486) |

## WebView

WebView misconfigurations that turn app content into a web attack surface.

| Report | Source | Link |
| --- | --- | --- |
| Android security checklist: WebView | Oversecured | [Open](https://oversecured.com/blog/android-security-checklist-webview/) |
