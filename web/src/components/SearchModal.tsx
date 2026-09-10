import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  MagnifyingGlass,
  X,
  FileText,
  BookmarkSimple,
  Lightbulb,
  Cube,
  Scroll,
} from "@phosphor-icons/react";
import type { Catalog, CatalogPage } from "../types";
import { pageHref, pageKindLabel } from "../paths";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  catalog: Catalog;
  onSelectPage: (href: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  catalog,
  onSelectPage,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filterType, setFilterType] = useState("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const needle = query.trim().toLowerCase();
  const allHits = needle
    ? catalog.pages.filter((p) =>
        `${p.title} ${p.description} ${p.path} ${p.author}`
          .toLowerCase()
          .includes(needle),
      )
    : catalog.pages.slice(0, 30);

  const filteredHits = allHits.filter((p) => {
    if (filterType === "all") return true;
    if (filterType === "raw") return p.kind === "raw";
    return p.type === filterType;
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredHits.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(
        (prev) =>
          (prev - 1 + filteredHits.length) % Math.max(1, filteredHits.length),
      );
    } else if (e.key === "Enter" && filteredHits[selectedIndex]) {
      e.preventDefault();
      onSelectPage(pageHref(filteredHits[selectedIndex].path));
      onClose();
    }
  };

  const getKindIcon = (page: CatalogPage) => {
    if (page.kind === "raw") {
      return page.path.includes("bookmark") ? (
        <BookmarkSimple size={15} className="text-amber-500" />
      ) : (
        <FileText size={15} className="text-stone-400" />
      );
    }
    if (page.type === "Entity")
      return <Cube size={15} className="text-emerald-500" />;
    if (page.type === "Concept")
      return <Lightbulb size={15} className="text-sky-500" />;
    return <Scroll size={15} className="text-amber-600" />;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-16 backdrop-blur-md transition-opacity sm:pt-24"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] shadow-2xl transition-all"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[var(--border-default)] px-4 py-3">
          <MagnifyingGlass
            size={18}
            weight="bold"
            className="text-[var(--text-muted)]"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="键入关键词检索实体、概念、文献与原料..."
            className="flex-1 bg-transparent text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X size={14} />
            </button>
          )}
          <kbd className="rounded border border-[var(--border-default)] bg-[var(--bg-subtle)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-muted)]">
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 border-b border-[var(--border-subtle)] bg-[var(--bg-subtle)]/40 px-4 py-2 text-xs">
          {[
            { id: "all", label: "全部典藏" },
            { id: "Entity", label: "实体" },
            { id: "Concept", label: "概念" },
            { id: "Reference", label: "文献" },
            { id: "raw", label: "原料原文" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setFilterType(tab.id);
                setSelectedIndex(0);
              }}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                filterType === tab.id
                  ? "bg-[var(--accent)] text-white shadow-xs"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto font-mono text-[11px] text-[var(--text-muted)]">
            {filteredHits.length} 条记录
          </span>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {filteredHits.length === 0 ? (
            <div className="py-12 text-center text-xs text-[var(--text-muted)]">
              未找到与「{query}」匹配的知识条目
            </div>
          ) : (
            <div className="space-y-1">
              {filteredHits.map((hit, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <a
                    key={hit.path}
                    href={pageHref(hit.path)}
                    onClick={() => onClose()}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex items-start gap-3 rounded-xl p-3 transition-all ${
                      isSelected
                        ? "bg-[var(--accent-subtle)] text-[var(--accent-text)]"
                        : "text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                    }`}
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--bg-surface)] shadow-xs">
                      {getKindIcon(hit)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-medium text-sm text-[var(--text-primary)]">
                          {hit.title}
                        </span>
                        <span className="rounded-full bg-[var(--bg-subtle)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-muted)]">
                          {pageKindLabel(hit)}
                        </span>
                      </div>
                      {hit.description && (
                        <p className="mt-0.5 line-clamp-1 text-xs text-[var(--text-secondary)]">
                          {hit.description}
                        </p>
                      )}
                      <div className="mt-1 font-mono text-[10px] text-[var(--text-faint)]">
                        {hit.path}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex items-center justify-between border-t border-[var(--border-default)] bg-[var(--bg-subtle)]/60 px-4 py-2 text-[11px] text-[var(--text-muted)]">
          <span>使用 ↑ ↓ 选择，Enter 确认跳转</span>
          <span>yiya 知识图谱检索引擎</span>
        </div>
      </div>
    </div>
  );
};
