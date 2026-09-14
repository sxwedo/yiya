import type React from "react";
import {
  MagnifyingGlass,
  Sun,
  Moon,
  List,
  CornersOut,
  CornersIn,
} from "@phosphor-icons/react";
import type { Route } from "../types";

interface HeaderProps {
  route: Route;
  theme: "day" | "night";
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  zenMode: boolean;
  onToggleZenMode: () => void;
  sidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onOpenSearch,
  onToggleSidebar,
  zenMode,
  onToggleZenMode,
  sidebarOpen,
}) => {
  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-[var(--border-default)] bg-[var(--bg-surface)]/90 px-4 backdrop-blur-md transition-colors duration-200">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="inline-flex h-8 w-8 items-center justify-center border border-[var(--border-default)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
          aria-label="收起或展开侧栏"
          aria-expanded={sidebarOpen}
        >
          <List size={18} weight="bold" />
        </button>

        <a
          href="/"
          className="group flex items-center gap-2.5 px-1.5 py-1"
        >
          <span className="flex h-7 w-7 items-center justify-center bg-[var(--accent)] font-mono text-base font-bold text-[var(--bg-canvas)]">
            y
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-wider text-[var(--text-primary)]">
              yiya
            </span>
            <span className="font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
              dictionary
            </span>
          </div>
        </a>
      </div>

      {/* Global Quick Action Bar */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex h-9 items-center gap-2 border border-[var(--border-default)] bg-[var(--bg-subtle)] px-3 text-xs text-[var(--text-muted)] transition-all hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] focus:outline-none"
        >
          <MagnifyingGlass
            size={15}
            weight="bold"
            className="text-[var(--text-muted)]"
          />
          <span>检索</span>
          <kbd className="hidden border border-[var(--border-default)] bg-[var(--bg-surface)] px-1.5 py-0.5 font-mono text-[10px] sm:inline">
            ⌘K
          </kbd>
        </button>

        <button
          type="button"
          onClick={onToggleZenMode}
          title={zenMode ? "退出沉浸阅读" : "沉浸专注文档"}
          className={`flex h-8 w-8 items-center justify-center border border-[var(--border-default)] transition-all ${
            zenMode
              ? "bg-[var(--accent-subtle)] text-[var(--accent)]"
              : "bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
          }`}
        >
          {zenMode ? (
            <CornersIn size={16} weight="bold" />
          ) : (
            <CornersOut size={16} weight="bold" />
          )}
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          title={theme === "night" ? "切换至白日模式" : "切换至黑曜模式"}
          className="flex h-8 w-8 items-center justify-center border border-[var(--border-default)] bg-[var(--bg-subtle)] text-[var(--text-secondary)] transition-all hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
        >
          {theme === "night" ? (
            <Sun size={16} weight="bold" />
          ) : (
            <Moon size={16} weight="bold" />
          )}
        </button>
      </div>
    </header>
  );
};
