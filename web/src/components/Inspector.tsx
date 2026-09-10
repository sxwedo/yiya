import type React from "react";
import {
  ListBullets,
  ArrowSquareOut,
  GitFork,
  FileCode,
} from "@phosphor-icons/react";
import type { CatalogPage } from "../types";
import { pageHref, resolveVaultPath } from "../paths";

interface InspectorProps {
  toc: { id: string; text: string; level: number }[];
  backlinksList: CatalogPage[];
  sources: unknown[];
  currentPath: string;
  activeHeadingId: string;
}

export const Inspector: React.FC<InspectorProps> = ({
  toc,
  backlinksList,
  sources,
  currentPath,
  activeHeadingId,
}) => {
  const hasToc = toc.length > 0;
  const hasBacklinks = backlinksList.length > 0;
  const sourceList = Array.isArray(sources)
    ? sources.map((s) => String(s)).filter(Boolean)
    : [];
  const hasSources = sourceList.length > 0;

  if (!hasToc && !hasBacklinks && !hasSources) {
    return null;
  }

  return (
    <aside className="hidden w-64 shrink-0 flex-col gap-6 py-2 xl:flex">
      {/* Table of Contents */}
      {hasToc && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[var(--text-muted)] uppercase">
            <ListBullets size={14} weight="bold" />
            <span>本节目录</span>
          </div>
          <nav className="space-y-0.5 border-l border-[var(--border-default)] pl-2">
            {toc.map((item) => {
              const isActive = activeHeadingId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block truncate py-1 text-xs transition-all ${
                    item.level === 3 ? "pl-3 text-[11px]" : "pl-1"
                  } ${
                    isActive
                      ? "font-medium text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.text}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {/* Backlinks */}
      {hasBacklinks && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[var(--text-muted)] uppercase">
            <GitFork size={14} weight="bold" />
            <span>知识网链入</span>
            <span className="font-mono text-[10px] text-[var(--text-faint)]">
              ({backlinksList.length})
            </span>
          </div>
          <div className="space-y-1">
            {backlinksList.slice(0, 10).map((b) => (
              <a
                key={b.path}
                href={pageHref(b.path)}
                className="group flex flex-col rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 p-2 transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] hover:shadow-xs"
              >
                <span className="font-display font-medium text-xs text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                  {b.title}
                </span>
                {b.description && (
                  <span className="mt-0.5 line-clamp-1 text-[11px] text-[var(--text-muted)]">
                    {b.description}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Raw Sources */}
      {hasSources && (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider text-[var(--text-muted)] uppercase">
            <FileCode size={14} weight="bold" />
            <span>溯源原料出处</span>
          </div>
          <div className="space-y-1">
            {sourceList.map((src) => {
              const isExternal = src.startsWith("http");
              const resolved = isExternal
                ? src
                : (resolveVaultPath(currentPath, src) ?? src);
              const label =
                src
                  .split("/")
                  .filter(Boolean)
                  .slice(-1)[0]
                  ?.replace(/\.md$/, "") ?? src;
              const href = isExternal ? src : pageHref(resolved);

              return (
                <a
                  key={src}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-md border border-[var(--border-default)] bg-[var(--bg-surface)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-xs"
                >
                  <span className="truncate pr-1">{label}</span>
                  {isExternal ? (
                    <ArrowSquareOut size={12} className="shrink-0" />
                  ) : (
                    <span className="shrink-0 font-mono text-[10px] text-[var(--text-faint)]">
                      RAW
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};
