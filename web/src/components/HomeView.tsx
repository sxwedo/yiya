import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Catalog, CatalogPage } from "../types";
import { pageHref, TYPE_LABEL } from "../paths";

interface HomeViewProps {
  catalog: Catalog;
}

const TERM_TYPES = new Set(["Entity", "Concept"]);

function isTerm(page: CatalogPage): boolean {
  return (
    page.kind === "wiki" &&
    TERM_TYPES.has(page.type) &&
    !page.path.endsWith("/index.md")
  );
}

function relatedTerms(catalog: Catalog, page: CatalogPage): CatalogPage[] {
  const byPath = new Map(catalog.pages.map((p) => [p.path, p]));
  const seen = new Set<string>();
  const out: CatalogPage[] = [];
  const consider = (path: string) => {
    if (path === page.path || seen.has(path)) return;
    const hit = byPath.get(path);
    if (!hit || !isTerm(hit)) return;
    seen.add(path);
    out.push(hit);
  };
  for (const path of page.related ?? []) consider(path);
  for (const path of page.links) consider(path);
  for (const other of catalog.pages) {
    if (other.path === page.path) continue;
    if (other.kind === "wiki" && other.links.includes(page.path)) {
      consider(other.path);
    }
    if (other.kind === "wiki" && (other.related ?? []).includes(page.path)) {
      consider(other.path);
    }
  }
  return out;
}

export const HomeView: React.FC<HomeViewProps> = ({ catalog }) => {
  const [domainId, setDomainId] = useState<string>("all");
  const [kind, setKind] = useState<"all" | "Entity" | "Concept">("Concept");
  const [selected, setSelected] = useState<CatalogPage | null>(null);

  const terms = useMemo(() => {
    return catalog.pages
      .filter(isTerm)
      .sort((a, b) => a.title.localeCompare(b.title, "zh"));
  }, [catalog.pages]);

  const visible = useMemo(() => {
    return terms.filter((p) => {
      if (domainId !== "all" && p.domain !== domainId) return false;
      if (kind !== "all" && p.type !== kind) return false;
      return true;
    });
  }, [terms, domainId, kind]);

  const grouped = useMemo(() => {
    const byDomain = new Map<string, CatalogPage[]>();
    for (const page of visible) {
      const key = page.domain || "other";
      const list = byDomain.get(key) ?? [];
      list.push(page);
      byDomain.set(key, list);
    }
    const domainOrder = catalog.domains.map((d) => d.id);
    const ids = [
      ...domainOrder.filter((id) => byDomain.has(id)),
      ...[...byDomain.keys()].filter((id) => !domainOrder.includes(id)),
    ];
    return ids.map((id) => ({
      id,
      title: catalog.domains.find((d) => d.id === id)?.title ?? id,
      pages: byDomain.get(id) ?? [],
    }));
  }, [visible, catalog.domains]);

  const related = useMemo(
    () => (selected ? relatedTerms(catalog, selected) : []),
    [catalog, selected],
  );

  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [selected]);

  return (
    <article className="mx-auto max-w-3xl py-10 sm:py-14">
      <header className="space-y-3">
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
          知识词条
        </h1>
        <p className="max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
          默认看概念。点开摘要和关联，再决定要不要读原文。
        </p>
        <p className="font-mono text-[11px] text-[var(--text-muted)]">
          {visible.length} / {terms.length} 条
        </p>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip
          active={domainId === "all"}
          onClick={() => setDomainId("all")}
          label="全部域"
        />
        {catalog.domains.map((domain) => (
          <FilterChip
            key={domain.id}
            active={domainId === domain.id}
            onClick={() => setDomainId(domain.id)}
            label={domain.title}
          />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <FilterChip
          active={kind === "all"}
          onClick={() => setKind("all")}
          label="实体+概念"
        />
        <FilterChip
          active={kind === "Entity"}
          onClick={() => setKind("Entity")}
          label="实体"
        />
        <FilterChip
          active={kind === "Concept"}
          onClick={() => setKind("Concept")}
          label="概念"
        />
      </div>

      <div className="mt-10 space-y-12">
        {grouped.map((group) => (
          <section key={group.id}>
            <h2 className="text-sm text-[var(--text-muted)]">{group.title}</h2>
            <ul className="mt-3 divide-y divide-[var(--border-default)] border-y border-[var(--border-default)]">
              {group.pages.map((page) => {
                const open = selected?.path === page.path;
                return (
                  <li key={page.path}>
                    <button
                      type="button"
                      onClick={() => setSelected(page)}
                      className={`group block w-full py-5 text-left transition-colors hover:bg-[var(--bg-subtle)] ${
                        open ? "bg-[var(--bg-subtle)]" : ""
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-[17px] font-medium tracking-tight text-[var(--text-primary)] group-hover:underline group-hover:underline-offset-4">
                          {page.title}
                        </h3>
                        <span className="shrink-0 font-mono text-[10px] text-[var(--text-faint)]">
                          {TYPE_LABEL[page.type] ?? page.type}
                        </span>
                      </div>
                      <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                        {page.description?.trim() || "（无简介）"}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
        {visible.length === 0 && (
          <p className="font-mono text-sm text-[var(--text-muted)]">
            这一筛选下没有词条。
          </p>
        )}
      </div>

      {selected && (
        <TermPeek
          page={selected}
          related={related}
          domainTitle={
            catalog.domains.find((d) => d.id === selected.domain)?.title ??
            selected.domain
          }
          onClose={() => setSelected(null)}
          onOpenRelated={setSelected}
        />
      )}
    </article>
  );
};

function TermPeek({
  page,
  related,
  domainTitle,
  onClose,
  onOpenRelated,
}: {
  page: CatalogPage;
  related: CatalogPage[];
  domainTitle: string;
  onClose: () => void;
  onOpenRelated: (page: CatalogPage) => void;
}) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = panelRef.current;
    if (!root) return;
    const focusables = () =>
      [
        ...root.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((el) => !el.hasAttribute("disabled"));
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [page.path, onClose]);

  return (
    <div className="fixed inset-0 z-40">
      <button
        type="button"
        tabIndex={-1}
        aria-label="关闭预览"
        className="absolute inset-0 bg-[color-mix(in_srgb,var(--text-primary)_18%,transparent)]"
        onClick={onClose}
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="term-peek-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-[var(--border-default)] bg-[var(--bg-canvas)] p-6 shadow-xl sm:p-8"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-[13px] text-[var(--text-muted)]">
            {domainTitle} {TYPE_LABEL[page.type] ?? page.type}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            关闭 Esc
          </button>
        </div>
        <h2
          id="term-peek-title"
          className="mt-5 text-2xl font-medium tracking-tight text-[var(--text-primary)]"
        >
          {page.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {page.description?.trim() || "（无简介）"}
        </p>

        <div className="mt-8 min-h-0 flex-1 overflow-y-auto">
          <p className="text-[13px] text-[var(--text-muted)]">关联</p>
          {related.length === 0 ? (
            <p className="mt-3 text-[13px] text-[var(--text-muted)]">
              还没有关联词条。
            </p>
          ) : (
            <ul className="mt-3 flex flex-wrap gap-2">
              {related.map((item) => (
                <li key={item.path}>
                  <button
                    type="button"
                    onClick={() => onOpenRelated(item)}
                    className="border border-[var(--border-default)] px-2.5 py-1 text-left text-[13px] text-[var(--text-primary)] hover:border-[var(--text-primary)]"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <a
          href={pageHref(page.path)}
          className="mt-8 inline-flex font-mono text-[12px] underline underline-offset-4"
        >
          打开原文
        </a>
      </aside>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-mono border px-3 py-1 text-[11px] transition-colors ${
        active
          ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]"
          : "border-[var(--border-default)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
      }`}
    >
      {label}
    </button>
  );
}
