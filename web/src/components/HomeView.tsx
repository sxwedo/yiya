import type React from "react";
import { lazy, Suspense, useMemo, useState } from "react";
import type { Catalog, CatalogPage } from "../types";
import { pageHref, TYPE_LABEL } from "../paths";

const TermGraph = lazy(async () => {
  const mod = await import("./TermGraph");
  return { default: mod.TermGraph };
});

interface HomeViewProps {
  catalog: Catalog;
}

const TERM_TYPES = new Set(["Entity", "Concept"]);

export const HomeView: React.FC<HomeViewProps> = ({ catalog }) => {
  const [domainId, setDomainId] = useState<string>("all");
  const [kind, setKind] = useState<"all" | "Entity" | "Concept">("all");
  const [selected, setSelected] = useState<CatalogPage | null>(null);

  const terms = useMemo(() => {
    return catalog.pages
      .filter(
        (p) =>
          p.kind === "wiki" &&
          TERM_TYPES.has(p.type) &&
          !p.path.endsWith("/index.md"),
      )
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

  return (
    <article className="py-10 sm:py-14">
      <header className="mx-auto max-w-3xl space-y-3">
        <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--text-muted)] uppercase">
          yiya · dictionary
        </p>
        <h1 className="text-3xl font-medium tracking-tight text-[var(--text-primary)] sm:text-4xl">
          知识词条
        </h1>
        <p className="max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)]">
          实体与概念做成词条。上图看关系，点节点看摘要；下面列表进原文。
        </p>
        <p className="font-mono text-[11px] text-[var(--text-muted)]">
          {visible.length} / {terms.length} 条
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-3xl flex flex-wrap gap-2">
        <FilterChip
          active={domainId === "all"}
          onClick={() => {
            setDomainId("all");
            setSelected(null);
          }}
          label="全部域"
        />
        {catalog.domains.map((domain) => (
          <FilterChip
            key={domain.id}
            active={domainId === domain.id}
            onClick={() => {
              setDomainId(domain.id);
              setSelected(null);
            }}
            label={domain.title}
          />
        ))}
      </div>
      <div className="mx-auto mt-2 max-w-3xl flex flex-wrap gap-2">
        <FilterChip
          active={kind === "all"}
          onClick={() => {
            setKind("all");
            setSelected(null);
          }}
          label="实体+概念"
        />
        <FilterChip
          active={kind === "Entity"}
          onClick={() => {
            setKind("Entity");
            setSelected(null);
          }}
          label="实体"
        />
        <FilterChip
          active={kind === "Concept"}
          onClick={() => {
            setKind("Concept");
            setSelected(null);
          }}
          label="概念"
        />
      </div>

      <div className="mx-auto mt-8 max-w-5xl">
        <Suspense
          fallback={
            <p className="font-mono text-[11px] text-[var(--text-muted)]">
              加载关系图…
            </p>
          }
        >
          <TermGraph
            pages={visible}
            selectedPath={selected?.path ?? null}
            onSelect={setSelected}
          />
        </Suspense>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-12">
        {grouped.map((group) => (
          <section key={group.id}>
            <h2 className="font-mono text-[11px] tracking-[0.16em] text-[var(--text-muted)] uppercase">
              {group.title}
            </h2>
            <ul className="mt-3 divide-y divide-[var(--border-default)] border-y border-[var(--border-default)]">
              {group.pages.map((page) => (
                <li key={page.path}>
                  <a
                    href={pageHref(page.path)}
                    className="group block py-5 transition-colors hover:bg-[var(--bg-subtle)]"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-[17px] font-medium tracking-tight text-[var(--text-primary)] group-hover:underline group-hover:underline-offset-4">
                        {page.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[10px] tracking-wider text-[var(--text-faint)] uppercase">
                        {TYPE_LABEL[page.type] ?? page.type}
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {page.description?.trim() || "（无简介）"}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {visible.length === 0 && (
          <p className="font-mono text-sm text-[var(--text-muted)]">
            这一筛选下没有词条。
          </p>
        )}
      </div>
    </article>
  );
};

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
      className={`font-mono rounded-full border px-3 py-1 text-[11px] tracking-wide transition-colors ${
        active
          ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-canvas)]"
          : "border-[var(--border-default)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
      }`}
    >
      {label}
    </button>
  );
}
