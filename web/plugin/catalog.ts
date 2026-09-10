import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";

export type PageKind = "wiki" | "raw" | "meta";

export type CatalogPage = {
  path: string;
  title: string;
  description: string;
  type: string;
  domain: string;
  status: string;
  kind: PageKind;
  author: string;
  url: string;
  links: string[];
};

export type CatalogDomain = {
  id: string;
  title: string;
  path: string;
  counts: Record<string, number>;
};

export type Catalog = {
  generatedAt: string;
  domains: CatalogDomain[];
  pages: CatalogPage[];
};

const SKIP_DIRS = new Set([
  ".git",
  ".agents",
  ".obsidian",
  "node_modules",
  "web",
  "private",
  "templates",
  "_media",
]);

const LINK_RE = /\[([^\]]*)\]\((<)?([^)\s>]+)(>)?\)/g;

function walkMd(dir: string, acc: string[] = []): string[] {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = path.join(dir, name);
    let stat: fs.Stats;
    try {
      stat = fs.statSync(full);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      if (SKIP_DIRS.has(name)) continue;
      walkMd(full, acc);
    } else if (name.endsWith(".md")) {
      acc.push(full);
    }
  }
  return acc;
}

function splitFrontmatter(raw: string): {
  data: Record<string, unknown>;
  body: string;
} {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return { data: {}, body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\uFEFF?[\r\n]*/, "");
  let data: Record<string, unknown> = {};
  try {
    const parsed = YAML.parse(fm);
    if (parsed && typeof parsed === "object")
      data = parsed as Record<string, unknown>;
  } catch {
    for (const line of fm.split("\n")) {
      const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (!m) continue;
      data[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return { data, body };
}

function asString(v: unknown): string {
  if (typeof v === "string") return v;
  if (v == null) return "";
  return String(v);
}

function hasFileExt(p: string): boolean {
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

function extractLinks(fromFile: string, body: string): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  LINK_RE.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = LINK_RE.exec(body))) {
    const resolved = resolveVaultPath(fromFile, m[3]);
    if (!resolved || seen.has(resolved)) continue;
    seen.add(resolved);
    out.push(resolved);
  }
  return out;
}

function headingTitle(body: string): string {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/[#*_`]/g, "").trim() : "";
}

function kindOf(rel: string): PageKind {
  if (rel.startsWith("raw/")) return "raw";
  if (rel.startsWith("domains/") || rel.startsWith("shared/")) return "wiki";
  return "meta";
}

function domainOf(rel: string, fmDomain: string): string {
  if (fmDomain) return fmDomain;
  const m = rel.match(/^domains\/([^/]+)/);
  if (m) return m[1];
  if (rel.startsWith("shared/")) return "shared";
  return "";
}

function loadDomainsYaml(root: string): CatalogDomain[] {
  const file = path.join(root, "config", "domains.yaml");
  const fallback: CatalogDomain[] = [
    {
      id: "agents",
      title: "Agent 与 harness",
      path: "domains/agents",
      counts: {},
    },
    {
      id: "engineering",
      title: "工程与可维护性",
      path: "domains/engineering",
      counts: {},
    },
  ];
  if (!fs.existsSync(file)) return fallback;
  try {
    const doc = YAML.parse(fs.readFileSync(file, "utf8")) as {
      domains?: { id: string; title: string; path: string; active?: boolean }[];
    };
    const list = (doc.domains ?? []).filter((d) => d.active !== false);
    if (!list.length) return fallback;
    return list.map((d) => ({
      id: d.id,
      title: d.title,
      path: d.path,
      counts: {},
    }));
  } catch {
    return fallback;
  }
}

export function buildCatalog(root: string): Catalog {
  const domains = loadDomainsYaml(root);
  domains.push({ id: "shared", title: "跨域", path: "shared", counts: {} });

  const files = [
    ...walkMd(path.join(root, "domains")),
    ...walkMd(path.join(root, "shared")),
    ...walkMd(path.join(root, "raw")),
    path.join(root, "README.md"),
    path.join(root, "AGENTS.md"),
  ].filter((f) => fs.existsSync(f));

  const pages: CatalogPage[] = [];
  for (const abs of files) {
    const rel = path.relative(root, abs).split(path.sep).join("/");
    let raw: string;
    try {
      raw = fs.readFileSync(abs, "utf8");
    } catch {
      continue;
    }
    const { data, body } = splitFrontmatter(raw);
    const kind = kindOf(rel);
    const type = asString(data.type);
    const title =
      asString(data.title) || headingTitle(body) || path.basename(rel, ".md");
    const author =
      asString(data.author) ||
      (kind === "raw" && rel.startsWith("raw/articles/")
        ? (rel.split("/")[2] ?? "")
        : "");
    const url = asString(data.url);
    const page: CatalogPage = {
      path: rel,
      title,
      description: asString(data.description) || url,
      type,
      domain: domainOf(rel, asString(data.domain)),
      status: asString(data.status),
      kind,
      author,
      url,
      links: extractLinks(rel, body),
    };
    pages.push(page);
  }

  const byDomain = new Map(domains.map((d) => [d.id, d]));
  for (const page of pages) {
    if (page.kind !== "wiki") continue;
    const bucket = byDomain.get(page.domain);
    if (!bucket) continue;
    const key = page.type || "Page";
    bucket.counts[key] = (bucket.counts[key] ?? 0) + 1;
  }

  return {
    generatedAt: new Date().toISOString(),
    domains,
    pages,
  };
}
