#!/usr/bin/env python3
"""Build the atlas data and the repository's generated documentation.

Usage:  python3 build.py
Reads:  sources/b3nac-readme.md, sources/extra-reports.json,
        sources/learn-library.json, sources/repo-resources.json, guides.json
Writes: data.json, data.js, ../docs/REPORTS.md, ../docs/LIBRARY.md,
        ../docs/CREDITS.md
"""
import json
import re
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

HERE = Path(__file__).resolve().parent
DOCS = HERE.parent / "docs"
README = HERE / "sources" / "b3nac-readme.md"
GUIDES = HERE / "guides.json"
LEARN_LIBRARY = HERE / "sources" / "learn-library.json"
REPO_RESOURCES = HERE / "sources" / "repo-resources.json"
EXTRA_REPORTS = HERE / "sources" / "extra-reports.json"

CAT_DESC = {
    "Hardcoded credentials": "API secrets and credentials shipped inside the app binary.",
    "WebView": "WebView misconfigurations that turn app content into a web attack surface.",
    "Insecure deeplinks": "Unvalidated deep links routing untrusted input into sensitive screens.",
    "RCE/ACE": "Dynamic code loading and library flaws that end in code execution.",
    "Memory corruption": "Native memory bugs and how they are exploited on Android.",
    "Cryptography": "How cryptography is used, and misused, in mobile apps.",
    "SQL Injection": "Untrusted input reaching SQL in providers and local stores.",
    "Session theft": "Session material exposed to other apps or to an attacker.",
    "Steal files": "Path traversal, exported components and storage flaws that leak files.",
    "Bypasses": "Lock screen, biometric and authentication bypasses.",
    "XSS": "Script injection through WebViews and in-app HTML renderers.",
    "Privilege Escalation": "Intent spoofing, fragment injection and permission mistakes.",
    "CSRF": "Cross-site request forgery reached through app links.",
    "Case sensitive account collisions": "Account takeover via case-sensitive email handling.",
    "Intercept Broadcasts": "Exported receivers and implicit broadcasts leaking data.",
    "Content Provider LFI": "Local file inclusion through an exported content provider.",
}

SECTION_ORDER = {
    "Practice Apps": 0,
    "Tools": 1,
    "Guides": 2,
    "Videos": 3,
    "Commands": 4,
    "Resources": 5,
}


def host_of(url):
    host = urlsplit(url).netloc.lower()
    return host[4:] if host.startswith("www.") else host


def normalize_url(url):
    """Normalize links so duplicates collapse and moved blogs still resolve."""
    parts = urlsplit(url.strip())
    host = parts.netloc.lower()
    path = parts.path.rstrip("/") or "/"

    if host == "blog.oversecured.com":
        return f"https://oversecured.com/blog{path.lower()}/"
    if host == "www.hacker101.com" and path == "/sessions/mobile_crash_course.html":
        return "https://www.hacker101.com/sessions/mobile_crash_course"

    return urlunsplit((parts.scheme, parts.netloc, path, parts.query, ""))


def source_of(url):
    host = host_of(url)
    known = {
        "hackerone.com": ("HackerOne", "hackerone"),
        "github.com": ("GitHub", "github"),
        "oversecured.com": ("Oversecured", "research"),
        "bugs.xdavidhu.me": ("xdavidhu", "research"),
        "pentestlab.blog": ("PentestLab", "research"),
        "medium.com": ("Medium", "research"),
        "owasp.org": ("OWASP", "research"),
        "youtube.com": ("YouTube", "video"),
        "youtu.be": ("YouTube", "video"),
    }
    return known.get(host, (host or "Web", "research"))


def slugify(value):
    """Match GitHub's heading anchors closely enough for the generated docs."""
    value = value.lower()
    value = re.sub(r"[^\w\s-]", "", value, flags=re.UNICODE)
    value = re.sub(r"\s+", "-", value.strip())
    return value


def read_json(path, fallback):
    if not path.exists():
        return fallback
    return json.loads(path.read_text(encoding="utf-8"))


def load_library():
    """Existing curated guides plus the Learn repo's resource lists."""
    library = []
    guides = read_json(GUIDES, {})
    for guide in guides.get("guides", []):
        library.append({
            "section": "Guides",
            "title": guide["title"].strip(),
            "url": guide["url"].strip(),
            "desc": guide.get("desc", "").strip(),
        })
    learn = read_json(LEARN_LIBRARY, {})
    for item in learn.get("resources", []):
        library.append({
            "section": item.get("section", "Resources"),
            "title": item["title"].strip(),
            "url": item["url"].strip(),
            "desc": item.get("desc", "").strip(),
        })
    repo = read_json(REPO_RESOURCES, {})
    for item in repo.get("resources", []):
        library.append({
            "section": item.get("section", "Resources"),
            "title": item["title"].strip(),
            "url": item["url"].strip(),
            "desc": item.get("desc", "").strip(),
        })
    return library, guides.get("credits", [])


def load_extra_reports():
    data = read_json(EXTRA_REPORTS, {})
    return data.get("reports", [])


def parse_readme(text):
    lines = [line.rstrip("\n") for line in text.splitlines()]
    categories, resources = [], []
    mode, current = "HackerOne Reports", None
    i = 0

    while i < len(lines):
        line = lines[i].strip()

        if line.startswith("## "):
            mode, current = line[3:].strip(), None
            i += 1
            continue

        if line.startswith("### "):
            name = line[4:].strip()
            if name == "HackerOne Reports":
                mode = name
            elif mode == "HackerOne Reports":
                current = {"name": name, "items": []}
                categories.append(current)
            i += 1
            continue

        if line.startswith("#### "):
            title = line[5:].strip()
            title = re.sub(r"\s+-\s+", ": ", title)
            j = i + 1
            body_parts = []
            while j < len(lines):
                probe = lines[j].strip()
                if probe.startswith("#") or probe.startswith("---"):
                    break
                if probe:
                    body_parts.append(probe)
                j += 1
            body = " ".join(body_parts)
            match = re.search(r"\[([^\]]*)\]\(([^)]+)\)", body)
            label = match.group(1).strip() if match else ""
            url = match.group(2).strip() if match else ""
            desc = body[match.end():].strip() if match else ""
            desc = re.sub(r"^[-–—:\s]+", "", desc).strip()
            desc = re.sub(r"\s+[–—]\s+", ", ", desc)
            desc = re.sub(r"\s+-\s+", ", ", desc)
            if mode != "HackerOne Reports" and not desc and label:
                duplicate = label.lower() == title.lower()
                if not duplicate and not label.startswith("http"):
                    desc = label
            item = {"title": title, "url": url, "desc": desc}

            if mode == "HackerOne Reports":
                if current is not None:
                    current["items"].append(item)
            else:
                resources.append({"section": mode, "title": title, "url": url, "desc": desc})
            i = j
            continue

        if mode in ("Practice Apps", "Tools", "Resources"):
            match = re.search(r"\[([^\]]*)\]\(([^)]+)\)", line)
            if match:
                label = match.group(1).strip()
                label = re.sub(r"\s+-\s+", ": ", label)
                resources.append({
                    "section": mode,
                    "title": label,
                    "url": match.group(2).strip(),
                    "desc": "",
                })
        i += 1

    return categories, resources


def merge_extra_reports(categories, extras):
    by_name = {c["name"]: c for c in categories}
    seen = {normalize_url(item["url"]) for c in categories for item in c["items"]}
    for extra in extras:
        name = extra["class"]
        category = by_name.get(name)
        if category is None:
            category = {"name": name, "items": []}
            categories.append(category)
            by_name[name] = category
        url = normalize_url(extra["url"])
        if not url or url in seen:
            continue
        seen.add(url)
        category["items"].append({
            "title": extra["title"].strip(),
            "url": url,
            "desc": extra.get("desc", "").strip(),
        })


def table_cell(value):
    return str(value).replace("|", "\\|").replace("\n", " ").strip()


def write_reports_doc(categories):
    lines = [
        "# Android report index",
        "",
        "Public Android vulnerability writeups grouped by attack surface. The base list comes from "
        "[B3nac's Android-Reports-and-Resources](https://github.com/B3nac/Android-Reports-and-Resources); "
        "the extra entries come from this repository's report table.",
        "",
        "## Contents",
        "",
    ]
    for category in categories:
        lines.append(f"- [{category['name']} ({len(category['items'])})](#{category['slug']})")
    lines.append("")
    for category in categories:
        lines.append(f"## {category['name']}")
        lines.append("")
        if category.get("desc"):
            lines.append(category["desc"])
            lines.append("")
        lines.append("| Report | Source | Link |")
        lines.append("| --- | --- | --- |")
        for item in category["items"]:
            lines.append(
                f"| {table_cell(item['title'])} | {table_cell(item['source'])} | "
                f"[Open]({item['url']}) |"
            )
        lines.append("")
    (DOCS / "REPORTS.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def write_library_doc(resources):
    sections = []
    for item in resources:
        if item["section"] not in sections:
            sections.append(item["section"])
    lines = [
        "# Resource library",
        "",
        "Practice apps, tools, guides, videos, command references and further reading for Android testing. "
        "Every entry links to the original author or project.",
        "",
        "## Contents",
        "",
    ]
    for section in sections:
        count = sum(1 for r in resources if r["section"] == section)
        lines.append(f"- [{section} ({count})](#{slugify(section)})")
    lines.append("")
    for section in sections:
        lines.append(f"## {section}")
        lines.append("")
        lines.append("| Resource | Description | Link |")
        lines.append("| --- | --- | --- |")
        for item in resources:
            if item["section"] != section:
                continue
            lines.append(
                f"| {table_cell(item['title'])} | {table_cell(item['desc']) or ' '} | "
                f"[Open]({item['url']}) |"
            )
        lines.append("")
    (DOCS / "LIBRARY.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def write_credits_doc(credits):
    lines = [
        "# Credits",
        "",
        "This repository collects work published by other researchers, writers, projects and tool maintainers. "
        "The report index and library link to the original sources.",
        "",
        "## Contents",
        "",
        "- [Research and resources](#research-and-resources)",
        "- [HackerOne report authors](#hackerone-report-authors)",
        "",
        "## Research and resources",
        "",
        "| Name | Contribution | Link |",
        "| --- | --- | --- |",
    ]
    for credit in credits:
        lines.append(
            f"| {table_cell(credit['name'])} | {table_cell(credit['role'])} | "
            f"[Open]({credit['url']}) |"
        )
    lines.extend([
        "",
        "## HackerOne report authors",
        "",
        "The reading list links to public HackerOne report IDs rather than author profiles, so those "
        "researchers are credited as a group. Open the report from the [report index](REPORTS.md) to see "
        "the original disclosure and its author on HackerOne.",
        "",
    ])
    (DOCS / "CREDITS.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")


def main():
    categories, resources = parse_readme(README.read_text(encoding="utf-8"))
    merge_extra_reports(categories, load_extra_reports())

    library, credits = load_library()
    resources.extend(library)


    for category in categories:
        for item in category["items"]:
            item["url"] = normalize_url(item["url"])
    for item in resources:
        item["url"] = normalize_url(item["url"])

    report_urls = {item["url"] for c in categories for item in c["items"]}
    for category in categories:
        category["desc"] = CAT_DESC.get(category["name"], "")
        category["slug"] = slugify(category["name"])
        for item in category["items"]:
            item["host"] = host_of(item["url"])
            item["source"], item["kind"] = source_of(item["url"])

    categories.sort(key=lambda c: (-len(c["items"]), c["name"].lower()))
    for index, category in enumerate(categories, start=1):
        category["index"] = index

    # A resource already present as a report stays in the tree, not the library.
    seen, unique = set(), []
    for item in resources:
        if item["url"] in report_urls or item["url"] in seen:
            continue
        seen.add(item["url"])
        unique.append(item)

    unique.sort(key=lambda item: SECTION_ORDER.get(item["section"], 99))
    for item in unique:
        item["host"] = host_of(item["url"])
        item["source"], item["kind"] = source_of(item["url"])

    domains = {item["host"] for c in categories for item in c["items"]} | {r["host"] for r in unique}
    sources = {}
    for category in categories:
        for item in category["items"]:
            sources[item["source"]] = sources.get(item["source"], 0) + 1

    for credit in credits:
        if credit["name"] == "HackerOne report authors":
            credit["role"] = f"{sources.get('HackerOne', 0)} public Android reports, credited as a group"
        elif credit["name"] == "Sergey Toshin, Oversecured":
            credit["role"] = f"{sources.get('Oversecured', 0)} Android vulnerability writeups"

    data = {
        "meta": {
            "reports": sum(len(c["items"]) for c in categories),
            "classes": len(categories),
            "resources": len(unique),
            "domains": len(domains),
            "sources": sources,
        },
        "categories": categories,
        "resources": unique,
        "credits": credits,
    }

    DOCS.mkdir(exist_ok=True)
    write_reports_doc(categories)
    write_library_doc(unique)
    write_credits_doc(credits)

    (HERE / "data.json").write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    (HERE / "data.js").write_text(
        "window.ATLAS = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n",
        encoding="utf-8",
    )
    print(
        f"{data['meta']['reports']} reports · {data['meta']['classes']} classes · "
        f"{data['meta']['resources']} resources · {data['meta']['domains']} domains"
    )


if __name__ == "__main__":
    main()
