import type React from "react";
import { Folder } from "@phosphor-icons/react";
import type { Catalog } from "../types";
import {
  childFolders,
  dirHref,
  domainTitle,
  folderTitle,
  overviewPath,
  pageHref,
  pageKindLabel,
  pagesInFolder,
} from "../paths";

interface DirViewProps {
  catalog: Catalog;
  folder: string;
}

export const DirView: React.FC<DirViewProps> = ({ catalog, folder }) => {
  const folders = childFolders(catalog, folder);
  const pages = pagesInFolder(catalog, folder);
  const title = folderTitle(folder);

  const parts = folder.split("/").filter(Boolean);
  const crumbs: { href?: string; label: string }[] = [
    { href: "/", label: "yiya" },
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
  } else {
    const domainId =
      parts[0] === "domains"
        ? (parts[1] ?? "")
        : parts[0] === "shared"
          ? "shared"
          : "";
    if (domainId) {
      crumbs.push({
        href: pageHref(
          overviewPath(
            domainId === "shared" ? "shared" : `domains/${domainId}`,
          ),
        ),
        label: domainTitle(catalog, domainId),
      });
    }
    crumbs.push({ label: folderTitle(folder) });
  }

  return (
    <article className="mx-auto max-w-4xl space-y-8 py-6">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--text-muted)]">
        {crumbs.map((c, i) => (
          <span key={`${c.label}-${i}`} className="flex items-center gap-1.5">
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
      </nav>

      {/* Directory Header */}
      <header className="space-y-2 border-b border-[var(--border-default)] pb-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[var(--text-muted)] uppercase">
            {folder.startsWith("raw") ? "原料档案库" : "知识目录"}
          </span>
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--text-secondary)]">
          {[
            folders.length ? `${folders.length} 个子目录` : "",
            pages.length ? `${pages.length} 篇知识典藏` : "",
          ]
            .filter(Boolean)
            .join(" · ") || "此目录为空"}
        </p>
      </header>

      {/* Child Folders Grid */}
      {folders.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
            子级目录
          </h2>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {folders.map((f) => (
              <a
                key={f.path}
                href={dirHref(f.path)}
                className="group flex items-center justify-between rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-3.5 transition-all hover:border-[var(--accent)] hover:shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <Folder
                    size={18}
                    className="text-[var(--accent)]"
                    weight="fill"
                  />
                  <span className="font-display font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                    {folderTitle(f.path)}
                  </span>
                </div>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {f.count} 则
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Pages List */}
      {pages.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
            典藏条目
          </h2>
          <div className="overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
            {pages.map((p) => (
              <a
                key={p.path}
                href={pageHref(p.path)}
                className="group flex flex-col border-b border-[var(--border-default)] p-4 last:border-b-0 transition-all hover:bg-[var(--bg-subtle)] hover:pl-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                    {p.title || p.path}
                  </span>
                  <span className="shrink-0 rounded-full bg-[var(--bg-subtle)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
                    {pageKindLabel(p)}
                  </span>
                </div>
                {(p.description || p.author) && (
                  <p className="mt-1 line-clamp-1 text-xs text-[var(--text-secondary)]">
                    {p.description || `作者: ${p.author}`}
                  </p>
                )}
                <span className="mt-1 font-mono text-[10px] text-[var(--text-faint)]">
                  {p.path}
                </span>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
