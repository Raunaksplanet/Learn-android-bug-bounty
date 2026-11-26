/* ==========================================================================
   Biscuit Security Atlas: behaviour
   ========================================================================== */
(() => {
  "use strict";

  const A = window.ATLAS;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const CAT_COLORS = [
    "#d9b878", "#8fb8a8", "#8aa9c9", "#d08d7d", "#a99ac9",
    "#bdb18d", "#9fb0a4", "#c4a58f", "#93a8b8", "#b3a3b3"
  ];
  const SOURCE_COLORS = {
    hackerone: "var(--hackerone)",
    research: "var(--research)",
    github: "var(--github)",
    video: "var(--coral)"
  };
  const SECTION_LABEL = {
    "Practice Apps": "Practice app",
    "Tools": "Tool",
    "Guides": "Guide",
    "Videos": "Video",
    "Commands": "Command",
    "Resources": "Resource"
  };

  const ARROW_SVG = '<svg viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M4 10 10 4M5 4h5v5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* --------------------------------------------------------------------
     Theme
     -------------------------------------------------------------------- */
  const rootEl = document.documentElement;
  const themeBtn = $("#theme-toggle");
  const metaTheme = $('meta[name="theme-color"]');

  function applyTheme(theme) {
    rootEl.dataset.theme = theme;
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    if (metaTheme) metaTheme.setAttribute("content", theme === "dark" ? "#0a0b0c" : "#f6f4ef");
    try { localStorage.setItem("atlas-theme", theme); } catch (e) { /* noop */ }
  }

  let storedTheme = null;
  try { storedTheme = localStorage.getItem("atlas-theme"); } catch (e) { /* noop */ }
  applyTheme(storedTheme === "light" ? "light" : "dark");

  themeBtn.addEventListener("click", () => {
    applyTheme(rootEl.dataset.theme === "dark" ? "light" : "dark");
  });

  // The page is useless without its data file, so say so instead of leaving
  // an empty panel and dead controls behind.
  if (!A || !Array.isArray(A.categories)) {
    const treeRoot = $("#tree-root");
    if (treeRoot) {
      const message = document.createElement("p");
      message.className = "load-error";
      message.append("The report index could not load. ");
      const link = document.createElement("a");
      link.href = "https://github.com/Raunaksplanet/Learn-android-bug-bounty";
      link.textContent = "Open the repository on GitHub";
      message.append(link, ".");
      treeRoot.replaceChildren(message);
    }
    $(".toolbar")?.remove();
    $(".tree-controls")?.remove();
    const status = $("#tree-status");
    if (status) status.textContent = "Report index unavailable.";
    console.error("Atlas data missing: window.ATLAS was not provided by data.js.");
    return;
  }

  /* --------------------------------------------------------------------
     Stats
     -------------------------------------------------------------------- */
  const statValues = $$(".stats dd");
  if (statValues.length >= 4) {
    statValues[0].textContent = A.meta.reports;
    statValues[1].textContent = A.meta.classes;
    statValues[2].textContent = A.meta.resources;
    statValues[3].textContent = A.meta.domains;
  }

  /* --------------------------------------------------------------------
     Hero constellation
     -------------------------------------------------------------------- */
  function polar(cx, cy, r, deg) {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  }

  function svgEl(name, attrs = {}) {
    const node = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  }

  function buildHeroArt() {
    const host = $("#hero-art");
    if (!host) return;

    const size = 560;
    const c = size / 2;
    const svg = svgEl("svg", { viewBox: `0 0 ${size} ${size}`, focusable: "false" });

    const defs = svgEl("defs");
    const grad = svgEl("radialGradient", { id: "heroGlow" });
    grad.append(
      svgEl("stop", { offset: "0%", "stop-color": "#d9b878", "stop-opacity": "0.14" }),
      svgEl("stop", { offset: "55%", "stop-color": "#d9b878", "stop-opacity": "0.04" }),
      svgEl("stop", { offset: "100%", "stop-color": "#d9b878", "stop-opacity": "0" })
    );
    defs.append(grad);
    svg.append(defs);

    svg.append(svgEl("circle", { cx: c, cy: c, r: 262, class: "glow", fill: "url(#heroGlow)" }));

    [86, 132, 178, 222].forEach((r, i) => {
      svg.append(svgEl("circle", {
        cx: c, cy: c, r,
        class: i === 3 ? "ring-faint" : "ring"
      }));
    });

    const spin = svgEl("g", { class: "spin" });
    spin.append(svgEl("circle", { cx: c, cy: c, r: 254, class: "ring-dash" }));
    const [ox, oy] = polar(c, c, 254, 24);
    spin.append(svgEl("circle", { cx: ox, cy: oy, r: 2.4, class: "orbit-dot" }));
    svg.append(spin);

    const spinRev = svgEl("g", { class: "spin-rev" });
    spinRev.append(svgEl("circle", { cx: c, cy: c, r: 196, class: "ring-dash", opacity: "0.4" }));
    const [rx, ry] = polar(c, c, 196, 155);
    spinRev.append(svgEl("circle", { cx: rx, cy: ry, r: 2, class: "orbit-dot", opacity: "0.55" }));
    svg.append(spinRev);

    // arc highlight
    const arcR = 240;
    const [ax1, ay1] = polar(c, c, arcR, 206);
    const [ax2, ay2] = polar(c, c, arcR, 318);
    svg.append(svgEl("path", {
      d: `M ${ax1} ${ay1} A ${arcR} ${arcR} 0 0 1 ${ax2} ${ay2}`,
      class: "arc"
    }));

    const cats = A.categories;
    const n = cats.length;
    const step = 360 / n;

    cats.forEach((cat, i) => {
      const angle = i * step;
      const [x1, y1] = polar(c, c, 96, angle);
      const [x2, y2] = polar(c, c, 198, angle);
      const [nx, ny] = polar(c, c, 205, angle);
      const [tx1, ty1] = polar(c, c, 226, angle);
      const [tx2, ty2] = polar(c, c, 232, angle);

      const color = CAT_COLORS[i % CAT_COLORS.length];

      svg.append(svgEl("line", { x1, y1, x2, y2, class: "spoke" }));
      svg.append(svgEl("line", { x1: tx1, y1: ty1, x2: tx2, y2: ty2, stroke: "var(--line-strong)", "stroke-width": "1" }));

      if (cat.items.length >= 5) {
        const halo = svgEl("circle", { cx: nx, cy: ny, r: 8.5, fill: color, opacity: "0.12" });
        svg.append(halo);
      }

      const dot = svgEl("circle", {
        cx: nx, cy: ny, r: cat.items.length >= 5 ? 3.6 : 3,
        fill: color, opacity: cat.items.length >= 5 ? "0.95" : "0.65"
      });
      const title = svgEl("title");
      title.textContent = `${cat.name}: ${cat.items.length} report${cat.items.length === 1 ? "" : "s"}`;
      dot.append(title);
      svg.append(dot);
    });

    svg.append(svgEl("circle", { cx: c, cy: c, r: 31, class: "ring-faint" }));
    svg.append(svgEl("circle", { cx: c, cy: c, r: 22, class: "ring", "stroke-dasharray": "1 5" }));
    svg.append(svgEl("line", { x1: c - 14, y1: c, x2: c + 14, y2: c, class: "cross" }));
    svg.append(svgEl("line", { x1: c, y1: c - 14, x2: c, y2: c + 14, class: "cross" }));
    svg.append(svgEl("circle", { cx: c, cy: c, r: 9, fill: "var(--gold)", opacity: "0.1" }));
    svg.append(svgEl("circle", { cx: c, cy: c, r: 2.8, fill: "var(--gold)" }));

    host.append(svg);
  }

  buildHeroArt();

  /* --------------------------------------------------------------------
     Tree
     -------------------------------------------------------------------- */
  const treeRoot = $("#tree-root");
  const treeShell = $(".tree-shell");
  const statusEl = $("#tree-status");
  const emptyEl = $("#empty-state");
  const emptyCopy = $("#empty-copy");
  const searchEl = $("#search");
  const clearBtn = $("#search-clear");
  const chipsEl = $("#source-chips");
  const expandAllBtn = $('[data-tree-action="expand"]');
  const collapseAllBtn = $('[data-tree-action="collapse"]');

  const reports = [];       // flat list
  const reportByKey = new Map();
  const branches = [];

  const rootRow = document.createElement("div");
  rootRow.className = "root-row";
  rootRow.innerHTML = `
    <span class="root-mark" aria-hidden="true"></span>
    <span>
      <span class="root-label">Android attack surface</span>
      <span class="root-meta">${A.meta.classes} classes · ${A.meta.reports} reports</span>
    </span>
    <span class="root-count">${String(A.meta.reports).padStart(2, "0")}</span>
  `;
  treeRoot.append(rootRow);

  const branchesEl = document.createElement("ul");
  branchesEl.className = "branches";
  treeRoot.append(branchesEl);

  A.categories.forEach((cat, ci) => {
    const li = document.createElement("li");
    li.className = "branch";
    li.dataset.slug = cat.slug;
    li.dataset.open = "false";

    const head = document.createElement("div");
    head.className = "branch-head";

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "branch-toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", `leaves-${cat.slug}`);
    toggle.innerHTML = `
      <svg class="chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span class="cat-dot" aria-hidden="true"></span>
      <span class="branch-name"><span></span><span class="branch-index"></span></span>
      <span class="branch-count"></span>
    `;
    toggle.querySelector(".cat-dot").style.setProperty("--dot", CAT_COLORS[ci % CAT_COLORS.length]);
    toggle.querySelector(".branch-name > span").textContent = cat.name;
    toggle.querySelector(".branch-index").textContent = String(cat.index).padStart(2, "0");
    const initialCount = document.createElement("b");
    initialCount.textContent = cat.items.length;
    toggle.querySelector(".branch-count").append(
      initialCount,
      cat.items.length === 1 ? " report" : " reports"
    );
    head.append(toggle);

    if (cat.desc) {
      const desc = document.createElement("p");
      desc.className = "branch-desc";
      desc.textContent = cat.desc;
      head.append(desc);
    }

    const wrap = document.createElement("div");
    wrap.className = "leaves-wrap";
    const clip = document.createElement("div");
    clip.className = "leaves-clip";
    const leaves = document.createElement("ul");
    leaves.className = "leaves";
    leaves.id = `leaves-${cat.slug}`;

    const entries = [];

    cat.items.forEach((item, idx) => {
      const key = `${cat.slug}:${idx}`;
      const rec = { ...item, cat, key, index: idx + 1, total: cat.items.length };
      reports.push(rec);
      reportByKey.set(key, rec);

      const leaf = document.createElement("li");
      leaf.className = "leaf";

      const main = document.createElement("button");
      main.type = "button";
      main.className = "leaf-main";
      main.dataset.key = key;

      const title = document.createElement("span");
      title.className = "leaf-title";
      title.textContent = item.title;

      const meta = document.createElement("span");
      meta.className = "leaf-meta";
      const badge = document.createElement("span");
      badge.className = "source-badge";
      badge.dataset.kind = item.kind;
      badge.textContent = item.source;
      meta.append(badge);

      main.append(title, meta);

      const open = document.createElement("a");
      open.className = "leaf-open";
      open.href = item.url;
      open.target = "_blank";
      open.rel = "noopener";
      open.setAttribute("aria-label", `Open “${item.title}” in a new tab`);
      open.innerHTML = ARROW_SVG;

      leaf.append(main, open);
      leaves.append(leaf);

      entries.push({
        li: leaf,
        report: rec,
        text: `${item.title} ${item.desc || ""} ${cat.name} ${item.source} ${item.host} ${item.kind}`.toLowerCase()
      });
    });

    clip.append(leaves);
    wrap.append(clip);
    li.append(head, wrap);
    branchesEl.append(li);

    const branch = {
      li,
      toggle,
      wrap,
      entries,
      total: cat.items.length,
      countEl: toggle.querySelector(".branch-count")
    };
    branches.push(branch);

    toggle.addEventListener("click", () => {
      setBranchOpen(branch, li.dataset.open !== "true");
    });
  });

  function visibleBranches() {
    return branches.filter((branch) => !branch.li.hidden);
  }

  // Keep the bulk controls honest: disable a control that would change nothing.
  function syncTreeControls() {
    const scope = visibleBranches();
    expandAllBtn.disabled = !scope.some((branch) => branch.li.dataset.open !== "true");
    collapseAllBtn.disabled = !scope.some((branch) => branch.li.dataset.open === "true");
  }

  function setBranchOpen(branch, open) {
    branch.li.dataset.open = open ? "true" : "false";
    branch.toggle.setAttribute("aria-expanded", open ? "true" : "false");
    try { branch.wrap.inert = !open; } catch (e) { /* inert unsupported */ }
    if (!open) {
      // move focus out of a collapsed subtree
      if (branch.li.contains(document.activeElement) && document.activeElement !== branch.toggle) {
        branch.toggle.focus({ preventScroll: true });
      }
    }
    syncTreeControls();
  }

  // start collapsed: a scannable table of contents for the whole collection
  branches.forEach((b) => setBranchOpen(b, false));

  [expandAllBtn, collapseAllBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      const expand = btn.dataset.treeAction === "expand";
      const scope = visibleBranches();
      scope.forEach((branch) => setBranchOpen(branch, expand));
      if (savedOpen) scope.forEach((branch) => savedOpen.set(branch, expand));
    });
  });

  treeRoot.addEventListener("click", (e) => {
    const main = e.target.closest(".leaf-main");
    if (!main) return;
    openDrawer(main.dataset.key);
  });

  /* --------------------------------------------------------------------
     Source chips
     -------------------------------------------------------------------- */
  const sourceKinds = {};
  reports.forEach((r) => { if (!(r.source in sourceKinds)) sourceKinds[r.source] = r.kind; });

  const sourceOrder = Object.entries(A.meta.sources).sort((a, b) => b[1] - a[1]);
  const state = { query: "", source: "all" };
  let savedOpen = null;

  function makeChip(label, count, kind, value) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.value = value;
    chip.setAttribute("aria-pressed", value === "all" ? "true" : "false");

    if (kind) {
      const dot = document.createElement("span");
      dot.className = "chip-dot";
      dot.style.setProperty("--chip-color", SOURCE_COLORS[kind] || "var(--text-faint)");
      dot.setAttribute("aria-hidden", "true");
      chip.append(dot);
    }
    chip.append(document.createTextNode(label));

    const c = document.createElement("span");
    c.className = "chip-count";
    c.textContent = count;
    chip.append(c);

    chip.addEventListener("click", () => {
      state.source = value;
      $$(".chip", chipsEl).forEach((el) => el.setAttribute("aria-pressed", el === chip ? "true" : "false"));
      applyFilters();
    });
    return chip;
  }

  chipsEl.append(makeChip("All", A.meta.reports, null, "all"));
  sourceOrder.forEach(([name, count]) => {
    chipsEl.append(makeChip(name, count, sourceKinds[name], name));
  });

  /* --------------------------------------------------------------------
     Filtering
     -------------------------------------------------------------------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setStatus(matches, visibleClasses, filtering) {
    statusEl.replaceChildren();
    if (!filtering) {
      statusEl.textContent = `${A.meta.reports} reports across ${A.meta.classes} classes`;
      return;
    }
    const frag = document.createDocumentFragment();
    frag.append("Showing ");
    const strong = document.createElement("strong");
    strong.textContent = matches;
    frag.append(strong, ` of ${A.meta.reports} reports`);
    if (state.query.trim()) frag.append(` for “${state.query.trim()}”`);
    if (visibleClasses) frag.append(` in ${visibleClasses} ${visibleClasses === 1 ? "class" : "classes"}`);
    statusEl.append(frag);
  }

  function applyFilters() {
    const q = state.query.trim().toLowerCase();
    const filtering = q.length > 0 || state.source !== "all";

    if (filtering) {
      if (!savedOpen) savedOpen = new Map(branches.map((b) => [b, b.li.dataset.open === "true"]));
    } else if (savedOpen) {
      branches.forEach((b) => setBranchOpen(b, savedOpen.get(b)));
      savedOpen = null;
    }

    let matches = 0;
    let visibleClasses = 0;

    branches.forEach((b, i) => {
      let count = 0;
      b.entries.forEach((entry) => {
        const okQuery = !q || entry.text.includes(q);
        const okSource = state.source === "all" || entry.report.source === state.source;
        const show = okQuery && okSource;
        entry.li.hidden = !show;
        if (show) count += 1;
      });

      b.li.hidden = count === 0;
      if (count > 0) visibleClasses += 1;
      matches += count;

      b.countEl.replaceChildren();
      const strong = document.createElement("b");
      strong.textContent = filtering ? count : b.total;
      b.countEl.append(strong);
      if (filtering && count !== b.total) {
        b.countEl.append(` of ${b.total}`);
      }
      b.countEl.append(count === 1 ? " report" : " reports");

      if (filtering && count > 0) setBranchOpen(b, true);
    });

    const isEmpty = matches === 0;
    treeShell.hidden = isEmpty;
    emptyEl.hidden = !isEmpty;
    if (isEmpty) {
      emptyCopy.textContent = state.query.trim()
        ? `Nothing in the atlas matches “${state.query.trim()}”. Try a broader term or another source.`
        : "No reports match the selected source.";
    }

    setStatus(matches, visibleClasses, filtering);
    clearBtn.hidden = !state.query;
    syncTreeControls();
    return isEmpty;
  }

  let searchTimer = 0;
  searchEl.addEventListener("input", () => {
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      state.query = searchEl.value;
      applyFilters();
    }, 90);
  });

  clearBtn.addEventListener("click", () => {
    searchEl.value = "";
    state.query = "";
    applyFilters();
    searchEl.focus({ preventScroll: true });
  });

  $("#empty-reset").addEventListener("click", () => {
    searchEl.value = "";
    state.query = "";
    state.source = "all";
    $$(".chip", chipsEl).forEach((el) => el.setAttribute("aria-pressed", el.dataset.value === "all" ? "true" : "false"));
    applyFilters();
    searchEl.focus({ preventScroll: true });
  });

  /* --------------------------------------------------------------------
     Drawer
     -------------------------------------------------------------------- */
  const drawer = $("#drawer");
  const backdrop = $("#drawer-backdrop");
  const drawerClose = $("#drawer-close");
  const drawerTitle = $("#drawer-title");
  const drawerDesc = $("#drawer-desc");
  const drawerSource = $("#drawer-source");
  const drawerClass = $("#drawer-class");
  const drawerPath = $("#drawer-path");
  const drawerPathFull = $("#drawer-path-full");
  const drawerHost = $("#drawer-host");
  const drawerUrl = $("#drawer-url");
  const drawerOpen = $("#drawer-open");
  const drawerCopy = $("#drawer-copy");
  const drawerNote = $(".drawer-note");
  let lastFocus = null;

  drawer.inert = true;

  function openDrawer(key) {
    const rec = reportByKey.get(key);
    if (!rec) return;

    lastFocus = document.activeElement;
    const pretty = rec.url.replace(/^https?:\/\//, "");

    drawerTitle.textContent = rec.title;
    drawerDesc.textContent = rec.desc || "The source reading list does not include a summary for this entry. Open the original writeup for the full details.";
    drawerSource.textContent = rec.source;
    drawerSource.dataset.kind = rec.kind;
    drawerClass.textContent = rec.cat.name;
    drawerHost.textContent = rec.host || "web";
    drawerUrl.textContent = pretty;
    drawerUrl.title = rec.url;
    drawerOpen.href = rec.url;
    drawerPath.textContent = `Tree / ${rec.cat.name}`;
    drawerPathFull.textContent = `Android / ${rec.cat.name} / ${rec.index} of ${rec.total}`;
    drawerOpen.setAttribute("aria-label", `Open “${rec.title}” in a new tab`);
    drawerCopy.textContent = "Copy link";
    drawerCopy.disabled = false;

    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    drawer.inert = false;
    document.body.classList.add("is-locked");
    drawer.classList.add("is-open");
    backdrop.classList.add("is-open");
    // Force style resolution, then move focus. If the panel still is not
    // focusable in this tick, retry on the next frame.
    void drawer.offsetWidth;
    drawerClose.focus({ preventScroll: true });
    if (!drawer.contains(document.activeElement)) {
      requestAnimationFrame(() => drawerClose.focus({ preventScroll: true }));
    }
  }

  function closeDrawer() {
    if (!drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open");
    backdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
    drawer.inert = true;
    document.body.classList.remove("is-locked");
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
    lastFocus = null;
  }

  drawerClose.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  drawer.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const focusable = $$('a[href], button:not([disabled])', drawer).filter((el) => el.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.append(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) { /* noop */ }
      ta.remove();
      return ok;
    }
  }

  function flashLabel(btn, label) {
    const original = btn.dataset.label || btn.textContent.trim();
    btn.dataset.label = original;
    btn.textContent = label;
    window.setTimeout(() => { btn.textContent = btn.dataset.label; }, 1600);
  }

  drawerCopy.addEventListener("click", async () => {
    const url = drawerOpen.href;
    if (!url || url === "#") return;
    const ok = await copyText(url);
    flashLabel(drawerCopy, ok ? "Copied" : "Copy failed");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (drawer.classList.contains("is-open")) {
        closeDrawer();
        return;
      }
      if (document.activeElement === searchEl && searchEl.value) {
        searchEl.value = "";
        state.query = "";
        applyFilters();
      }
    }
  });

  /* --------------------------------------------------------------------
     Library
     -------------------------------------------------------------------- */
  const libTabs = $("#library-tabs");
  const libGrid = $("#library-grid");
  // Preserve the reading list order rather than hard-coding section names.
  const sectionNames = [...new Set(A.resources.map((r) => r.section))];

  function buildLibrary() {
    const counts = {};
    A.resources.forEach((r) => { counts[r.section] = (counts[r.section] || 0) + 1; });

    const allTab = makeTab(`All`, A.resources.length, "all");
    libTabs.append(allTab);
    sectionNames.forEach((name) => {
      libTabs.append(makeTab(name, counts[name] || 0, name));
    });

    A.resources.forEach((r) => {
      const card = document.createElement("a");
      card.className = "res-card reveal";
      card.href = r.url;
      card.target = "_blank";
      card.rel = "noopener";
      card.dataset.section = r.section;

      const top = document.createElement("div");
      top.className = "res-top";

      const section = document.createElement("span");
      section.className = "res-section";
      section.textContent = SECTION_LABEL[r.section] || r.section;

      const arrow = document.createElement("span");
      arrow.className = "res-arrow";
      arrow.innerHTML = ARROW_SVG;
      top.append(section, arrow);

      const title = document.createElement("h3");
      title.className = "res-title";
      title.textContent = r.title;

      card.append(top, title);

      if (r.desc) {
        const desc = document.createElement("p");
        desc.className = "res-desc";
        desc.textContent = r.desc;
        card.append(desc);
      } else {
        // Not every entry in the reading list ships a summary. Size the card
        // to its real content instead of padding it out to match.
        card.classList.add("no-desc");
      }

      const host = document.createElement("span");
      host.className = "res-host";
      host.textContent = r.host;
      card.append(host);

      libGrid.append(card);
    });
  }

  function makeTab(label, count, value) {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "tab";
    tab.dataset.value = value;
    tab.setAttribute("aria-pressed", value === "all" ? "true" : "false");

    const text = document.createElement("span");
    text.textContent = label;
    const num = document.createElement("span");
    num.className = "tab-count";
    num.textContent = count;
    tab.append(text, num);

    tab.addEventListener("click", () => {
      $$(".tab", libTabs).forEach((el) => el.setAttribute("aria-pressed", el === tab ? "true" : "false"));
      $$(".res-card", libGrid).forEach((card) => {
        card.hidden = value !== "all" && card.dataset.section !== value;
      });
    });
    return tab;
  }

  buildLibrary();

  /* --------------------------------------------------------------------
     Credits
     -------------------------------------------------------------------- */
  const creditGrid = $("#credit-grid");
  if (creditGrid && Array.isArray(A.credits)) {
    A.credits.forEach((credit) => {
      const item = document.createElement("li");
      item.className = "credit-item";

      const link = document.createElement("a");
      link.className = "credit-name";
      link.href = credit.url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = credit.name;

      const role = document.createElement("span");
      role.className = "credit-role";
      role.textContent = credit.role;

      item.append(link, role);
      creditGrid.append(item);
    });
  }

  /* --------------------------------------------------------------------
     Citation
     -------------------------------------------------------------------- */
  const citationBtn = $("#copy-citation");
  citationBtn.addEventListener("click", async () => {
    const citation = `Biscuit Security Atlas, the web index for Raunak Gupta’s Learn Android Bug Bounty repository. https://github.com/Raunaksplanet/Learn-android-bug-bounty`;
    const ok = await copyText(citation);
    flashLabel(citationBtn, ok ? "Copied" : "Copy failed");
  });

  /* --------------------------------------------------------------------
     Header: progress, search shortcut, scrollspy
     -------------------------------------------------------------------- */
  const progress = $("#scroll-progress");
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  $("#search-trigger").addEventListener("click", () => {
    $("#tree").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    window.setTimeout(() => searchEl.focus({ preventScroll: true }), reduceMotion ? 0 : 360);
  });

  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName || "").toLowerCase();
    const typing = tag === "input" || tag === "textarea" || (e.target && e.target.isContentEditable);
    if (typing) return;
    if (drawer.classList.contains("is-open")) return;
    if (e.key === "/" || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k")) {
      e.preventDefault();
      // Focus now so the first keystroke is not lost, then reveal the field.
      searchEl.focus({ preventScroll: true });
      $("#tree").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  });

  const navLinks = $$(".nav-link");
  const navSections = [
    { id: "tree", el: $("#tree") },
    { id: "library", el: $("#library") },
    { id: "about", el: $("#about") }
  ].filter((s) => s.el);

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.nav === id);
    });
  }

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNav(entry.target.id);
      });
    }, { rootMargin: "-42% 0px -52% 0px", threshold: 0 });

    navSections.forEach((s) => spy.observe(s.el));
  }

  /* --------------------------------------------------------------------
     Reveal on scroll
     -------------------------------------------------------------------- */
  const revealTargets = [
    ...$$(".section-head"),
    ...$$(".res-card")
  ].filter(Boolean);

  revealTargets.forEach((el) => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    revealTargets.forEach((el, i) => {
      if (el.classList.contains("res-card")) {
        el.style.transitionDelay = `${Math.min(i % 6, 5) * 35}ms`;
      }
      io.observe(el);
    });
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* --------------------------------------------------------------------
     Deep links
     -------------------------------------------------------------------- */
  // The browser resolves a #fragment before the tree is built, so the target
  // can end up far from the viewport. Re-align after this render and once more
  // on the next frame, after the browser has finished its own fragment jump.
  function alignToHash() {
    if (!location.hash) return;
    let target = null;
    try {
      target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch (e) {
      return;
    }
    if (target) target.scrollIntoView({ block: "start", behavior: "auto" });
  }
  alignToHash();
  requestAnimationFrame(alignToHash);
})();
