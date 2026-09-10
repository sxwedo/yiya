import { Marked } from "marked";
import YAML from "yaml";
import { dirHref, pageHref, resolveVaultPath, vaultUrl } from "./paths";

export type Frontmatter = Record<string, unknown>;

export function splitFrontmatter(raw: string): {
  data: Frontmatter;
  body: string;
} {
  if (!raw.startsWith("---")) return { data: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end < 0) return { data: {}, body: raw };
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 4).replace(/^\uFEFF?[\r\n]*/, "");
  let data: Frontmatter = {};
  try {
    const parsed = YAML.parse(fm);
    if (parsed && typeof parsed === "object") data = parsed as Frontmatter;
  } catch {
    for (const line of fm.split("\n")) {
      const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
      if (!m) continue;
      data[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return { data, body };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** CommonMark 无 <> 的链接目标不能含空格；带括号时也容易截断。本地路径自动补 <>。 */
export function wrapLocalLinkDestinations(src: string): string {
  let out = "";
  let i = 0;
  while (i < src.length) {
    const j = src.indexOf("](", i);
    if (j < 0) {
      out += src.slice(i);
      break;
    }
    out += src.slice(i, j + 2);
    i = j + 2;
    if (src[i] === "<" || /^[a-z][a-z0-9+.-]*:/i.test(src.slice(i))) {
      continue;
    }
    const rest = src.slice(i);
    const m = rest.match(/^([^<\n]+?)\.(md|png|jpe?g|gif|webp|svg)(?=\))/i);
    if (!m) continue;
    const dest = m[0];
    if (/[\s()]/.test(dest)) {
      out += `<${dest}>`;
      i += dest.length;
    }
  }
  return out;
}

export function renderMarkdown(fromFile: string, body: string): string {
  const renderer = {
    link({
      href,
      title,
      text,
    }: {
      href: string;
      title?: string | null;
      text: string;
    }) {
      try {
        href = decodeURIComponent(href);
      } catch {
        /* keep */
      }
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("#")) {
        const ext = /^https?:/i.test(href)
          ? ` target="_blank" rel="noreferrer"`
          : "";
        return `<a href="${escapeHtml(href)}"${titleAttr}${ext}>${text}</a>`;
      }
      const resolved = resolveVaultPath(fromFile, href);
      if (!resolved)
        return `<a href="${escapeHtml(href)}"${titleAttr}>${text}</a>`;
      if (/\.(png|jpe?g|gif|webp|svg)$/i.test(resolved)) {
        return `<a href="${escapeHtml(vaultUrl(resolved))}"${titleAttr} target="_blank" rel="noreferrer">${text}</a>`;
      }
      const hash = href.includes("#")
        ? `#${href.split("#").slice(1).join("#")}`
        : "";
      const folderLink = href.trim().endsWith("/");
      const to = folderLink
        ? dirHref(resolved.replace(/\/index\.md$/, ""))
        : `${pageHref(resolved)}${hash}`;
      return `<a href="${escapeHtml(to)}"${titleAttr}>${text}</a>`;
    },
    image({
      href,
      title,
      text,
    }: {
      href: string;
      title?: string | null;
      text: string;
    }) {
      const resolved = resolveVaultPath(fromFile, href) ?? href;
      const src = /^https?:/i.test(href) ? href : vaultUrl(resolved);
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      return `<img src="${escapeHtml(src)}" alt="${escapeHtml(text)}"${titleAttr} />`;
    },
  };

  const parser = new Marked({ gfm: true, renderer });
  return parser.parse(wrapLocalLinkDestinations(body), {
    async: false,
  }) as string;
}

export function extractToc(
  body: string,
): { id: string; text: string; level: number }[] {
  const toc: { id: string; text: string; level: number }[] = [];
  const seen = new Map<string, number>();
  for (const line of body.split("\n")) {
    const m = line.match(/^(#{2,3})\s+(.+)$/);
    if (!m) continue;
    const text = m[2].replace(/[#*_`[\]]/g, "").trim();
    if (!text || text === "Related") continue;
    let id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}-]/gu, "");
    if (!id) id = "section";
    const n = (seen.get(id) ?? 0) + 1;
    seen.set(id, n);
    if (n > 1) id = `${id}-${n}`;
    toc.push({ id, text, level: m[1].length });
  }
  return toc;
}

export function asString(v: unknown): string {
  return typeof v === "string" ? v : v == null ? "" : String(v);
}

export function htmlToNodes(html: string): Node[] {
  const parsed = new DOMParser().parseFromString(
    `<div>${html}</div>`,
    "text/html",
  );
  const root = parsed.body.firstElementChild;
  return root ? [...root.childNodes] : [];
}
