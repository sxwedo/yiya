import type React from "react";
import { useState } from "react";
import {
  Compass,
  FileText,
  BookmarkSimple,
  Tray,
  CaretRight,
  Scroll,
  BookBookmark,
} from "@phosphor-icons/react";
import type { Catalog, Route } from "../types";
import {
  countWiki,
  dirHref,
  overviewPath,
  pageHref,
  rawCounts,
} from "../paths";

interface SidebarProps {
  catalog: Catalog;
  route: Route;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  catalog,
  route,
  isOpen,
  onClose,
}) => {
  const [collapsedDomains, setCollapsedDomains] = useState<
    Record<string, boolean>
  >({});

  const toggleDomain = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCollapsedDomains((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isNavActive = (href: string): boolean => {
    if (href === "/" || href === "./") return route.view === "home";
    if (href.startsWith("/tree/")) {
      const folder = decodeURIComponent(href.slice(6));
      if (route.view === "dir") return route.folder === folder;
      if (route.view === "page") return route.path.startsWith(`${folder}/`);
      return false;
    }
    if (href.startsWith("?d=")) {
      const folder = decodeURIComponent(href.slice(3));
      if (route.view === "dir") return route.folder === folder;
      if (route.view === "page") return route.path.startsWith(`${folder}/`);
      return false;
    }
    if (href.startsWith("?p=")) {
      const path = decodeURIComponent(href.slice(3));
      return route.view === "page" && route.path === path;
    }
    if (route.view === "page") {
      const cleanHref = decodeURIComponent(href).replace(/^\/+/, "");
      return route.path === cleanHref;
    }
    return false;
  };

  const raw = rawCounts(catalog);

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden"
        />
      )}

      <aside
        className={`fixed top-14 bottom-0 left-0 z-40 flex w-72 flex-col border-r border-[var(--border-default)] bg-[var(--bg-surface)] p-4 transition-transform duration-300 lg:static lg:top-0 lg:h-[calc(100dvh-3.5rem)] lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto pr-1">
          {/* Main Map Link */}
          <a
            href="/"
            onClick={onClose}
            className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all ${
              isNavActive("./")
                ? "bg-[var(--accent-subtle)] font-semibold text-[var(--accent)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Compass
              size={18}
              weight={isNavActive("./") ? "fill" : "regular"}
              className="text-[var(--accent)]"
            />
            <span>知识地图 · Overview</span>
          </a>

          {/* Curated Domains Accordion */}
          <div className="mt-5 space-y-4">
            <div className="px-2 text-[11px] font-semibold tracking-wider text-[var(--text-muted)] uppercase">
              知识展馆 (Wings)
            </div>

            {catalog.domains.map((domain, idx) => {
              const overview = overviewPath(domain.path);
              const isCollapsed = Boolean(collapsedDomains[domain.id]);
              const domainActive =
                route.view === "page" && route.path.startsWith(domain.path)
                  ? true
                  : route.view === "dir" &&
                    route.folder.startsWith(domain.path);

              const wingNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={domain.id}
                  className="rounded-lg bg-[var(--bg-subtle)]/50 p-1.5"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={pageHref(overview)}
                      onClick={onClose}
                      className={`flex flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                        domainActive
                          ? "text-[var(--accent)]"
                          : "text-[var(--text-primary)] hover:text-[var(--accent)]"
                      }`}
                    >
                      <span className="font-mono text-[10px] text-[var(--text-muted)]">
                        {wingNum}
                      </span>
                      <span>{domain.title}</span>
                    </a>
                    <button
                      type="button"
                      onClick={(e) => toggleDomain(domain.id, e)}
                      className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      aria-label="展开或折叠此分类"
                    >
                      <CaretRight
                        size={12}
                        weight="bold"
                        className={`transition-transform duration-200 ${
                          isCollapsed ? "" : "rotate-90"
                        }`}
                      />
                    </button>
                  </div>

                  {!isCollapsed && (
                    <div className="mt-1 space-y-0.5 pl-3">
                      {domain.id !== "shared" && (
                        <a
                          href={pageHref(overview)}
                          onClick={onClose}
                          className={`flex items-center justify-between rounded px-2 py-1 text-xs transition-colors ${
                            isNavActive(pageHref(overview))
                              ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          <span>概述</span>
                        </a>
                      )}

                      <a
                        href={dirHref(`${domain.path}/entities`)}
                        onClick={onClose}
                        className={`flex items-center justify-between rounded px-2 py-1 text-xs transition-colors ${
                          isNavActive(dirHref(`${domain.path}/entities`))
                            ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span>实体</span>
                        <span className="rounded-full bg-[var(--bg-surface)] px-1.5 py-0.2 font-mono text-[10px] text-[var(--text-muted)] shadow-xs">
                          {countWiki(domain, "Entity")}
                        </span>
                      </a>

                      <a
                        href={dirHref(`${domain.path}/concepts`)}
                        onClick={onClose}
                        className={`flex items-center justify-between rounded px-2 py-1 text-xs transition-colors ${
                          isNavActive(dirHref(`${domain.path}/concepts`))
                            ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span>概念</span>
                        <span className="rounded-full bg-[var(--bg-surface)] px-1.5 py-0.2 font-mono text-[10px] text-[var(--text-muted)] shadow-xs">
                          {countWiki(domain, "Concept")}
                        </span>
                      </a>

                      <a
                        href={dirHref(`${domain.path}/references`)}
                        onClick={onClose}
                        className={`flex items-center justify-between rounded px-2 py-1 text-xs transition-colors ${
                          isNavActive(dirHref(`${domain.path}/references`))
                            ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span>文献</span>
                        <span className="rounded-full bg-[var(--bg-surface)] px-1.5 py-0.2 font-mono text-[10px] text-[var(--text-muted)] shadow-xs">
                          {countWiki(domain, "Reference")}
                        </span>
                      </a>

                      {catalog.pages.some(
                        (p) => p.path === `${domain.path}/log.md`,
                      ) && (
                        <a
                          href={pageHref(`${domain.path}/log.md`)}
                          onClick={onClose}
                          className={`flex items-center justify-between rounded px-2 py-1 text-xs transition-colors ${
                            isNavActive(pageHref(`${domain.path}/log.md`))
                              ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                              : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
                          }`}
                        >
                          <span className="flex items-center gap-1.5">
                            <Scroll size={12} />
                            <span>日志</span>
                          </span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Raw Archives Section */}
          <div className="mt-6 space-y-1">
            <div className="px-2 text-[11px] font-semibold tracking-wider text-[var(--text-muted)] uppercase">
              原料档案 (Drawers)
            </div>

            <a
              href={dirHref("raw/articles")}
              onClick={onClose}
              className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors ${
                isNavActive(dirHref("raw/articles"))
                  ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText size={15} />
                <span>成文精选</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                {raw.articles}
              </span>
            </a>

            <a
              href={dirHref("raw/bookmarks")}
              onClick={onClose}
              className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors ${
                isNavActive(dirHref("raw/bookmarks"))
                  ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <BookmarkSimple size={15} />
                <span>网络书签</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                {raw.bookmarks}
              </span>
            </a>

            <a
              href={dirHref("raw/_inbox")}
              onClick={onClose}
              className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-xs transition-colors ${
                isNavActive(dirHref("raw/_inbox"))
                  ? "bg-[var(--accent-subtle)] font-medium text-[var(--accent)]"
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
              }`}
            >
              <span className="flex items-center gap-2">
                <Tray size={15} />
                <span>待理收件箱</span>
              </span>
              <span className="font-mono text-[10px] text-[var(--text-muted)]">
                {raw.inbox}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Status & Guidelines */}
        <div className="mt-3 border-t border-[var(--border-default)] pt-3">
          <a
            href={pageHref("AGENTS.md")}
            onClick={onClose}
            className="flex items-center justify-between rounded-md px-2 py-1.5 text-xs text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
          >
            <span className="flex items-center gap-1.5">
              <BookBookmark size={14} />
              <span>知识库约定规范</span>
            </span>
            <span className="font-mono text-[10px]">AGENTS.md</span>
          </a>
        </div>
      </aside>
    </>
  );
};
