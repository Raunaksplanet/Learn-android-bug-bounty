window.ATLAS = {
  "meta": {
    "reports": 52,
    "classes": 16,
    "resources": 142,
    "domains": 38,
    "sources": {
      "Oversecured": 13,
      "HackerOne": 37,
      "xdavidhu": 1,
      "YouTube": 1
    }
  },
  "categories": [
    {
      "name": "Privilege Escalation",
      "items": [
        {
          "title": "20 Security Issues Found in Xiaomi Devices",
          "url": "https://oversecured.com/blog/20-security-issues-found-in-xiaomi-devices/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Discovering vendor-specific vulnerabilities in Android",
          "url": "https://oversecured.com/blog/discovering-vendor-specific-vulnerabilities-in-android/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Common mistakes when using permissions in Android",
          "url": "https://oversecured.com/blog/common-mistakes-when-using-permissions-in-android/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Two weeks of securing Samsung devices: Part 1",
          "url": "https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-1/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Two weeks of securing Samsung devices: Part 2",
          "url": "https://oversecured.com/blog/two-weeks-of-securing-samsung-devices-part-2/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Intent Spoofing",
          "url": "https://hackerone.com/reports/97295",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Access protected components via intent",
          "url": "https://hackerone.com/reports/200427",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Fragment injection",
          "url": "https://hackerone.com/reports/43988",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Javascript injection",
          "url": "https://hackerone.com/reports/54631",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Access of some not exported content providers",
          "url": "https://hackerone.com/reports/272044",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Intent spoofing, fragment injection and permission mistakes.",
      "slug": "privilege-escalation",
      "index": 1
    },
    {
      "name": "Steal files",
      "items": [
        {
          "title": "Android security checklist: theft of arbitrary files",
          "url": "https://oversecured.com/blog/android-security-checklist-theft-of-arbitrary-files/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "How to exploit insecure WebResourceResponse configurations + an example of the vulnerability in Amazon apps",
          "url": "https://oversecured.com/blog/android-exploring-vulnerabilities-in-webresourceresponse/",
          "desc": "Android: Exploring vulnerabilities in WebResourceResponse",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "Vulnerable to local file steal, Javascript injection, Open redirect",
          "url": "https://hackerone.com/reports/499348",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Token leakage due to stolen files via unprotected Activity",
          "url": "https://hackerone.com/reports/288955",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Steal files due to exported services",
          "url": "https://hackerone.com/reports/258460",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Steal files due to insecure data storage",
          "url": "https://hackerone.com/reports/44727",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Insecure local data storage, makes it easy to steal files",
          "url": "https://hackerone.com/reports/57918",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Steal files due to unprotected exported Activity",
          "url": "https://hackerone.com/reports/161710",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Path traversal, exported components and storage flaws that leak files.",
      "slug": "steal-files",
      "index": 2
    },
    {
      "name": "Bypasses",
      "items": [
        {
          "title": "Accidental $70k Google Pixel Lock Screen Bypass",
          "url": "https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass",
          "desc": "",
          "host": "bugs.xdavidhu.me",
          "source": "xdavidhu",
          "kind": "research"
        },
        {
          "title": "Two-factor authentication bypass due to vuln endpoint",
          "url": "https://hackerone.com/reports/202425",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Another endpoint Auth bypass",
          "url": "https://hackerone.com/reports/205000",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Bypass PIN/Fingerprint lock",
          "url": "https://hackerone.com/reports/331489",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Bypass lock protection",
          "url": "https://hackerone.com/reports/490946",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Bypass of biometrics security functionality",
          "url": "https://hackerone.com/reports/637194",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Golden techniques to bypass host validations",
          "url": "https://hackerone.com/reports/431002",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Lock screen, biometric and authentication bypasses.",
      "slug": "bypasses",
      "index": 3
    },
    {
      "name": "XSS",
      "items": [
        {
          "title": "XSS via Metamask Browser due to CSP not being enforced",
          "url": "https://hackerone.com/reports/1941767",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "HTML Injection in BatterySaveArticleRenderer WebView",
          "url": "https://hackerone.com/reports/176065",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "XSS via SAMLAuthActivity",
          "url": "https://hackerone.com/reports/283058",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "XSS in ImageViewerActivity",
          "url": "https://hackerone.com/reports/283063",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "XSS via start ContentActivity",
          "url": "https://hackerone.com/reports/189793",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "XSS on Owncloud webview",
          "url": "https://hackerone.com/reports/87835",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Script injection through WebViews and in-app HTML renderers.",
      "slug": "xss",
      "index": 4
    },
    {
      "name": "RCE/ACE",
      "items": [
        {
          "title": "Why dynamic code loading could be dangerous for your apps: a Google example",
          "url": "https://oversecured.com/blog/why-dynamic-code-loading-could-be-dangerous-for-your-apps-a-google-example/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "CVE-2020-8913: Persistent arbitrary code execution in Google Play Core library",
          "url": "https://oversecured.com/blog/oversecured-automatically-discovers-persistent-code-execution-in-the-google-play-core-library/",
          "desc": "Persistent arbitrary code execution in Android's Google Play Core Library: details, explanation and the PoC, CVE-2020-8913",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "TikTok: three persistent arbitrary code executions and one theft of arbitrary files",
          "url": "https://oversecured.com/blog/oversecured-detects-dangerous-vulnerabilities-in-the-tiktok-android-app/",
          "desc": "Oversecured detects dangerous vulnerabilities in the TikTok Android app",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        },
        {
          "title": "RCE in TinyCards for Android",
          "url": "https://hackerone.com/reports/281605",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Persistent arbitrary code execution in Android's Google Play Core Library",
          "url": "https://hackerone.com/reports/971386",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Dynamic code loading and library flaws that end in code execution.",
      "slug": "rceace",
      "index": 5
    },
    {
      "name": "Insecure deeplinks",
      "items": [
        {
          "title": "Path traversal in deeplink query parameter",
          "url": "https://hackerone.com/reports/2553411",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Account Takeover Via DeepLink",
          "url": "https://hackerone.com/reports/855618",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Sensitive information disclosure",
          "url": "https://hackerone.com/reports/401793",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Unvalidated deep links routing untrusted input into sensitive screens.",
      "slug": "insecure-deeplinks",
      "index": 6
    },
    {
      "name": "Intercept Broadcasts",
      "items": [
        {
          "title": "Possible to intercept broadcasts about file uploads",
          "url": "https://hackerone.com/reports/167481",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Vulnerable exported broadcast reciever",
          "url": "https://hackerone.com/reports/289000",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "View every network request response's information",
          "url": "https://hackerone.com/reports/56002",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Exported receivers and implicit broadcasts leaking data.",
      "slug": "intercept-broadcasts",
      "index": 7
    },
    {
      "name": "SQL Injection",
      "items": [
        {
          "title": "SQL Injection in Content Provider",
          "url": "https://hackerone.com/reports/291764",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        },
        {
          "title": "Another SQL Injection in Content Provider",
          "url": "https://hackerone.com/reports/1650264",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Untrusted input reaching SQL in providers and local stores.",
      "slug": "sql-injection",
      "index": 8
    },
    {
      "name": "Case sensitive account collisions",
      "items": [
        {
          "title": "overwrite account associated with email via android application",
          "url": "https://hackerone.com/reports/187714",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Account takeover via case-sensitive email handling.",
      "slug": "case-sensitive-account-collisions",
      "index": 9
    },
    {
      "name": "Content Provider LFI",
      "items": [
        {
          "title": "Content Provider Local File Inclusion",
          "url": "https://www.youtube.com/watch?v=34tNXsqYe9A&list=PLxyxUSarDsdB3MDNzb6Q7GOaBch8IWbOj&index=17",
          "desc": "Video walkthrough of local file inclusion through an exported content provider.",
          "host": "youtube.com",
          "source": "YouTube",
          "kind": "video"
        }
      ],
      "desc": "Local file inclusion through an exported content provider.",
      "slug": "content-provider-lfi",
      "index": 10
    },
    {
      "name": "Cryptography",
      "items": [
        {
          "title": "Use cryptography in mobile apps the right way",
          "url": "https://oversecured.com/blog/use-cryptography-in-mobile-apps-the-right-way/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        }
      ],
      "desc": "How cryptography is used, and misused, in mobile apps.",
      "slug": "cryptography",
      "index": 11
    },
    {
      "name": "CSRF",
      "items": [
        {
          "title": "Deeplink leads to CSRF in follow action",
          "url": "https://hackerone.com/reports/583987",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Cross-site request forgery reached through app links.",
      "slug": "csrf",
      "index": 12
    },
    {
      "name": "Hardcoded credentials",
      "items": [
        {
          "title": "Disclosure of all uploads via hardcoded api secret",
          "url": "https://hackerone.com/reports/351555",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "API secrets and credentials shipped inside the app binary.",
      "slug": "hardcoded-credentials",
      "index": 13
    },
    {
      "name": "Memory corruption",
      "items": [
        {
          "title": "Exploiting memory corruption vulnerabilities on Android",
          "url": "https://oversecured.com/blog/exploiting-memory-corruption-vulnerabilities-on-android/",
          "desc": "Exploiting memory corruption vulnerabilities on Android + an example of such vulnerability in PayPal apps",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        }
      ],
      "desc": "Native memory bugs and how they are exploited on Android.",
      "slug": "memory-corruption",
      "index": 14
    },
    {
      "name": "Session theft",
      "items": [
        {
          "title": "Steal user session",
          "url": "https://hackerone.com/reports/328486",
          "desc": "",
          "host": "hackerone.com",
          "source": "HackerOne",
          "kind": "hackerone"
        }
      ],
      "desc": "Session material exposed to other apps or to an attacker.",
      "slug": "session-theft",
      "index": 15
    },
    {
      "name": "WebView",
      "items": [
        {
          "title": "Android security checklist: WebView",
          "url": "https://oversecured.com/blog/android-security-checklist-webview/",
          "desc": "",
          "host": "oversecured.com",
          "source": "Oversecured",
          "kind": "research"
        }
      ],
      "desc": "WebView misconfigurations that turn app content into a web attack surface.",
      "slug": "webview",
      "index": 16
    }
  ],
  "resources": [
    {
      "section": "Practice Apps",
      "title": "Oversecured Vulnerable Android App",
      "url": "https://github.com/oversecured/ovaa",
      "desc": "A vulnerable app showing modern security bugs in Android apps",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Damn Vulnerable Mobile App",
      "url": "https://github.com/cpeoples/dvma",
      "desc": "Intentionally vulnerable Flutter app for Android and iOS",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Damn Vulnerable Bank",
      "url": "https://github.com/rewanth1997/Damn-Vulnerable-Bank",
      "desc": "Vulnerable Banking Application for Android",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "InsecureShop",
      "url": "https://github.com/optiv/InsecureShop",
      "desc": "Intentionally Vulnerable Android Application",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Vuldroid",
      "url": "https://github.com/jaiswalakshansh/Vuldroid",
      "desc": "Vulnerable Android Application made with security issues",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "InjuredAndroid",
      "url": "https://github.com/B3nac/InjuredAndroid",
      "desc": "A vulnerable Android application with ctf examples based on bug bounty findings, exploitation concepts, and pure creativity.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Android-InsecureBankv2",
      "url": "https://github.com/dineshshetty/Android-InsecureBankv2",
      "desc": "Vulnerable Android application for developers and security enthusiasts to learn about Android insecurities",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Damn Insecure and Vulnerable app",
      "url": "https://github.com/payatu/diva-android",
      "desc": "Damn Insecure and vulnerable App for Android",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "OWASP-GoatDroid-Project",
      "url": "https://github.com/jackMannino/OWASP-GoatDroid-Project",
      "desc": "OWASP GoatDroid is a fully functional and self-contained training environment for educating developers and testers on Android security",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Sieve mwrlabs",
      "url": "https://github.com/mwrlabs/drozer/releases/download/2.3.4/sieve.apk",
      "desc": "Sieve is a small Password Manager app created to showcase some of the common vulnerabilities found in Android applications.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Practice Apps",
      "title": "Android Java Challenges",
      "url": "https://web.archive.org/web/20250804225751/https://application.security/free/%20Android-Java",
      "desc": "",
      "host": "web.archive.org",
      "source": "web.archive.org",
      "kind": "research"
    },
    {
      "section": "Practice Apps",
      "title": "Mobile Hacking Lab",
      "url": "https://www.mobilehackinglab.com/",
      "desc": "",
      "host": "mobilehackinglab.com",
      "source": "mobilehackinglab.com",
      "kind": "research"
    },
    {
      "section": "Practice Apps",
      "title": "Security Compass Android Labs",
      "url": "https://securitycompass.github.io/AndroidLabs/index.html",
      "desc": "",
      "host": "securitycompass.github.io",
      "source": "securitycompass.github.io",
      "kind": "research"
    },
    {
      "section": "Practice Apps",
      "title": "OWASP iGoat (Android)",
      "url": "https://code.google.com/archive/p/owasp-igoat",
      "desc": "",
      "host": "code.google.com",
      "source": "code.google.com",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Android: PentestBook",
      "url": "https://github.com/six2dez/pentest-book/blob/master/mobile/android.md",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Awesome-Android-Security",
      "url": "https://github.com/saeidshirazi/awesome-android-security",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "android-security-awesome",
      "url": "https://github.com/ashishb/android-security-awesome",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "BeVigil",
      "url": "https://bevigil.com/osint-api",
      "desc": "OSINT-based mobile app security scanner",
      "host": "bevigil.com",
      "source": "bevigil.com",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Frida script to bypass SSL pinning",
      "url": "https://gist.github.com/teknogeek/4dc35fb3801bd7f13e5f0da5b784c725",
      "desc": "",
      "host": "gist.github.com",
      "source": "gist.github.com",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "APKLeaks: Extract secrets from APKs",
      "url": "https://github.com/dwisiswant0/apkleaks",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "APKTool",
      "url": "https://ibotpeaches.github.io/Apktool",
      "desc": "Decompile/modify APK (smali-level)",
      "host": "ibotpeaches.github.io",
      "source": "ibotpeaches.github.io",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Jadx",
      "url": "https://github.com/skylot/jadx",
      "desc": "JD-GUI: Convert DEX to readable Java code",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "MobSF",
      "url": "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
      "desc": "Automated static + dynamic scanner",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Androguard",
      "url": "https://github.com/androguard/androguard",
      "desc": "Python tool for APK/DEX/smali analysis",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Bytecode Viewer",
      "url": "https://github.com/Konloch/bytecode-viewer",
      "desc": "Reverse engineering with multiple decompilers",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "ClassyShark",
      "url": "https://github.com/google/android-classyshark",
      "desc": "Explore APK classes/methods/manifest",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "QARK",
      "url": "https://github.com/linkedin/qark",
      "desc": "Detects security issues in APKs",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Enjarify",
      "url": "https://github.com/google/enjarify",
      "desc": "dex2jar: DEX to Java JAR conversion",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Frida",
      "url": "https://frida.re/",
      "desc": "Hook/modify functions at runtime",
      "host": "frida.re",
      "source": "frida.re",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Objection",
      "url": "https://github.com/sensepost/objection",
      "desc": "Runtime exploitation via Frida (no root required)",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Xposed",
      "url": "https://repo.xposed.info/",
      "desc": "LSPosed: Framework for modifying app behavior",
      "host": "repo.xposed.info",
      "source": "repo.xposed.info",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Burp Suite",
      "url": "https://portswigger.net/burp",
      "desc": "Intercept/modify network traffic",
      "host": "portswigger.net",
      "source": "portswigger.net",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Drozer",
      "url": "https://labs.withsecure.com/tools/drozer",
      "desc": "Android app attack framework",
      "host": "labs.withsecure.com",
      "source": "labs.withsecure.com",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Magisk",
      "url": "https://github.com/topjohnwu/Magisk",
      "desc": "Systemless root; works with LSPosed modules",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "ADB",
      "url": "https://developer.android.com/studio/command-line/adb",
      "desc": "Debugging bridge for Android device",
      "host": "developer.android.com",
      "source": "developer.android.com",
      "kind": "research"
    },
    {
      "section": "Tools",
      "title": "Pidcat",
      "url": "https://github.com/JakeWharton/pidcat",
      "desc": "Filtered Logcat output by package",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "MatLog",
      "url": "https://github.com/plusCubed/matlog",
      "desc": "GUI log reader (useful for non-rooted devices)",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Emulator certificate installer",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/scripts/cert-install.sh",
      "desc": "Shell script that boots an AVD and installs a Burp certificate.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Sensitive word grep",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/scripts/grep-sensitive-words.sh",
      "desc": "Search decompiled APK files for secrets and risky strings.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "Windows emulator bootstrap",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/scripts/androidbb.bat",
      "desc": "Start a rooted emulator and frida-server on Windows.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Tools",
      "title": "WebView bridge test page",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/scripts/exploit.html",
      "desc": "Minimal HTML page for testing a JavaScript bridge.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Guides",
      "title": "Mindmap: Android bug bounty checklist",
      "url": "https://xmind.app/m/GkgaYH",
      "desc": "A comprehensive checklist for Android bug bounty.",
      "host": "xmind.app",
      "source": "xmind.app",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Attacking Broadcast Receivers",
      "url": "https://manifestsecurity.com/android-application-security-part-18",
      "desc": "Android security part 18.",
      "host": "manifestsecurity.com",
      "source": "manifestsecurity.com",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Android APK Recon Setup",
      "url": "https://web.archive.org/web/20220119073037/https://b3nac.com/posts/2017-11-10-Setup-and-tips-for-Android-APK-recon.html",
      "desc": "Setup and tips for recon. Archived copy.",
      "host": "web.archive.org",
      "source": "web.archive.org",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Hacker101: Mobile Crash Course",
      "url": "https://www.hacker101.com/sessions/mobile_crash_course",
      "desc": "",
      "host": "hacker101.com",
      "source": "hacker101.com",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Bypassing Android certificate pinning",
      "url": "https://vavkamil.cz/2019/09/15/how-to-bypass-android-certificate-pinning-and-intercept-ssl-traffic",
      "desc": "",
      "host": "vavkamil.cz",
      "source": "vavkamil.cz",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "An Android Hacking Primer",
      "url": "https://medium.com/swlh/an-android-hacking-primer-3390fef4e6a0",
      "desc": "",
      "host": "medium.com",
      "source": "Medium",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "OWASP Mobile Top Ten 2023",
      "url": "https://fi5t.xyz/posts/owasp-mobile-top-ten-2023",
      "desc": "",
      "host": "fi5t.xyz",
      "source": "fi5t.xyz",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Android SMS Stealer",
      "url": "https://maxkersten.nl/binary-analysis-course/malware-analysis/android-sms-stealer",
      "desc": "",
      "host": "maxkersten.nl",
      "source": "maxkersten.nl",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Hacking SMS API via Static Analysis",
      "url": "https://blog.securitybreached.org/2020/02/19/hacking-sms-api-service-provider-of-a-company-android-app-static-security-analysis-bug-bounty-poc",
      "desc": "",
      "host": "blog.securitybreached.org",
      "source": "blog.securitybreached.org",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Getting Started in Android Pentesting",
      "url": "https://blog.securitybreached.org/2020/03/17/getting-started-in-android-apps-pentesting",
      "desc": "",
      "host": "blog.securitybreached.org",
      "source": "blog.securitybreached.org",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Exploiting Insecure Firebase DB",
      "url": "https://blog.securitybreached.org/2020/02/04/exploiting-insecure-firebase-database-bugbounty",
      "desc": "",
      "host": "blog.securitybreached.org",
      "source": "blog.securitybreached.org",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Finding Leaked AWS Creds in Android Apps",
      "url": "https://blog.securitybreached.org/2024/06/28/finding-hidden-threats-how-i-found-leaked-aws-credentials-in-an-android-app-api-using-dast",
      "desc": "",
      "host": "blog.securitybreached.org",
      "source": "blog.securitybreached.org",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "200+ Bounty Payouts: SQLi in Content Providers",
      "url": "https://infosecwriteups.com/200-bug-bounty-payouts-exploiting-content-providers-with-sql-injection-abd287179b61",
      "desc": "",
      "host": "infosecwriteups.com",
      "source": "infosecwriteups.com",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "YesWeHack guide to Android Bug Bounty",
      "url": "https://www.yeswehack.com/learn-bug-bounty/android-lab-mobile-hacking-tools",
      "desc": "",
      "host": "yeswehack.com",
      "source": "yeswehack.com",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Intent Abuse in Google Messages for Wear OS",
      "url": "https://towerofhanoi.it/writeups/cve-2025-12080",
      "desc": "",
      "host": "towerofhanoi.it",
      "source": "towerofhanoi.it",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Android recon for Bug Bounty hunters",
      "url": "https://www.yeswehack.com/learn-bug-bounty/android-recon-bug-bounty-guide",
      "desc": "A complete guide from APK extraction to mapping attack surfaces.",
      "host": "yeswehack.com",
      "source": "yeswehack.com",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Minesweeper Hacked",
      "url": "https://payatu.ai/blog/minesweeper-hacked-how-we-hacked-an-android-game-and-ranked-first-globally",
      "desc": "Reverse engineering an Android game with Frida and tampering leaderboard requests.",
      "host": "payatu.ai",
      "source": "payatu.ai",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Android Pentesting Checklist (HackTricks)",
      "url": "https://book.hacktricks.wiki/en/mobile-pentesting/android-checklist.html",
      "desc": "",
      "host": "book.hacktricks.wiki",
      "source": "book.hacktricks.wiki",
      "kind": "research"
    },
    {
      "section": "Guides",
      "title": "Android Pentesting Checklist (GitHub)",
      "url": "https://github.com/Hrishikesh7665/Android-Pentesting-Checklist",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Guides",
      "title": "Awesome Mobile CTF Resources",
      "url": "https://github.com/xtiankisutsa/awesome-mobile-CTF",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Guides",
      "title": "Mobile App Pentest Cheatsheet",
      "url": "https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Guides",
      "title": "All Things Android Security",
      "url": "https://github.com/jdonsec/AllThingsAndroid",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Guides",
      "title": "Frida PDF Guide (Google Drive)",
      "url": "https://drive.google.com/file/d/1JccmMLi6YTnyRrp_rk6vzKrUX3oXK_Yw/view",
      "desc": "",
      "host": "drive.google.com",
      "source": "drive.google.com",
      "kind": "research"
    },
    {
      "section": "Videos",
      "title": "Mobile Pentesting by Intigriti",
      "url": "https://www.youtube.com/playlist?list=PLmqenIp2RQcjBWzwMZQbIkbuVDmkYi_KF",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Android Bug Bounty Playlist",
      "url": "https://www.youtube.com/playlist?list=PL1f72Oxv5SylOECx9M34pLZlNa7YkJJ14",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "How to Hack Android Apps (Frida)",
      "url": "https://www.youtube.com/watch?v=mr64si_-YwI",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "How to Bypass SSL Pinning",
      "url": "https://www.youtube.com/watch?v=vjCF_O6aZIg",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "How to Root Android Emulator in 2 Minutes",
      "url": "https://www.youtube.com/watch?v=OLgmPxTHLuY",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Intercepting Android App Traffic with BurpSuite",
      "url": "https://www.youtube.com/watch?v=xp8ufidc514",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Mobile Application Pentesting",
      "url": "https://www.youtube.com/playlist?list=PLxlnw7Sfbtf9pBNKKQPJTSyI8KNHvgoMJ",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Finding Sensitive Data in Android Apps with Nerdwell",
      "url": "https://www.youtube.com/watch?v=D_-mHBkfThI",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Exploiting Android Deep Links and Exported Components",
      "url": "https://www.youtube.com/watch?v=lg1sN8njSYs",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Mobile App Pentesting by Hacking Simplified",
      "url": "https://www.youtube.com/playlist?list=PLGJe0xGh7cH2lszCZ7qwsqouEK23XCMGp",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Android Security Testing",
      "url": "https://www.youtube.com/watch?v=6-M_7O3A8AI",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Full Android Penetration Testing Course Playlist",
      "url": "https://www.youtube.com/playlist?list=PLwk2o8vr7P8EyIA27vaxCXUUaGHRZj49t",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Android App Penetration Testing: OWASP Top 10",
      "url": "https://www.youtube.com/playlist?list=PLdGbzQX3gR8JJkl2J4VmBckqhLhA_mfNY",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Bypass Biometrics in Mobile Apps",
      "url": "https://www.youtube.com/watch?v=zIaKX3zgNF8",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Intercept traffic with Objection and Burp",
      "url": "https://www.youtube.com/watch?v=Ft3H-3J67UE",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Hacking and Pentesting Android Apps",
      "url": "https://www.youtube.com/playlist?list=PL5eTpNI3Q8oUbw9vozVYatATMKKsDtnoJ",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Android Application Pen-testing Course",
      "url": "https://www.youtube.com/playlist?list=PL4S940IsHJYWhhYOpBk6Y-U9nTQq2omae",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "UnderSecured",
      "url": "https://www.youtube.com/@UnderSecured/videos",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "B3nacSec",
      "url": "https://www.youtube.com/@B3nacSec/videos",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "LaurieWired",
      "url": "https://www.youtube.com/@lauriewired/videos",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "AppSecHub",
      "url": "https://www.youtube.com/@appsechub/videos",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Pwning Android Apps at Scale",
      "url": "https://www.youtube.com/watch?v=24MwHjqMjRk",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Hacking Mobile Applications with Frida",
      "url": "https://www.youtube.com/watch?v=xwyXgykedzk",
      "desc": "David Coursey",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Unlocking secrets of proprietary software using Frida",
      "url": "https://www.youtube.com/watch?v=QC2jQI7GLus&list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV&index=1",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Hacking Banking app",
      "url": "https://www.youtube.com/watch?v=iMNs8YAy6pk&list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV&index=4",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Conference Talks by Laurie Kirk",
      "url": "https://www.youtube.com/playlist?list=PLn_It163He30yWraeRxdKfEFlLANJnlDE",
      "desc": "Laurie Kirk",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Drozer Installation and Basic Usage",
      "url": "https://www.youtube.com/watch?v=L4j7c9nLgHI",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Android Component Testing with Drozer",
      "url": "https://www.youtube.com/watch?v=qEWHEPU58Hw",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Content Provider Exploitation",
      "url": "https://www.youtube.com/watch?v=xrqaJFvdC9A&t=184s",
      "desc": "Start at 3:04",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Advanced Drozer Techniques",
      "url": "https://www.youtube.com/watch?v=B5YwTtNzB9A",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Practical Drozer Exploits",
      "url": "https://www.youtube.com/watch?v=H-ZjjPy2qzQ",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Drozer for Penetration Testing",
      "url": "https://www.youtube.com/watch?v=2xQw2Dlbouw",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Playlist 1",
      "url": "https://www.youtube.com/playlist?list=PLKwUZp9HwWoC1E8S8MHHo5qLjldip3oi-",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Playlist 2",
      "url": "https://www.youtube.com/playlist?list=PLn4fSTVui_Gwrvhlc7HtHwg3kvZo5b4xV",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Playlist 3",
      "url": "https://www.youtube.com/playlist?list=PL8NKgaAXRavRargeiLrq3SAuwlLJLjKrN",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Playlist 4",
      "url": "https://www.youtube.com/playlist?list=PLGH1xiL-41XACwGHQjy1vaPIG5kqsPvY2",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Tutorial: N2JtRXCofUU",
      "url": "https://www.youtube.com/watch?v=N2JtRXCofUU&t=370s",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Tutorial: R3ptGaFW1AU",
      "url": "https://www.youtube.com/watch?v=R3ptGaFW1AU",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Frida Tutorial: 8PD6vRBgQrg",
      "url": "https://www.youtube.com/watch?v=8PD6vRBgQrg",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection basics",
      "url": "https://www.youtube.com/watch?v=Hu8m_XseXm4",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection certificate pinning bypass",
      "url": "https://www.youtube.com/watch?v=1hJiMGjUnDw",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection + Frida Demo",
      "url": "https://www.youtube.com/watch?v=S8Qt1dWfPjs",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Advanced Bypass Techniques",
      "url": "https://www.youtube.com/watch?v=087Vsk5a9RY",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Bypassing Multiple Defenses",
      "url": "https://www.youtube.com/watch?v=BQwyy338Zag",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection and Frida, part 1: fundamentals",
      "url": "https://www.youtube.com/watch?v=5-0KsD7saUg",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection and Frida, part 2: intermediate",
      "url": "https://www.youtube.com/watch?v=6lRIR6EQUPI",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "Objection and Frida, part 3: advanced",
      "url": "https://www.youtube.com/watch?v=bJgR5PKv2t0",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Videos",
      "title": "BurpSuite for Android Pentesting Playlist",
      "url": "https://www.youtube.com/playlist?list=PLH5GW4W70qp86GdyQNLY37GcIF0nVksup",
      "desc": "",
      "host": "youtube.com",
      "source": "YouTube",
      "kind": "video"
    },
    {
      "section": "Commands",
      "title": "Drozer command reference",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/drozer.md",
      "desc": "Modules for inspecting packages, providers, activities and exported components.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "General Android commands",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/general.md",
      "desc": "Emulator, ADB, Frida, Objection and MobSF commands.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Objection command reference",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/objection.md",
      "desc": "Root, SSL pinning, hooking, memory, file system and intent commands.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Frida certificate setup",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/frida-cert.md",
      "desc": "Convert, push and load a Burp certificate for Frida scripts.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Android emulator certificate setup",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/cert-install.md",
      "desc": "Install a Burp CA certificate in an emulator system trust store.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "MobSF with Docker",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/mobsf.md",
      "desc": "Run MobSF for static and dynamic analysis in Docker.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Pidcat logging",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/pidcat.md",
      "desc": "Filter logcat output by package.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Deeplink discovery",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/deeplinks.md",
      "desc": "Find deeplinks with Android-Deeplink-Parser and Drozer.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Commands",
      "title": "Command snippets",
      "url": "https://github.com/Raunaksplanet/Learn-android-bug-bounty/blob/main/commands/snippets.md",
      "desc": "Compact emulator, ADB, Frida and Objection snippets.",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Resources",
      "title": "OWASP top 10 2016",
      "url": "https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10",
      "desc": "",
      "host": "owasp.org",
      "source": "OWASP",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "OWASP mobile testing guide",
      "url": "https://github.com/OWASP/owasp-mstg",
      "desc": "",
      "host": "github.com",
      "source": "GitHub",
      "kind": "github"
    },
    {
      "section": "Resources",
      "title": "Android Reversing 101",
      "url": "https://www.evilsocket.net/2017/04/27/Android-Applications-Reversing-101",
      "desc": "",
      "host": "evilsocket.net",
      "source": "evilsocket.net",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android Security Guidelines",
      "url": "https://developer.box.com/docs/android-security-guidelines",
      "desc": "",
      "host": "developer.box.com",
      "source": "developer.box.com",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android Webview Vulnerabilities",
      "url": "https://pentestlab.blog/2017/02/12/android-webview-vulnerabilities",
      "desc": "",
      "host": "pentestlab.blog",
      "source": "PentestLab",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Install PLayStore On Android Emulator",
      "url": "https://medium.com/@dai_shi/installing-google-play-services-on-an-android-studio-emulator-fffceb2c28a1",
      "desc": "",
      "host": "medium.com",
      "source": "Medium",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android Bug Bounty Tips",
      "url": "https://medium.com/bugbountyhunting/bug-bounty-hunting-tips-2-target-their-mobile-apps-android-edition-f88a9f383fcc",
      "desc": "",
      "host": "medium.com",
      "source": "Medium",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android: Access to app protected components",
      "url": "https://oversecured.com/blog/android-access-to-app-protected-components/",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android: arbitrary code execution via third-party package contexts",
      "url": "https://oversecured.com/blog/android-arbitrary-code-execution-via-third-party-package-contexts/",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Interception of Android implicit intents",
      "url": "https://oversecured.com/blog/interception-of-android-implicit-intents/",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Evernote: Universal-XSS, theft of all cookies from all sites, and more",
      "url": "https://oversecured.com/blog/evernote-universal-xss-theft-of-all-cookies-from-all-sites-and-more/",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Android: Gaining access to arbitrary* Content Providers",
      "url": "https://oversecured.com/blog/gaining-access-to-arbitrary-content-providers/",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Oversecured Blog",
      "url": "https://oversecured.com/blog",
      "desc": "",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "CorSecure Blog",
      "url": "https://corsecure.blog/",
      "desc": "",
      "host": "corsecure.blog",
      "source": "corsecure.blog",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "DeeSee's Android Security Resources",
      "url": "https://blog.deesee.xyz/android/security/2020/01/13/android-application-hacking-resources.html",
      "desc": "",
      "host": "blog.deesee.xyz",
      "source": "blog.deesee.xyz",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "HEXTREE.IO: Mobile Security Resources",
      "url": "https://www.hextree.io/",
      "desc": "",
      "host": "hextree.io",
      "source": "hextree.io",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Access to Protected Components",
      "url": "https://oversecured.com/blog/android-access-to-app-protected-components",
      "desc": "Oversecured blog post",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Arbitrary Code Execution",
      "url": "https://oversecured.com/blog/android-arbitrary-code-execution-via-third-party-package-contexts",
      "desc": "Via third-party package contexts",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Interception of Implicit Intents",
      "url": "https://oversecured.com/blog/interception-of-android-implicit-intents",
      "desc": "Android security issue",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Evernote Vulnerabilities",
      "url": "https://oversecured.com/blog/evernote-universal-xss-theft-of-all-cookies-from-all-sites-and-more",
      "desc": "Universal XSS and cookie theft",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    },
    {
      "section": "Resources",
      "title": "Gaining Access to Content Providers",
      "url": "https://oversecured.com/blog/gaining-access-to-arbitrary-content-providers",
      "desc": "Android security issue",
      "host": "oversecured.com",
      "source": "Oversecured",
      "kind": "research"
    }
  ],
  "credits": [
    {
      "name": "B3nac",
      "role": "Reading list, InjuredAndroid, APK recon guide",
      "url": "https://github.com/B3nac"
    },
    {
      "name": "Sergey Toshin, Oversecured",
      "role": "13 Android vulnerability writeups",
      "url": "https://oversecured.com/blog"
    },
    {
      "name": "David Schütz, xdavidhu",
      "role": "Pixel lock screen bypass research",
      "url": "https://bugs.xdavidhu.me/"
    },
    {
      "name": "HackerOne report authors",
      "role": "37 public Android reports, credited as a group",
      "url": "https://hackerone.com/hacktivity"
    },
    {
      "name": "Raunak Gupta, Biscuit Security",
      "role": "Additional Android guides and notes",
      "url": "https://biscuitsecurity.com/"
    },
    {
      "name": "SecurityBreached, Babayaga47",
      "role": "Android bug bounty writeups",
      "url": "https://blog.securitybreached.org/"
    },
    {
      "name": "YesWeHack",
      "role": "Android bug bounty guides",
      "url": "https://www.yeswehack.com/learn-bug-bounty/android-lab-mobile-hacking-tools"
    },
    {
      "name": "Payatu",
      "role": "Minesweeper reverse engineering writeup",
      "url": "https://payatu.ai/blog/"
    },
    {
      "name": "Max Kersten",
      "role": "Android SMS stealer analysis",
      "url": "https://maxkersten.nl/"
    },
    {
      "name": "fi5t",
      "role": "OWASP Mobile Top 10 2023 writeup",
      "url": "https://fi5t.xyz/"
    },
    {
      "name": "Vavkamil",
      "role": "Certificate pinning bypass guide",
      "url": "https://vavkamil.cz/"
    },
    {
      "name": "Manifest Security",
      "role": "Broadcast receiver guide",
      "url": "https://manifestsecurity.com/"
    },
    {
      "name": "Hacker101",
      "role": "Mobile crash course",
      "url": "https://www.hacker101.com/"
    },
    {
      "name": "Xmind",
      "role": "Hosts the Android bug bounty checklist",
      "url": "https://xmind.app/"
    },
    {
      "name": "Infosec Writeups",
      "role": "SQLi in content providers writeup",
      "url": "https://infosecwriteups.com/"
    },
    {
      "name": "Tower of Hanoi",
      "role": "Wear OS intent abuse writeup",
      "url": "https://towerofhanoi.it/"
    },
    {
      "name": "PentestLab",
      "role": "Android WebView vulnerabilities",
      "url": "https://pentestlab.blog/"
    },
    {
      "name": "evilsocket",
      "role": "Android reversing 101",
      "url": "https://www.evilsocket.net/"
    },
    {
      "name": "OWASP",
      "role": "MSTG, Mobile Top 10 and GoatDroid",
      "url": "https://owasp.org/"
    },
    {
      "name": "Box",
      "role": "Android security guidelines",
      "url": "https://developer.box.com/"
    },
    {
      "name": "Dai Shi",
      "role": "Play Store on emulator guide",
      "url": "https://medium.com/@dai_shi"
    },
    {
      "name": "Bug Bounty Hunting",
      "role": "Mobile app bug bounty tips",
      "url": "https://medium.com/bugbountyhunting"
    },
    {
      "name": "Intigriti",
      "role": "Mobile pentesting tutorials",
      "url": "https://www.intigriti.com/"
    },
    {
      "name": "Hacking Simplified",
      "role": "Mobile app pentesting videos",
      "url": "https://www.youtube.com/@HackingSimplifiedAS"
    },
    {
      "name": "UnderSecured",
      "role": "Android security videos",
      "url": "https://www.youtube.com/@UnderSecured"
    },
    {
      "name": "B3nacSec",
      "role": "Android security videos",
      "url": "https://www.youtube.com/@B3nacSec"
    },
    {
      "name": "LaurieWired",
      "role": "Mobile reverse engineering videos",
      "url": "https://www.youtube.com/@lauriewired"
    },
    {
      "name": "AppSecHub",
      "role": "App security videos",
      "url": "https://www.youtube.com/@appsechub"
    },
    {
      "name": "Hextree",
      "role": "Mobile security training",
      "url": "https://www.hextree.io/"
    },
    {
      "name": "HackTricks",
      "role": "Android pentesting checklist",
      "url": "https://book.hacktricks.wiki/en/mobile-pentesting/android-checklist.html"
    },
    {
      "name": "Open source tool maintainers",
      "role": "Frida, Objection, Drozer, MobSF, JADX and other tools linked here",
      "url": "https://github.com/skylot/jadx"
    }
  ]
};
