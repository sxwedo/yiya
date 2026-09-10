import type { Catalog, CatalogPage, Route } from "./types";

export const TYPE_LABEL: Record<string, string> = {
  Entity: "实体",
  Concept: "概念",
  Reference: "文献",
  Overview: "概述",
  Article: "成文",
  NoteTweet: "帖文",
  Tweet: "帖文",
  Media: "媒体",
};

export const FOLDER_LABEL: Record<string, string> = {
  entities: "实体",
  concepts: "概念",
  references: "文献",
};

export function encodePath(p: string): string {
  return p
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

export function pageHref(path: string): string {
  return `?p=${encodeURIComponent(path)}`;
}

export function dirHref(folder: string): string {
  return `?d=${encodeURIComponent(folder.replace(/\/$/, ""))}`;
}

export function parseLocation(search = location.search): Route {
  const q = new URLSearchParams(search);
  const page = q.get("p");
  const dir = q.get("d");
  if (page) return { view: "page", path: page };
  if (dir) return { view: "dir", folder: dir.replace(/\/+$/, "") };
  return { view: "home" };
}

export function hasFileExt(p: string): boolean {
  return /\.[A-Za-z0-9]{1,8}$/.test(p);
}

export function resolveVaultPath(
  fromFile: string,
  href: string,
): string | null {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("#")) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed)) return null;
  const pathPart = trimmed.split("#")[0].split("?")[0];
  if (!pathPart) return null;
  const fromDir = fromFile.replace(/\/[^/]*$/, "");
  const parts = fromDir.split("/").filter(Boolean);
  for (const seg of pathPart.split("/")) {
    if (seg === "." || seg === "") continue;
    if (seg === "..") parts.pop();
    else parts.push(decodeURIComponent(seg));
  }
  let out = parts.join("/");
  if (!out) return null;
  if (out.endsWith("/")) out += "index.md";
  else if (!hasFileExt(out)) out += "/index.md";
  return out;
}

export function vaultUrl(rel: string): string {
  return `vault/${encodePath(rel)}`;
}

export function catalogUrl(): string {
  return "api/catalog.json";
}

export function pageByPath(
  catalog: Catalog,
  path: string,
): CatalogPage | undefined {
  return catalog.pages.find((p) => p.path === path);
}

function basename(p: string): string {
  const i = p.lastIndexOf("/");
  return i < 0 ? p : p.slice(i + 1);
}

export function pagesInFolder(catalog: Catalog, folder: string): CatalogPage[] {
  const prefix = `${folder.replace(/\/$/, "")}/`;
  return catalog.pages
    .filter(
      (p) =>
        p.path.startsWith(prefix) &&
        p.path.slice(prefix.length).indexOf("/") < 0,
    )
    .filter((p) => basename(p.path) !== "index.md")
    .sort((a, b) => a.title.localeCompare(b.title, "zh"));
}

export function backlinks(catalog: Catalog, path: string): CatalogPage[] {
  return catalog.pages
    .filter(
      (p) => p.kind === "wiki" && p.links.includes(path) && p.path !== path,
    )
    .sort((a, b) => a.title.localeCompare(b.title, "zh"));
}

export function domainTitle(catalog: Catalog, id: string): string {
  return catalog.domains.find((d) => d.id === id)?.title ?? id;
}

export function countWiki(
  domain: { counts: Record<string, number> },
  type: string,
): number {
  return domain.counts[type] ?? 0;
}

export function overviewPath(domainPath: string): string {
  return domainPath === "shared"
    ? "shared/map.md"
    : `${domainPath}/overview.md`;
}

export function folderTitle(folder: string): string {
  const known: Record<string, string> = {
    raw: "原料",
    "raw/articles": "成文",
    "raw/bookmarks": "书签",
    "raw/_inbox": "收件箱",
  };
  if (known[folder]) return known[folder];
  if (folder.startsWith("raw/articles/")) {
    return folder.slice("raw/articles/".length);
  }
  const leaf = folder.split("/").pop() ?? folder;
  return FOLDER_LABEL[leaf] ?? leaf;
}

export function childFolders(
  catalog: Catalog,
  folder: string,
): { path: string; name: string; count: number }[] {
  const prefix = `${folder.replace(/\/$/, "")}/`;
  const counts = new Map<string, number>();
  for (const page of catalog.pages) {
    if (!page.path.startsWith(prefix)) continue;
    const rest = page.path.slice(prefix.length);
    const slash = rest.indexOf("/");
    if (slash < 0) continue;
    const name = rest.slice(0, slash);
    if (name === "_media") continue;
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({
      path: `${folder.replace(/\/$/, "")}/${name}`,
      name,
      count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "zh"));
}

export function rawCounts(catalog: Catalog): {
  articles: number;
  authors: number;
  bookmarks: number;
  inbox: number;
} {
  const articles = catalog.pages.filter((p) =>
    p.path.startsWith("raw/articles/"),
  ).length;
  const authors = new Set(
    catalog.pages
      .filter((p) => p.path.startsWith("raw/articles/"))
      .map((p) => p.path.split("/")[2] ?? ""),
  );
  authors.delete("_media");
  authors.delete("");
  return {
    articles,
    authors: authors.size,
    bookmarks: catalog.pages.filter((p) => p.path.startsWith("raw/bookmarks/"))
      .length,
    inbox: catalog.pages.filter((p) => p.path.startsWith("raw/_inbox/")).length,
  };
}

export function pageKindLabel(page: CatalogPage): string {
  if (page.kind === "raw") {
    return ["原料", TYPE_LABEL[page.type] ?? "", page.author]
      .filter(Boolean)
      .join(" · ");
  }
  return TYPE_LABEL[page.type] ?? page.type;
}
