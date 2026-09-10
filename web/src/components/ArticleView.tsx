import type React from "react";
import { useEffect, useState, useRef, useMemo } from "react";
import {
  ArrowSquareOut,
  FileText,
  Check,
  ShareNetwork,
} from "@phosphor-icons/react";
import type { Catalog } from "../types";
import {
  TYPE_LABEL,
  backlinks,
  domainTitle,
  overviewPath,
  pageByPath,
  pageHref,
  vaultUrl,
} from "../paths";
import {
  asString,
  extractToc,
  renderMarkdown,
  splitFrontmatter,
} from "../markdown";
import { Inspector } from "./Inspector";

interface ArticleViewProps {
  path: string;
  catalog: Catalog;
  zenMode: boolean;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  path,
  catalog,
  zenMode,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [frontmatter, setFrontmatter] = useState<Record<string, unknown>>({});
  const [activeHeadingId, setActiveHeadingId] = useState("");
  const [copied, setCopied] = useState(false);
  const proseRef = useRef<HTMLDivElement>(null);

  // 1. Fetch markdown content
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    fetch(vaultUrl(path))
      .then((res) => {
        if (!res.ok) throw new Error(`未找到文件: ${path}`);
        return res.text();
      })
      .then((raw) => {
        if (!mounted) return;
        const { data, body } = splitFrontmatter(raw);
        setFrontmatter(data);
        setContent(body);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(String(err));
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [path]);

  // 2. Compute memoized values
  const meta = useMemo(() => pageByPath(catalog, path), [catalog, path]);
  const title = asString(frontmatter.title) || meta?.title || path;
  const type = asString(frontmatter.type) || meta?.type || "";
  const domain = asString(frontmatter.domain) || meta?.domain || "";
  const description =
    asString(frontmatter.description) || meta?.description || "";
  const kind = meta?.kind ?? (path.startsWith("raw/") ? "raw" : "wiki");

  const html = useMemo(() => {
    if (!content) return "";
    return renderMarkdown(path, content);
  }, [path, content]);

  const toc = useMemo(() => {
    if (!content) return [];
    return extractToc(content);
  }, [content]);

  const backlinksList = useMemo(() => {
    return backlinks(catalog, path);
  }, [catalog, path]);

  // 3. Update document title
  useEffect(() => {
    if (title) {
      document.title = `${title} · yiya`;
    }
  }, [title]);

  // 4. Render markdown safely into proseRef & attach heading ids
  useEffect(() => {
    if (loading || !proseRef.current || !html) return;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Assign heading ids matching the TOC
    for (const heading of doc.body.querySelectorAll("h2, h3")) {
      const text = heading.textContent ?? "";
      const match = toc.find((t) => t.text === text || text.startsWith(t.text));
      if (match) heading.id = match.id;
    }

    proseRef.current.replaceChildren(...Array.from(doc.body.childNodes));
  }, [loading, html, toc]);

  // 5. Heading scroll spy for the Inspector TOC
  useEffect(() => {
    if (loading || !proseRef.current) return;

    const headings = proseRef.current.querySelectorAll("h2, h3");
    const observer = new IntersectionObserver(
      (entries) => {
        const match = entries.find((e) => e.isIntersecting);
        if (match) {
          setActiveHeadingId(match.target.id);
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0.1 },
    );

    for (const h of headings) observer.observe(h);

    return () => observer.disconnect();
  }, [loading, content]);

  const handleCopyLink = () => {
    void navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Breadcrumbs
  const crumbs: { href?: string; label: string }[] = path.startsWith("raw/")
    ? [{ href: "/", label: "yiya" }, { label: title }]
    : [{ href: "/", label: "yiya" }];

  if (!path.startsWith("raw/")) {
    if (domain) {
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

  const isRaw = kind === "raw";
  const rawUrl = asString(frontmatter.url);

  // Early returns are now SAFE because ALL hooks have executed!
  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
          <span className="h-2 w-2 animate-ping rounded-full bg-[var(--accent)]" />
          <span>典藏载入中...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-[var(--text-primary)]">
          典藏文档未找到
        </h1>
        <p className="mt-2 font-mono text-xs text-[var(--text-muted)]">
          {path}
        </p>
        <a
          href="./"
          className="mt-6 inline-block rounded-lg bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white"
        >
          返回知识地图
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-7xl items-start gap-12 py-6">
      {/* Main Reading Pavilion */}
      <article className="min-w-0 flex-1 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-1.5">
            {crumbs.map((c, i) => (
              <span
                key={`${c.label}-${i}`}
                className="flex items-center gap-1.5"
              >
                {i > 0 && <span className="text-[var(--text-faint)]">/</span>}
                {c.href ? (
                  <a
                    href={c.href}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {c.label}
                  </a>
                ) : (
                  <span className="font-medium text-[var(--text-primary)]">
                    {c.label}
                  </span>
                )}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
            title="复制此页链接"
          >
            {copied ? (
              <Check size={12} className="text-emerald-500" />
            ) : (
              <ShareNetwork size={12} />
            )}
            <span>{copied ? "已复制" : "分享"}</span>
          </button>
        </nav>

        {/* Header Ribbon & Metadata */}
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                isRaw
                  ? "bg-[var(--badge-raw-bg)] text-[var(--badge-raw-text)]"
                  : type === "Entity"
                    ? "bg-[var(--badge-entity-bg)] text-[var(--badge-entity-text)]"
                    : type === "Concept"
                      ? "bg-[var(--badge-concept-bg)] text-[var(--badge-concept-text)]"
                      : "bg-[var(--badge-ref-bg)] text-[var(--badge-ref-text)]"
              }`}
            >
              {isRaw ? "原料原文" : (TYPE_LABEL[type] ?? type)}
            </span>

            {domain && (
              <span className="font-mono text-xs text-[var(--text-muted)]">
                域 // {domainTitle(catalog, domain)}
              </span>
            )}

            {(frontmatter.author || meta?.author) && (
              <span className="font-serif italic text-xs text-[var(--text-muted)]">
                作者: {String(frontmatter.author || meta?.author)}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
            {title}
          </h1>

          {description && (
            <p className="max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
              {description}
            </p>
          )}
        </header>

        {/* Raw Manuscript Callout Banner */}
        {isRaw && (
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 shadow-xs">
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
              <FileText size={16} className="text-[var(--accent)]" />
              <span>原料原文存档，仅供阅读与考证，非编纂后的知识结论。</span>
            </div>
            {rawUrl && (
              <a
                href={rawUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent)] px-3 py-1.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[var(--accent-hover)]"
              >
                <span>打开出处</span>
                <ArrowSquareOut size={13} weight="bold" />
              </a>
            )}
          </div>
        )}

        {/* Rendered Prose Content */}
        <div ref={proseRef} className="prose-editorial max-w-3xl" />
      </article>

      {/* Right Floating Inspector Companion */}
      {!zenMode && (
        <Inspector
          toc={toc}
          backlinksList={backlinksList}
          sources={
            Array.isArray(frontmatter.sources) ? frontmatter.sources : []
          }
          currentPath={path}
          activeHeadingId={activeHeadingId}
        />
      )}
    </div>
  );
};
