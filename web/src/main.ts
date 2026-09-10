import type { Catalog, CatalogPage, Route } from "./types";
import {
  TYPE_LABEL,
  backlinks,
  catalogUrl,
  childFolders,
  countWiki,
  dirHref,
  domainTitle,
  folderTitle,
  overviewPath,
  pageByPath,
  pageHref,
  pageKindLabel,
  pagesInFolder,
  parseLocation,
  rawCounts,
  resolveVaultPath,
  vaultUrl,
} from "./paths";
import {
  asString,
  extractToc,
  htmlToNodes,
  renderMarkdown,
  splitFrontmatter,
} from "./markdown";
import "./styles.css";

const app = document.querySelector("#app")!;

let catalog: Catalog | null = null;
let route: Route = parseLocation();
let query = "";
let railOpen = false;

if (localStorage.getItem("yiya-theme") === "night") {
  document.documentElement.dataset.theme = "night";
}

async function loadCatalog(): Promise<Catalog> {
  const res = await fetch(catalogUrl());
  if (!res.ok) throw new Error("catalog");
  return res.json() as Promise<Catalog>;
}

function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | boolean | undefined> = {},
  ...kids: (Node | string | null | undefined)[]
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === false || v === undefined) continue;
    if (v === true) node.setAttribute(k, "");
    else if (k === "class") node.className = v;
    else node.setAttribute(k, v);
  }
  for (const kid of kids) {
    if (kid == null) continue;
    node.append(kid);
  }
  return node;
}

function searchHits(q: string): CatalogPage[] {
  const needle = q.trim().toLowerCase();
  if (!needle || !catalog) return [];
  return catalog.pages
    .filter((p) =>
      `${p.title} ${p.description} ${p.path} ${p.author}`
        .toLowerCase()
        .includes(needle),
    )
    .sort((a, b) => Number(a.kind === "raw") - Number(b.kind === "raw"))
    .slice(0, 60);
}

function navActive(href: string): boolean {
  if (href === "./") return route.view === "home";
  if (href.startsWith("?d=")) {
    const folder = decodeURIComponent(href.slice(3));
    if (route.view === "dir") return route.folder === folder;
    if (route.view === "page") return route.path.startsWith(`${folder}/`);
    return false;
  }
  if (href.startsWith("?p=")) {
    const path = decodeURIComponent(href.slice(3));
    return route.view === "page" && route.path === path;
  }
  return false;
}

function rail(c: Catalog): HTMLElement {
  const search = el("input", {
    class: "search",
    type: "search",
    placeholder: "搜索  /",
    value: query,
    "aria-label": "搜索",
  });
  search.addEventListener("input", () => {
    query = search.value;
    void paint();
    const again = document.querySelector<HTMLInputElement>(".search");
    if (again) {
      again.focus();
      again.setSelectionRange(query.length, query.length);
    }
  });

  const nav = el("nav", { class: "nav" });
  nav.append(
    el(
      "a",
      { href: "./", class: navActive("./") ? "is-active" : undefined },
      "地图",
    ),
  );

  for (const domain of c.domains) {
    const overview = overviewPath(domain.path);
    const block = el("div", { class: "nav-block" });
    block.append(
      el("h3", {}, el("a", { href: pageHref(overview) }, domain.title)),
    );
    const sub = el("div", { class: "sub" });
    const items: { href: string; label: string; n: string }[] = [];
    if (domain.id !== "shared") {
      items.push({ href: pageHref(overview), label: "概述", n: "" });
    }
    items.push(
      {
        href: dirHref(`${domain.path}/entities`),
        label: "实体",
        n: String(countWiki(domain, "Entity")),
      },
      {
        href: dirHref(`${domain.path}/concepts`),
        label: "概念",
        n: String(countWiki(domain, "Concept")),
      },
      {
        href: dirHref(`${domain.path}/references`),
        label: "文献",
        n: String(countWiki(domain, "Reference")),
      },
    );
    if (c.pages.some((p) => p.path === `${domain.path}/log.md`)) {
      items.push({
        href: pageHref(`${domain.path}/log.md`),
        label: "日志",
        n: "",
      });
    }
    for (const item of items) {
      sub.append(
        el(
          "a",
          {
            href: item.href,
            class: navActive(item.href) ? "is-active" : undefined,
          },
          item.label,
          item.n ? el("em", {}, item.n) : null,
        ),
      );
    }
    block.append(sub);
    nav.append(block);
  }

  const raw = rawCounts(c);
  const rawBlock = el("div", { class: "nav-block" });
  rawBlock.append(el("h3", {}, el("a", { href: dirHref("raw") }, "原料")));
  const rawSub = el("div", { class: "sub" });
  for (const item of [
    { href: dirHref("raw/articles"), label: "成文", n: String(raw.articles) },
    {
      href: dirHref("raw/bookmarks"),
      label: "书签",
      n: String(raw.bookmarks),
    },
    { href: dirHref("raw/_inbox"), label: "收件箱", n: String(raw.inbox) },
  ]) {
    rawSub.append(
      el(
        "a",
        {
          href: item.href,
          class: navActive(item.href) ? "is-active" : undefined,
        },
        item.label,
        item.n ? el("em", {}, item.n) : null,
      ),
    );
  }
  rawBlock.append(rawSub);
  nav.append(rawBlock);

  const themeBtn = el(
    "button",
    { type: "button" },
    document.documentElement.dataset.theme === "night" ? "纸色" : "夜色",
  );
  themeBtn.addEventListener("click", () => {
    const night = document.documentElement.dataset.theme !== "night";
    document.documentElement.dataset.theme = night ? "night" : "";
    localStorage.setItem("yiya-theme", night ? "night" : "day");
    void paint();
  });

  return el(
    "aside",
    { class: `rail${railOpen ? " is-open" : ""}` },
    el(
      "a",
      { class: "brand", href: "./" },
      "yiya",
      el("small", {}, "个人知识库"),
    ),
    search,
    nav,
    el(
      "div",
      { class: "rail-foot" },
      themeBtn,
      el("a", { href: pageHref("AGENTS.md") }, "约定"),
    ),
  );
}

function crumb(parts: { href?: string; label: string }[]): HTMLElement {
  const nav = el("nav", { class: "crumb" });
  parts.forEach((part, i) => {
    if (i) nav.append(" / ");
    nav.append(
      part.href
        ? el("a", { href: part.href }, part.label)
        : document.createTextNode(part.label),
    );
  });
  return nav;
}

function renderSearch(): HTMLElement {
  const hits = searchHits(query);
  const wrap = el(
    "div",
    { class: "home-block" },
    el("h2", {}, `搜索「${query.trim()}」`),
  );
  if (!hits.length) {
    wrap.append(el("p", { class: "empty" }, "没有匹配的页面。"));
    return wrap;
  }
  const ul = el("ul", { class: "results" });
  for (const hit of hits) {
    ul.append(
      el(
        "li",
        {},
        el(
          "a",
          { href: pageHref(hit.path) },
          hit.title,
          el("small", {}, `${pageKindLabel(hit)} · ${hit.path}`),
        ),
      ),
    );
  }
  wrap.append(ul);
  return wrap;
}

function home(c: Catalog): HTMLElement {
  const wrap = el("article", { class: "page" });
  wrap.append(
    el("p", { class: "kicker" }, "yiya"),
    el("h1", { class: "title" }, "读知识，不读仓库"),
    el(
      "p",
      { class: "lede" },
      "从地图进域，先概述再实体与概念。原料原文在侧栏「原料」里读。",
    ),
  );
  if (query.trim()) {
    wrap.append(renderSearch());
    return wrap;
  }

  const domains = el("div", { class: "home-block" }, el("h2", {}, "域"));
  const list = el("div", { class: "home-domains" });
  for (const domain of c.domains) {
    const n = [
      countWiki(domain, "Entity") ? `实体 ${countWiki(domain, "Entity")}` : "",
      countWiki(domain, "Concept")
        ? `概念 ${countWiki(domain, "Concept")}`
        : "",
      countWiki(domain, "Reference")
        ? `文献 ${countWiki(domain, "Reference")}`
        : "",
    ].filter(Boolean);
    list.append(
      el(
        "a",
        { href: pageHref(overviewPath(domain.path)) },
        el("b", {}, domain.title),
        el("span", {}, n.join(" · ") || domain.path),
      ),
    );
  }
  domains.append(list);

  const programs = c.pages
    .filter(
      (p) => p.kind === "wiki" && p.domain === "shared" && p.type === "Concept",
    )
    .sort((a, b) => a.title.localeCompare(b.title, "zh"));
  const prog = el("div", { class: "home-block" }, el("h2", {}, "纲领"));
  const ul = el("ul", { class: "list" });
  for (const p of programs) {
    ul.append(
      el(
        "li",
        {},
        el(
          "a",
          { href: pageHref(p.path) },
          el("strong", {}, p.title),
          el("span", {}, p.description),
        ),
      ),
    );
  }
  prog.append(ul);

  const raw = rawCounts(c);
  const rawBox = el("div", { class: "home-block" }, el("h2", {}, "原料"));
  const rawList = el("div", { class: "home-domains" });
  rawList.append(
    el(
      "a",
      { href: dirHref("raw/articles") },
      el("b", {}, "成文"),
      el("span", {}, `${raw.articles} 篇 · ${raw.authors} 位作者`),
    ),
    el(
      "a",
      { href: dirHref("raw/bookmarks") },
      el("b", {}, "书签"),
      el("span", {}, `${raw.bookmarks} 则`),
    ),
    el(
      "a",
      { href: dirHref("raw/_inbox") },
      el("b", {}, "收件箱"),
      el("span", {}, `${raw.inbox} 则`),
    ),
  );
  rawBox.append(rawList);

  wrap.append(domains, prog, rawBox);
  return wrap;
}

function folderCrumbs(folder: string): { href?: string; label: string }[] {
  const parts = folder.split("/").filter(Boolean);
  const crumbs: { href?: string; label: string }[] = [
    { href: "./", label: "yiya" },
  ];
  if (parts[0] === "raw") {
    let acc = "";
    for (let i = 0; i < parts.length; i++) {
      acc = acc ? `${acc}/${parts[i]}` : parts[i];
      const last = i === parts.length - 1;
      crumbs.push({
        href: last ? undefined : dirHref(acc),
        label: folderTitle(acc),
      });
    }
    return crumbs;
  }
  const domainId =
    parts[0] === "domains"
      ? (parts[1] ?? "")
      : parts[0] === "shared"
        ? "shared"
        : "";
  if (domainId && catalog) {
    crumbs.push({
      href: pageHref(
        overviewPath(domainId === "shared" ? "shared" : `domains/${domainId}`),
      ),
      label: domainTitle(catalog, domainId),
    });
  }
  crumbs.push({ label: folderTitle(folder) });
  return crumbs;
}

function directory(folder: string): HTMLElement {
  if (!catalog) return el("p");
  const folders = childFolders(catalog, folder);
  const pages = pagesInFolder(catalog, folder);
  const title = folderTitle(folder);
  const wrap = el("article", { class: "page" });
  wrap.append(
    crumb(folderCrumbs(folder)),
    el("p", { class: "kicker" }, folder.startsWith("raw") ? "原料" : "目录"),
    el("h1", { class: "title" }, title),
    el(
      "p",
      { class: "lede" },
      [
        folders.length ? `${folders.length} 组` : "",
        pages.length ? `${pages.length} 则` : "",
      ]
        .filter(Boolean)
        .join(" · ") || "空",
    ),
  );
  const ul = el("ul", { class: "list" });
  for (const f of folders) {
    ul.append(
      el(
        "li",
        {},
        el(
          "a",
          { href: dirHref(f.path) },
          el("strong", {}, folderTitle(f.path)),
          el("span", {}, `${f.count} 则`),
        ),
      ),
    );
  }
  for (const p of pages) {
    ul.append(
      el(
        "li",
        {},
        el(
          "a",
          { href: pageHref(p.path) },
          el("strong", {}, p.title || p.path),
          el("span", {}, p.description || p.author || p.path),
        ),
      ),
    );
  }
  wrap.append(ul);
  return wrap;
}

async function article(path: string): Promise<HTMLElement> {
  const wrap = el("article", { class: "page" });
  const res = await fetch(vaultUrl(path));
  if (!res.ok) {
    wrap.append(
      el("h1", { class: "title" }, "未找到"),
      el("p", { class: "empty" }, path),
    );
    return wrap;
  }
  const raw = await res.text();
  const { data, body } = splitFrontmatter(raw);
  const meta = catalog ? pageByPath(catalog, path) : undefined;
  const title = asString(data.title) || meta?.title || path;
  const type = asString(data.type) || meta?.type || "";
  const domain = asString(data.domain) || meta?.domain || "";
  const description = asString(data.description) || meta?.description || "";
  const kind = meta?.kind ?? (path.startsWith("raw/") ? "raw" : "wiki");
  const toc = extractToc(body);

  const crumbs: { href?: string; label: string }[] = path.startsWith("raw/")
    ? [...folderCrumbs(path.replace(/\/[^/]+$/, "")), { label: title }]
    : [{ href: "./", label: "yiya" }];
  if (!path.startsWith("raw/")) {
    if (domain && catalog) {
      crumbs.push({
        href: pageHref(
          overviewPath(domain === "shared" ? "shared" : `domains/${domain}`),
        ),
        label: domainTitle(catalog, domain),
      });
    }
    if (type && TYPE_LABEL[type]) crumbs.push({ label: TYPE_LABEL[type] });
    crumbs.push({ label: title });
  }
  wrap.append(crumb(crumbs));

  if (kind === "raw") {
    const url = asString(data.url);
    wrap.append(
      el(
        "p",
        { class: "banner" },
        "原料原文，不是编纂后的知识页。",
        url
          ? el(
              "a",
              { href: url, target: "_blank", rel: "noreferrer" },
              " 打开出处",
            )
          : null,
      ),
    );
  }

  wrap.append(
    el(
      "p",
      { class: "kicker" },
      kind === "raw"
        ? [
            "原料",
            TYPE_LABEL[type] ?? type,
            asString(data.author) || meta?.author || "",
          ]
            .filter(Boolean)
            .join(" · ")
        : [
            TYPE_LABEL[type] ?? type,
            domain && catalog ? domainTitle(catalog, domain) : "",
          ]
            .filter(Boolean)
            .join(" · ") || kind,
    ),
    el("h1", { class: "title" }, title),
  );
  if (description) wrap.append(el("p", { class: "lede" }, description));

  const prose = el("div", { class: "prose" });
  prose.append(...htmlToNodes(renderMarkdown(path, body)));
  for (const heading of prose.querySelectorAll("h2, h3")) {
    const text = heading.textContent ?? "";
    const match = toc.find((t) => t.text === text || text.startsWith(t.text));
    if (match) heading.id = match.id;
  }

  const layout = el("div", { class: "layout" }, prose);
  const side = el("div");
  if (toc.length) {
    const box = el("aside", { class: "aside" }, el("h2", {}, "本节"));
    for (const item of toc)
      box.append(el("a", { href: `#${item.id}` }, item.text));
    side.append(box);
  }
  if (catalog) {
    const backs = backlinks(catalog, path).slice(0, 16);
    if (backs.length) {
      const box = el("aside", { class: "aside" }, el("h2", {}, "链入"));
      for (const b of backs)
        box.append(el("a", { href: pageHref(b.path) }, b.title));
      side.append(box);
    }
    const sources = Array.isArray(data.sources) ? data.sources : [];
    if (sources.length) {
      const box = el("aside", { class: "aside" }, el("h2", {}, "原料"));
      for (const src of sources) {
        const rel = asString(src);
        if (!rel) continue;
        const resolved = rel.startsWith("http")
          ? rel
          : (resolveVaultPath(path, rel) ?? rel);
        const label =
          rel.split("/").filter(Boolean).slice(-1)[0]?.replace(/\.md$/, "") ??
          rel;
        const href = rel.startsWith("http") ? rel : pageHref(resolved);
        box.append(el("a", { href }, label));
      }
      side.append(box);
    }
  }
  if (side.childElementCount) layout.append(side);
  wrap.append(layout);
  return wrap;
}

function shell(main: HTMLElement): void {
  const top = el(
    "div",
    { class: "topbar" },
    el("button", { type: "button" }, "目录"),
    el("span", {}, "yiya"),
  );
  top.querySelector("button")?.addEventListener("click", () => {
    railOpen = !railOpen;
    void paint();
  });

  app.replaceChildren();
  if (railOpen) {
    const mask = el("div", { class: "mask" });
    mask.addEventListener("click", () => {
      railOpen = false;
      void paint();
    });
    app.append(mask);
  }
  const root = el("div", { class: "shell" });
  if (catalog) root.append(rail(catalog));
  root.append(el("div", { class: "stage" }, top, main));
  app.append(root);
}

async function paint() {
  if (!catalog) {
    shell(el("p", { class: "page empty" }, "载入目录…"));
    return;
  }
  if (query.trim()) {
    document.title = "搜索 · yiya";
    shell(
      el(
        "article",
        { class: "page" },
        crumb([{ href: "./", label: "yiya" }, { label: "搜索" }]),
        renderSearch(),
      ),
    );
    return;
  }
  if (route.view === "home") {
    document.title = "yiya";
    shell(home(catalog));
    return;
  }
  if (route.view === "dir") {
    document.title = `${folderTitle(route.folder)} · yiya`;
    shell(directory(route.folder));
    return;
  }
  const main = await article(route.path);
  const h = main.querySelector(".title")?.textContent;
  document.title = h ? `${h} · yiya` : "yiya";
  shell(main);
  if (location.hash.length > 1) {
    document
      .getElementById(decodeURIComponent(location.hash.slice(1)))
      ?.scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}

function go(url: URL) {
  const next = `${url.pathname}${url.search}${url.hash}`;
  if (`${location.pathname}${location.search}${location.hash}` === next) return;
  history.pushState(null, "", next);
  query = "";
  railOpen = false;
  route = parseLocation();
  void paint();
}

document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest("a");
  if (!a || a.target === "_blank") return;
  const href = a.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  let url: URL;
  try {
    url = new URL(href, location.href);
  } catch {
    return;
  }
  if (url.origin !== location.origin) return;
  e.preventDefault();
  go(url);
});

window.addEventListener("popstate", () => {
  query = "";
  railOpen = false;
  route = parseLocation();
  void paint();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
    e.preventDefault();
    document.querySelector<HTMLInputElement>(".search")?.focus();
  }
  if (e.key === "Escape") {
    query = "";
    railOpen = false;
    void paint();
  }
});

async function boot() {
  try {
    catalog = await loadCatalog();
  } catch (err) {
    shell(el("p", { class: "page empty" }, `目录载入失败：${String(err)}`));
    return;
  }
  route = parseLocation();
  await paint();
}

const hot = import.meta as ImportMeta & {
  hot?: { on: (event: string, cb: () => void) => void };
};
hot.hot?.on("yiya-catalog", () => {
  void loadCatalog().then((c) => {
    catalog = c;
    void paint();
  });
});

void boot();
