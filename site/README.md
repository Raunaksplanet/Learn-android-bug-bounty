# Biscuit Security Atlas

A static, framework-free web index for
[Learn Android Bug Bounty](https://github.com/Raunaksplanet/Learn-android-bug-bounty).
Live at <https://raunaksplanet.github.io/Learn-android-bug-bounty/>.

- `52` reports across `16` vulnerability classes
- `142` practice apps, tools, guides, videos, command references and resources
- Collapsible report tree, live search, source filters and a detail drawer
- Dark and light themes, keyboard shortcuts, responsive layout
- Footer credits for the researchers, writers and projects behind the links

## Run it

From this folder:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Opening `index.html` directly also works, but a
local server is recommended for fonts and clipboard permissions.

## Sources

| File | Purpose |
| --- | --- |
| `sources/b3nac-readme.md` | Source copy of B3nac's Android reading list |
| `sources/extra-reports.json` | Reports added from the Learn Android Bug Bounty table |
| `sources/learn-library.json` | Guides, videos, tools and resources parsed from the repository |
| `sources/repo-resources.json` | Command references and scripts from this repository |
| `guides.json` | Curated guide entries and the footer credit roll |

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and static copy |
| `styles.css` | All styling, themes and responsive rules |
| `app.js` | Tree rendering, search, filters, drawer and interactions |
| `data.js` | Generated data loaded by the page, works over `file://` |
| `data.json` | Same data in plain JSON |
| `build.py` | Rebuilds the data and the repository documentation |

## Rebuild

```sh
python3 build.py
```

The build reads the source files above and writes:

- `site/data.json` and `site/data.js`
- `../docs/REPORTS.md`
- `../docs/LIBRARY.md`
- `../docs/CREDITS.md`

Resource descriptions use the source link text where the author provided it.
Entries without one are shown without invented copy. Edit `CAT_DESC` in
`build.py` for class summaries, `guides.json` for the curated guide shelf, or the
files in `sources/` for the merged library.

## Deploy to GitHub Pages

The site uses relative paths, so it works from a project subpath such as
`https://<owner>.github.io/<repo>/`. No server is required.

A workflow at `.github/workflows/pages.yml` rebuilds the data and publishes the
`site/` folder with GitHub Actions. To use it:

1. Push the repository with the workflow included.
2. Open **Settings > Pages** and set **Build and deployment > Source** to
   **GitHub Actions**.
3. Push a change under `site/`, or run the workflow manually from the Actions
   tab.

The published URL is shown in the workflow output. No custom domain is
configured; add a `CNAME` file to `site/` if you want one.

## Credits

All reports, articles, videos and tools belong to their original authors.
The report list is maintained by B3nac. The field notes and resource library are
maintained by Raunak Gupta and Biscuit Security. Nothing is mirrored here. Every
entry links to the original source.
