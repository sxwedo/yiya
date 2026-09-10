import type React from "react";
import {
  ArrowRight,
  FileText,
  BookmarkSimple,
  Tray,
  Sparkle,
} from "@phosphor-icons/react";
import type { Catalog } from "../types";
import {
  countWiki,
  dirHref,
  overviewPath,
  pageHref,
  rawCounts,
} from "../paths";

interface HomeViewProps {
  catalog: Catalog;
}

export const HomeView: React.FC<HomeViewProps> = ({ catalog }) => {
  const raw = rawCounts(catalog);

  const sharedConcepts = catalog.pages
    .filter(
      (p) => p.kind === "wiki" && p.domain === "shared" && p.type === "Concept",
    )
    .sort((a, b) => a.title.localeCompare(b.title, "zh"));

  return (
    <article className="mx-auto max-w-5xl space-y-12 py-6">
      {/* Literary Manifesto Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-8 shadow-sm md:p-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-default)] bg-[var(--bg-subtle)] px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[var(--accent)] uppercase">
            <Sparkle size={12} weight="fill" />
            <span>yiya · 思想档案与典藏馆</span>
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            Curated Knowledge Archive
          </span>
        </div>

        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
          博观而约取 · 读知识，不读仓库
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
          以第一性原理梳理领域实体与核心概念。在海量信息噪音中沉淀思想，在漫长积累中构建高内聚的认知世界。
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{catalog.domains.length} 个知识展馆</span>
          </span>
          <span>/</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            <span>{raw.articles} 篇成文精选</span>
          </span>
          <span>/</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>{raw.bookmarks} 处网络书签</span>
          </span>
        </div>
      </section>

      {/* Curated Wings (Domains) */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between border-b border-[var(--border-default)] pb-3">
          <h2 className="font-display text-lg font-semibold tracking-wide text-[var(--text-primary)] uppercase">
            知识展馆 (Curated Wings)
          </h2>
          <span className="text-xs text-[var(--text-muted)]">
            按领域分工编纂的知识体系
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.domains.map((domain, idx) => {
            const overview = overviewPath(domain.path);
            const wingNum = String(idx + 1).padStart(2, "0");
            const entityCount = countWiki(domain, "Entity");
            const conceptCount = countWiki(domain, "Concept");
            const refCount = countWiki(domain, "Reference");

            return (
              <a
                key={domain.id}
                href={pageHref(overview)}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--text-muted)]">
                      WING // {wingNum}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--text-muted)] opacity-0 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)] group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
                    {domain.title}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-[var(--text-muted)]">
                    {domain.path}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  {entityCount > 0 && (
                    <span className="rounded-full bg-[var(--badge-entity-bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--badge-entity-text)]">
                      实体 {entityCount}
                    </span>
                  )}
                  {conceptCount > 0 && (
                    <span className="rounded-full bg-[var(--badge-concept-bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--badge-concept-text)]">
                      概念 {conceptCount}
                    </span>
                  )}
                  {refCount > 0 && (
                    <span className="rounded-full bg-[var(--badge-ref-bg)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--badge-ref-text)]">
                      文献 {refCount}
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Foundational Concepts (跨域纲领) */}
      {sharedConcepts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-baseline justify-between border-b border-[var(--border-default)] pb-3">
            <h2 className="font-display text-lg font-semibold tracking-wide text-[var(--text-primary)] uppercase">
              跨域纲领 (Foundational Concepts)
            </h2>
            <span className="text-xs text-[var(--text-muted)]">
              贯穿全局的基础认知与模型
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-xs">
            {sharedConcepts.map((concept) => (
              <a
                key={concept.path}
                href={pageHref(concept.path)}
                className="group flex flex-col border-b border-[var(--border-default)] p-4 last:border-b-0 transition-all hover:bg-[var(--bg-subtle)] hover:pl-6"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                    {concept.title}
                  </span>
                  <span className="rounded-full bg-[var(--badge-concept-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--badge-concept-text)]">
                    纲领概念
                  </span>
                </div>
                {concept.description && (
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {concept.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Archive Drawers (原料库) */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between border-b border-[var(--border-default)] pb-3">
          <h2 className="font-display text-lg font-semibold tracking-wide text-[var(--text-primary)] uppercase">
            原料档案 (Archive Drawers)
          </h2>
          <span className="text-xs text-[var(--text-muted)]">
            成文、网络书签与原始素材
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <a
            href={dirHref("raw/articles")}
            className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
          >
            <div className="flex items-center justify-between text-[var(--text-muted)]">
              <span className="font-mono text-[11px]">DRAWER // 01</span>
              <FileText
                size={18}
                className="text-stone-400 group-hover:text-[var(--accent)]"
              />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-[var(--text-primary)]">
              成文精选
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              深度长文、专著与前沿博客
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">
                {raw.articles}
              </span>{" "}
              篇成文
              <span>·</span>
              <span>{raw.authors}</span> 位作者
            </div>
          </a>

          <a
            href={dirHref("raw/bookmarks")}
            className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
          >
            <div className="flex items-center justify-between text-[var(--text-muted)]">
              <span className="font-mono text-[11px]">DRAWER // 02</span>
              <BookmarkSimple
                size={18}
                className="text-amber-500 group-hover:text-[var(--accent)]"
              />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-[var(--text-primary)]">
              网络书签
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              仓库、产品站、官方文档门户与工具
            </p>
            <div className="mt-4 font-mono text-xs text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">
                {raw.bookmarks}
              </span>{" "}
              处精选索引
            </div>
          </a>

          <a
            href={dirHref("raw/_inbox")}
            className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5 shadow-xs transition-all hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
          >
            <div className="flex items-center justify-between text-[var(--text-muted)]">
              <span className="font-mono text-[11px]">DRAWER // 03</span>
              <Tray
                size={18}
                className="text-sky-500 group-hover:text-[var(--accent)]"
              />
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold text-[var(--text-primary)]">
              待理收件箱
            </h3>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              未分域或等待领编纂的原始原料
            </p>
            <div className="mt-4 font-mono text-xs text-[var(--text-muted)]">
              <span className="font-semibold text-[var(--text-primary)]">
                {raw.inbox}
              </span>{" "}
              则待梳理
            </div>
          </a>
        </div>
      </section>
    </article>
  );
};
