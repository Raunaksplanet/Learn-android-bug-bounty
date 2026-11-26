# Learn Android Bug Bounty

A curated collection of learning resources to get started with Android application security, mobile app pentesting, and bug bounty hunting. This repository includes video tutorials, blog posts, hands-on labs, and practice materials for both Android and iOS platforms.

**What is new:** the full B3nac report list is now merged here, with 52 reports, 142 resources, cleaned command docs, helper scripts, and a searchable site. Start with the path below, then use the table of contents to jump anywhere.

## 🧭 Table of Contents

- [🚀 Start Here](#start-here)
- [🌐 Searchable Atlas](#atlas)
- [🎥 Video Tutorials](#videos)
- [📺 YouTube Channels](#channels)
- [🧭 Guides and Cheatsheets](#guides)
- [✍️ Blogs and Writeups](#blogs)
- [🎤 Conference Talks](#talks)
- [🤖 Automated Scanners](#scanners)
- [🛠 Tools and Techniques](#tools-techniques)
- [📰 Android Reports and Resources](#reports)
- [⚙️ Practice Apps](#practice)
- [🧰 Tools](#tools)
- [📚 Learning Resources](#learning)
- [🕵️ Drozer](#drozer)
- [🪀 Frida](#frida)
- [🛡️ Objection and Frida Bypasses](#objection)
- [🧪 Burp Suite](#burp)
- [🎯 Practice Resources](#practice-resources)
- [🧪 Labs](#labs)
- [🔬 Security Tools](#security-tools)
- [⌨️ Command Reference](#commands)
- [🧰 Scripts](#scripts)
- [💡 Contributing](#contributing)

<a id="start-here"></a>
## 🚀 Start Here

New to Android bug bounty? Do these in order and you will have a working lab and a mental model before you touch a real target.

1. **Get the lay of the land.** Watch [Hacker101: Mobile Crash Course](https://www.hacker101.com/sessions/mobile_crash_course) and skim the [OWASP Mobile Top 10](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10).
2. **Build your lab.** Follow [Android emulator certificate setup](commands/cert-install.md), then [MobSF with Docker](commands/mobsf.md).
3. **Learn to move around an app.** Start with [Drozer commands](commands/drozer.md), then the [Frida tutorials](#frida) and [Objection bypasses](#objection).
4. **Break a legal target.** Try [InjuredAndroid](https://github.com/B3nac/InjuredAndroid), [OVAA](https://github.com/oversecured/ovaa), and [Damn Vulnerable Bank](https://github.com/rewanth1997/Damn-Vulnerable-Bank).
5. **Read real reports.** Open the [full report index](docs/REPORTS.md) and pick a class that looks fun.

Android first. A few iOS links are kept where the technique carries over.

<a id="atlas"></a>
## 🌐 Searchable Atlas

The same collection is a searchable website: **[Biscuit Security Atlas](https://raunaksplanet.github.io/Learn-android-bug-bounty/)**.

It has 52 reports across 16 classes, 142 resources, source filters, dark and light themes, and a report detail drawer.

Full indexes:

- [Report index](docs/REPORTS.md)
- [Resource library](docs/LIBRARY.md)
- [Credits](docs/CREDITS.md)

<a id="videos"></a>
## 🎥 Video Tutorials

* [Mobile Pentesting by Intigriti](https://www.youtube.com/playlist?list=PLmqenIp2RQcjBWzwMZQbIkbuVDmkYi_KF)
* [Hacker101: Mobile Crash Course](https://www.hacker101.com/sessions/mobile_crash_course)
* [Android Bug Bounty Playlist](https://www.youtube.com/playlist?list=PL1f72Oxv5SylOECx9M34pLZlNa7YkJJ14)
* [How to Hack Android Apps (Frida)](https://www.youtube.com/watch?v=mr64si_-YwI)
* [How to Bypass SSL Pinning](https://www.youtube.com/watch?v=vjCF_O6aZIg)
* [How to Root Android Emulator in 2 Minutes](https://www.youtube.com/watch?v=OLgmPxTHLuY)
* [Intercepting Android App Traffic with BurpSuite](https://www.youtube.com/watch?v=xp8ufidc514)
* [Mobile Application Pentesting](https://www.youtube.com/playlist?list=PLxlnw7Sfbtf9pBNKKQPJTSyI8KNHvgoMJ)
* [Finding Sensitive Data in Android Apps with Nerdwell](https://www.youtube.com/watch?v=D_-mHBkfThI)
* [Exploiting Android Deep Links and Exported Components](https://www.youtube.com/watch?v=lg1sN8njSYs)
* [Mobile App Pentesting by Hacking Simplified](https://www.youtube.com/playlist?list=PLGJe0xGh7cH2lszCZ7qwsqouEK23XCMGp)
* [Android Security Testing](https://www.youtube.com/watch?v=6-M_7O3A8AI)
* [Full Android Penetration Testing Course Playlist](https://www.youtube.com/playlist?list=PLwk2o8vr7P8EyIA27vaxCXUUaGHRZj49t)
* [Android App Penetration Testing: OWASP Top 10](https://www.youtube.com/playlist?list=PLdGbzQX3gR8JJkl2J4VmBckqhLhA_mfNY)
* [Bypass Biometrics in Mobile Apps](https://www.youtube.com/watch?v=zIaKX3zgNF8)
* [Intercept traffic with Objection and Burp](https://www.youtube.com/watch?v=Ft3H-3J67UE)
* [Hacking and Pentesting Android Apps](https://www.youtube.com/playlist?list=PL5eTpNI3Q8oUbw9vozVYatATMKKsDtnoJ)
* [Hacking and Pentesting iOS Apps](https://www.youtube.com/playlist?list=PL5eTpNI3Q8oVedOucH_DAdd6SP6wc-KSD)
* [Android Application Pen-testing Course](https://www.youtube.com/playlist?list=PL4S940IsHJYWhhYOpBk6Y-U9nTQq2omae)

<a id="channels"></a>
## YouTube Channels for Mobile Pentesting
- [UnderSecured](https://www.youtube.com/@UnderSecured/videos)
- [B3nacSec](https://www.youtube.com/@B3nacSec/videos)
- [LaurieWired](https://www.youtube.com/@lauriewired/videos)
- [AppSecHub](https://www.youtube.com/@appsechub/videos)

<a id="guides"></a>
## Guides, Cheatsheets, Github repo

* [Android Pentesting Checklist (HackTricks)](https://book.hacktricks.wiki/en/mobile-pentesting/android-checklist.html)
* [Android Pentesting Checklist (GitHub)](https://github.com/Hrishikesh7665/Android-Pentesting-Checklist)
* [Awesome Mobile CTF Resources](https://github.com/xtiankisutsa/awesome-mobile-CTF)
* [Mobile App Pentest Cheatsheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet#readme)
* [All Things Android Security](https://github.com/jdonsec/AllThingsAndroid)
* [Android Bug Bounty Reports & Resources](https://github.com/B3nac/Android-Reports-and-Resources)

<a id="blogs"></a>
## Blogs & Writeups

* [@vaishalinagori112 on Medium](https://medium.com/@vaishalinagori112)
* [@prasadraj954 on Medium](https://medium.com/@prasadraj954)
* [B3nac’s Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources)
* [Oversecured Blog](https://oversecured.com/blog)
* [CorSecure Blog](https://corsecure.blog/)
* [Frida Official Documentation](https://frida.re/docs/)
* [SecurityBreached (Babayaga47)](https://blog.securitybreached.org/)
* [DeeSee's Android Security Resources](https://blog.deesee.xyz/android/security/2020/01/13/android-application-hacking-resources.html)
* [Hacker101: Mobile Crash Course](https://www.hacker101.com/sessions/mobile_crash_course.html)
* [Mobisec Slides](https://web.archive.org/web/20260818182356/https://mobisec.reyammer.io/slides)
* [Bypassing Certificate Pinning (vavkamil)](https://vavkamil.cz/2019/09/15/how-to-bypass-android-certificate-pinning-and-intercept-ssl-traffic/)
* [Android Hacking Primer](https://medium.com/swlh/an-android-hacking-primer-3390fef4e6a0)
* [OWASP Mobile Top Ten 2023: fi5t](https://fi5t.xyz/posts/owasp-mobile-top-ten-2023/)
* [Android SMS Stealer: Max Kersten](https://maxkersten.nl/binary-analysis-course/malware-analysis/android-sms-stealer/)
* [Hacking SMS API via Static Analysis: Security Breached](https://blog.securitybreached.org/2020/02/19/hacking-sms-api-service-provider-of-a-company-android-app-static-security-analysis-bug-bounty-poc/)
* [Bug Bounty Hunting Tips (Mobile Apps: Android Edition)](https://freedium.cfd/https://medium.com/bugbountyhunting/bug-bounty-hunting-tips-2-target-their-mobile-apps-android-edition-f88a9f383fcc)
* [Getting Started in Android Pentesting](https://blog.securitybreached.org/2020/03/17/getting-started-in-android-apps-pentesting/)
* [Exploiting Insecure Firebase DB](https://blog.securitybreached.org/2020/02/04/exploiting-insecure-firebase-database-bugbounty/)
* [Finding Leaked AWS Creds in Android Apps](https://blog.securitybreached.org/2024/06/28/finding-hidden-threats-how-i-found-leaked-aws-credentials-in-an-android-app-api-using-dast/)
* [200+ Bounty Payouts: SQLi in Content Providers](https://infosecwriteups.com/200-bug-bounty-payouts-exploiting-content-providers-with-sql-injection-abd287179b61)
* [8 Ways to Bypass SSL Pinning in iOS](https://medium.com/@vaishalinagori112/8-different-ways-to-bypass-ssl-pinning-in-ios-applications-427dfcbe8bf7)

<a id="talks"></a>
### Mobile Security Conference Talks

| Title | Speaker | Link |
|-------|---------|------|
| Pwning Android Apps at Scale | | [YouTube](https://www.youtube.com/watch?v=24MwHjqMjRk) |
| Hacking Mobile Applications with Frida | David Coursey | [YouTube](https://www.youtube.com/watch?v=xwyXgykedzk) |
| Unlocking secrets of proprietary software using Frida | | [YouTube](https://www.youtube.com/watch?v=QC2jQI7GLus&list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV&index=1) |
| Hacking Banking app | | [YouTube](https://www.youtube.com/watch?v=iMNs8YAy6pk&list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV&index=4) |
| Conference Talks by Laurie Kirk | Laurie Kirk | [YouTube Playlist](https://www.youtube.com/playlist?list=PLn_It163He30yWraeRxdKfEFlLANJnlDE) |

<a id="scanners"></a>
### Android Pentesting Automated Scanners
- **[BeVigil](https://bevigil.com/osint-api)**: OSINT-based mobile app security scanner

<a id="tools-techniques"></a>
## 🛠 Mobile Pentesting Tools & Techniques

* [Frida PDF Guide (Google Drive)](https://drive.google.com/file/d/1JccmMLi6YTnyRrp_rk6vzKrUX3oXK_Yw/view)
* [Frida script to bypass SSL pinning](https://gist.github.com/teknogeek/4dc35fb3801bd7f13e5f0da5b784c725)
* [HEXTREE.IO: Mobile Security Resources](https://www.hextree.io/)
* [APKLeaks: Extract secrets from APKs](https://github.com/dwisiswant0/apkleaks)

<a id="reports"></a>
## Android-Reports-and-Resources

| Category                  | Title | Link | Notes |
|---------------------------|-------|------|-------|
| **Hardcoded credentials** | Disclosure of all uploads via hardcoded api secret | [HackerOne Report](https://hackerone.com/reports/351555) | |
| **WebView** | Android security checklist: WebView | [Blog Post](https://oversecured.com/blog/android-security-checklist-webview/) | |
| **Insecure deeplinks** | Account Takeover Via DeepLink | [HackerOne Report](https://hackerone.com/reports/855618) | |
| | Sensitive information disclosure | [HackerOne Report](https://hackerone.com/reports/401793) | |
| | Path traversal in deeplink query parameter | [HackerOne Report](https://hackerone.com/reports/2553411) | |
| **RCE/ACE** | Why dynamic code loading could be dangerous for your apps: a Google example | [Blog Post](https://oversecured.com/blog/why-dynamic-code-loading-could-be-dangerous-for-your-apps-a-google-example/) | |
| | RCE in TinyCards for Android | [HackerOne Report](https://hackerone.com/reports/281605) | TinyCards made this report private |
| | Persistent arbitrary code execution in Android's Google Play Core Library | [HackerOne Report](https://hackerone.com/reports/971386) | Details, explanation and the PoC |
| | CVE-2020-8913: Persistent arbitrary code execution in Google Play Core library | [Blog Post](https://oversecured.com/blog/oversecured-automatically-discovers-persistent-code-execution-in-the-google-play-core-library/) | CVE-2020-8913 |
| | TikTok: three persistent arbitrary code executions and one theft of arbitrary files | [Blog Post](https://oversecured.com/blog/oversecured-detects-dangerous-vulnerabilities-in-the-tiktok-android-app/) | Oversecured detects dangerous vulnerabilities in TikTok |
| **Memory corruption** | Exploiting memory corruption vulnerabilities on Android | [Blog Post](https://oversecured.com/blog/exploiting-memory-corruption-vulnerabilities-on-android/) | Includes PayPal example |
| **Cryptography** | Use cryptography in mobile apps the right way | [Blog Post](https://oversecured.com/blog/use-cryptography-in-mobile-apps-the-right-way/) | |
| **SQL Injection** | SQL Injection in Content Provider | [HackerOne Report](https://hackerone.com/reports/291764) | |
| | Another SQL Injection in Content Provider | [HackerOne Report](https://hackerone.com/reports/1650264) | |
| **Session theft** | Steal user session | [HackerOne Report](https://hackerone.com/reports/328486) | |
| **Steal files** | Android security checklist: theft of arbitrary files | [Blog Post](https://oversecured.com/blog/android-security-checklist-theft-of-arbitrary-files/) | |
| | How to exploit insecure WebResourceResponse configurations | [Blog Post](https://oversecured.com/blog/android-exploring-vulnerabilities-in-webresourceresponse/) | Includes Amazon apps example |
| | Vulnerable to local file steal, Javascript injection, Open redirect | [HackerOne Report](https://hackerone.com/reports/499348) | |
| | Token leakage due to stolen files via unprotected Activity | [HackerOne Report](https://hackerone.com/reports/288955) | |
| | Steal files due to exported services | [HackerOne Report](https://hackerone.com/reports/258460) | |
| | Steal files due to unprotected exported Activity | [HackerOne Report](https://hackerone.com/reports/161710) | |
| | Steal files due to insecure data storage | [HackerOne Report](https://hackerone.com/reports/44727) | |
| | Insecure local data storage, makes it easy to steal files | [HackerOne Report](https://hackerone.com/reports/57918) | |
| **Bypasses** | Accidental $70k Google Pixel Lock Screen Bypass | [Blog Post](https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass/) | |
| | Golden techniques to bypass host validations | [HackerOne Report](https://hackerone.com/reports/431002) | |
| | Two-factor authentication bypass due to vuln endpoint | [HackerOne Report](https://hackerone.com/reports/202425) | |
| | Another endpoint Auth bypass | [HackerOne Report](https://hackerone.com/reports/205000) | |
| | Bypass PIN/Fingerprint lock | [HackerOne Report](https://hackerone.com/reports/331489) | |
| | Bypass lock protection | [HackerOne Report](https://hackerone.com/reports/490946) | |
| | Bypass of biometrics security functionality | [HackerOne Report](https://hackerone.com/reports/637194) | |
| **XSS** | HTML Injection in BatterySaveArticleRenderer WebView | [HackerOne Report](https://hackerone.com/reports/176065) | |
| | XSS via SAMLAuthActivity | [HackerOne Report](https://hackerone.com/reports/283058) | |
| | XSS in ImageViewerActivity | [HackerOne Report](https://hackerone.com/reports/283063) | |
| | XSS via start ContentActivity | [HackerOne Report](https://hackerone.com/reports/189793) | |
| | XSS on Owncloud webview | [HackerOne Report](https://hackerone.com/reports/87835) | |
| | XSS via Metamask Browser due to CSP not being enforced | [HackerOne Report](https://hackerone.com/reports/1941767) | |
| **Privilege Escalation** | 20 Security Issues Found in Xiaomi Devices | [Blog Post](https://oversecured.com/blog/20-security-issues-found-in-xiaomi-devices/) | |
| | Discovering vendor-specific vulnerabilities in Android | [Blog Post](https://oversecured.com/blog/discovering-vendor-specific-vulnerabilities-in-android/) | |
| | Common mistakes when using permissions in Android | [Blog Post](https://oversecured.com/blog/common-mistakes-when-using-permissions-in-android/) | |
| | Two weeks of securing Samsung devices: Part 2 | [Blog Post](https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-2/) | |
| | Two weeks of securing Samsung devices: Part 1 | [Blog Post](https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-1/) | |
| | Intent Spoofing | [HackerOne Report](https://hackerone.com/reports/97295) | |
| | Access of some not exported content providers | [HackerOne Report](https://hackerone.com/reports/272044) | |
| | Access protected components via intent | [HackerOne Report](https://hackerone.com/reports/200427) | |
| | Fragment injection | [HackerOne Report](https://hackerone.com/reports/43988) | |
| | Javascript injection | [HackerOne Report](https://hackerone.com/reports/54631) | |
| **CSRF** | Deeplink leads to CSRF in follow action | [HackerOne Report](https://hackerone.com/reports/583987) | |
| **Case sensitive account collisions** | overwrite account associated with email via android application | [HackerOne Report](https://hackerone.com/reports/187714) | |
| **Intercept Broadcasts** | Possible to intercept broadcasts about file uploads | [HackerOne Report](https://hackerone.com/reports/167481) | |
| | Vulnerable exported broadcast reciever | [HackerOne Report](https://hackerone.com/reports/289000) | |
| | View every network request response's information | [HackerOne Report](https://hackerone.com/reports/56002) | |
| **Critical LFI vulnerability in Content Provider**           | Content Provider Local File Inclusion | [POC Video](https://www.youtube.com/watch?v=34tNXsqYe9A&list=PLxyxUSarDsdB3MDNzb6Q7GOaBch8IWbOj&index=17) | |

<a id="practice"></a>
## Practice Apps

| Name | Description | Link |
|------|-------------|------|
| Oversecured Vulnerable Android App (OVAA) | A vulnerable app showing modern security bugs in Android apps | [GitHub](https://github.com/oversecured/ovaa) |
| Damn Vulnerable Bank | Vulnerable Banking Application for Android | [GitHub](https://github.com/rewanth1997/Damn-Vulnerable-Bank) |
| InsecureShop | Intentionally Vulnerable Android Application | [GitHub](https://github.com/optiv/InsecureShop) |
| Vuldroid | Vulnerable Android Application made with security issues | [GitHub](https://github.com/jaiswalakshansh/Vuldroid) |
| InjuredAndroid | A vulnerable Android application with ctf examples based on bug bounty findings | [GitHub](https://github.com/B3nac/InjuredAndroid) |
| Android-InsecureBankv2 | Vulnerable Android application for learning about Android insecurities | [GitHub](https://github.com/dineshshetty/Android-InsecureBankv2) |
| Damn Insecure and Vulnerable app (DIVA) | Damn Insecure and vulnerable App for Android | [GitHub](https://github.com/payatu/diva-android) |
| OWASP-GoatDroid-Project | Fully functional training environment for Android security | [GitHub](https://github.com/jackMannino/OWASP-GoatDroid-Project) |
| Sieve | Password Manager app showcasing common vulnerabilities | [APK Download](https://github.com/mwrlabs/drozer/releases/download/2.3.4/sieve.apk) |

<a id="tools"></a>
## Tools

| Name | Description | Link |
|------|-------------|------|
| Android: PentestBook | Mobile pentesting resources | [GitHub](https://github.com/six2dez/pentest-book/blob/master/mobile/android.md) |
| Awesome-Android-Security | Curated list of Android security resources | [GitHub](https://github.com/saeidshirazi/awesome-android-security) |
| android-security-awesome | Collection of Android security resources | [GitHub](https://github.com/ashishb/android-security-awesome) |

<a id="learning"></a>
## Learning Resources

| Title | Description | Link |
|-------|-------------|------|
| OWASP Mobile Top 10 2016 | Top mobile security risks | [OWASP](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10) |
| OWASP Mobile Security Testing Guide | Comprehensive testing guide | [GitHub](https://github.com/OWASP/owasp-mstg) |
| Android Applications Reversing 101 | Beginner's guide to Android reversing | [Blog](https://www.evilsocket.net/2017/04/27/Android-Applications-Reversing-101/) |
| Android Security Guidelines | Box's security guidelines | [Documentation](https://developer.box.com/docs/android-security-guidelines) |
| Attacking Broadcast Receivers | Android security part 18 | [Blog](https://manifestsecurity.com/android-application-security-part-18/) |
| Android WebView Vulnerabilities | Common WebView issues | [Blog](https://pentestlab.blog/2017/02/12/android-webview-vulnerabilities/) |
| Android APK Recon Setup | Setup and tips for recon, archived copy | [Blog](https://web.archive.org/web/20220119073037/https://b3nac.com/posts/2017-11-10-Setup-and-tips-for-Android-APK-recon.html) |
| WebView addJavascriptInterface RCE | Remote code execution via WebView, archived copy | [Blog](https://web.archive.org/web/20190129110441/https://labs.mwrinfosecurity.com/blog/webview-addjavascriptinterface-remote-code-execution/) |
| Install PlayStore on Emulator | Guide for emulator setup | [Medium](https://medium.com/@dai_shi/installing-google-play-services-on-an-android-studio-emulator-fffceb2c28a1) |
| Android Bug Bounty Tips | Targeting mobile apps | [Medium](https://medium.com/bugbountyhunting/bug-bounty-hunting-tips-2-target-their-mobile-apps-android-edition-f88a9f383fcc) |
| Access to Protected Components | Oversecured blog post | [Blog](https://oversecured.com/blog/android-access-to-app-protected-components/) |
| Arbitrary Code Execution | Via third-party package contexts | [Blog](https://oversecured.com/blog/android-arbitrary-code-execution-via-third-party-package-contexts/) |
| Interception of Implicit Intents | Android security issue | [Blog](https://oversecured.com/blog/interception-of-android-implicit-intents/) |
| Evernote Vulnerabilities | Universal XSS and cookie theft | [Blog](https://oversecured.com/blog/evernote-universal-xss-theft-of-all-cookies-from-all-sites-and-more/) |
| Gaining Access to Content Providers | Android security issue | [Blog](https://oversecured.com/blog/gaining-access-to-arbitrary-content-providers/) |

<a id="drozer"></a>
## Learn Drozer for android pentesting

| S.No | Title                                  | Link                                                                   | Notes         |
| ---- | -------------------------------------- | ---------------------------------------------------------------------- | ------------- |
| 1    | Drozer Installation and Basic Usage    | [Watch](https://www.youtube.com/watch?v=L4j7c9nLgHI)                   |               |
| 2    | Android Component Testing with Drozer  | [Watch](https://www.youtube.com/watch?v=qEWHEPU58Hw)                   |               |
| 3    | Content Provider Exploitation          | [Watch](https://www.youtube.com/watch?v=xrqaJFvdC9A&t=184s)            | Start at 3:04 |
| 4    | Advanced Drozer Techniques             | [Watch](https://www.youtube.com/watch?v=B5YwTtNzB9A)                   |               |
| 5    | Practical Drozer Exploits              | [Watch](https://www.youtube.com/watch?v=H-ZjjPy2qzQ)                   |               |
| 6    | Drozer for Penetration Testing         | [Watch](https://www.youtube.com/watch?v=2xQw2Dlbouw)                   |               |
| 7    | Search all Drozer tutorials on YouTube | [Search](https://www.youtube.com/results?search_query=drozer+tutorial) |               |

<a id="frida"></a>
## Learn Frida for android pentesting

- [Frida Playlist 1](https://www.youtube.com/playlist?list=PLKwUZp9HwWoC1E8S8MHHo5qLjldip3oi-)
- [Frida Playlist 2](https://www.youtube.com/playlist?list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV)
- [Frida Playlist 3](https://www.youtube.com/playlist?list=PL8NKgaAXRavRargeiLrq3SAuwlLJLjKrN)
- [Frida Playlist 4](https://www.youtube.com/playlist?list=PLGH1xiL-41XACwGHQjy1vaPIG5kqsPvY2)
- [Frida Tutorial: N2JtRXCofUU](https://www.youtube.com/watch?v=N2JtRXCofUU&t=370s)
- [Frida Tutorial: R3ptGaFW1AU](https://www.youtube.com/watch?v=R3ptGaFW1AU)
- [Frida Tutorial: 8PD6vRBgQrg](https://www.youtube.com/watch?v=8PD6vRBgQrg)

<a id="objection"></a>
## Bypassing Security Protections in APKs via Objection and Frida

- **Learn Objection Basics**: [YouTube Tutorial](https://www.youtube.com/watch?v=Hu8m_XseXm4)
- **Pin Bypass via Objection**: [YouTube Guide](https://www.youtube.com/watch?v=1hJiMGjUnDw)
- **Bypassing APK Detections**:
  - [Objection + Frida Demo](https://www.youtube.com/watch?v=S8Qt1dWfPjs)
  - [Advanced Bypass Techniques](https://www.youtube.com/watch?v=087Vsk5a9RY)
  - [Bypassing Multiple Defenses](https://www.youtube.com/watch?v=BQwyy338Zag)
- **Multi-Part Series**:
  - [Part 1: Fundamentals](https://www.youtube.com/watch?v=5-0KsD7saUg)
  - [Part 2: Intermediate](https://www.youtube.com/watch?v=6lRIR6EQUPI)
  - [Part 3: Advanced](https://www.youtube.com/watch?v=bJgR5PKv2t0)

<a id="burp"></a>
## BurpSuite for Android Pentesting
- [BurpSuite for Android Pentesting Playlist](https://www.youtube.com/playlist?list=PLH5GW4W70qp86GdyQNLY37GcIF0nVksup)

<a id="practice-resources"></a>
## Practice Resources

* [Android Java Challenges](https://web.archive.org/web/20250804225751/https://application.security/free/%20Android-Java)
* [iPhone Swift Labs](https://web.archive.org/web/20250524214704/https://application.security/free/marketing-iphone-swift)

<a id="labs"></a>
## Labs for Hands-On Learning

* [Mobile Hacking Lab](https://www.mobilehackinglab.com/)
* [Security Compass Android Labs](https://securitycompass.github.io/AndroidLabs/index.html)
* [Security Compass iPhone Labs](https://securitycompass.github.io/iPhoneLabs/)
* [OWASP iGoat (Android)](https://code.google.com/archive/p/owasp-igoat/)

<a id="security-tools"></a>
## Security Tools

### Static Analysis Tools
1. [APKTool](https://ibotpeaches.github.io/Apktool/): Decompile/modify APK (smali-level)
2. [Jadx](https://github.com/skylot/jadx) / JD-GUI: Convert DEX to readable Java code
3. [MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF): Automated static + dynamic scanner
4. [Androguard](https://github.com/androguard/androguard): Python tool for APK/DEX/smali analysis
5. [Bytecode Viewer](https://github.com/Konloch/bytecode-viewer): Reverse engineering with multiple decompilers
6. [ClassyShark](https://github.com/google/android-classyshark): Explore APK classes/methods/manifest
7. [QARK](https://github.com/linkedin/qark): Detects security issues in APKs
8. [Enjarify](https://github.com/google/enjarify) / dex2jar: DEX to Java JAR conversion
9. [APKLeaks](https://github.com/dwisiswant0/apkleaks): Extract secrets, tokens, and URLs

### Dynamic Analysis Tools
1. [Frida](https://frida.re/): Hook/modify functions at runtime
2. [Objection](https://github.com/sensepost/objection): Runtime exploitation via Frida (no root required)
3. [Xposed](https://repo.xposed.info/) / [LSPosed](https://github.com/LSPosed/LSPosed): Framework for modifying app behavior
4. [Burp Suite](https://portswigger.net/burp): Intercept/modify network traffic
5. [Drozer](https://labs.withsecure.com/tools/drozer): Android app attack framework
6. [Magisk](https://github.com/topjohnwu/Magisk): Systemless root; works with LSPosed modules
7. [ADB](https://developer.android.com/studio/command-line/adb): Debugging bridge for Android device

### Logging Tools
1. Logcat: Default Android logging system (`adb logcat`)
2. [Pidcat](https://github.com/JakeWharton/pidcat): Filtered Logcat output by package
3. [MatLog](https://github.com/plusCubed/matlog): GUI log reader (useful for non-rooted devices)
4. XLog / Timber: In-app logging libraries used in apps
5. Logd: Android logging daemon behind logcat
6. Syslog: For rooted devices to log everything (system + kernel)

<a id="commands"></a>
## ⌨️ Command Reference

The loose command files are now clean reference pages:

- [Command index](commands/README.md)
- [Drozer commands](commands/drozer.md)
- [General Android commands](commands/general.md)
- [Objection commands](commands/objection.md)
- [Frida certificate setup](commands/frida-cert.md)
- [Android emulator certificate setup](commands/cert-install.md)
- [MobSF with Docker](commands/mobsf.md)
- [Pidcat logging](commands/pidcat.md)
- [Deeplink discovery](commands/deeplinks.md)
- [Command snippets](commands/snippets.md)

<a id="scripts"></a>
## 🧰 Scripts

- [Emulator certificate installer](scripts/cert-install.sh)
- [Sensitive word grep](scripts/grep-sensitive-words.sh)
- [Windows emulator bootstrap](scripts/androidbb.bat)
- [WebView bridge test page](scripts/exploit.html)

<a id="contributing"></a>
## 💡 Contribution

Feel free to raise issues or submit PRs to add more Android bug bounty and mobile hacking resources.
