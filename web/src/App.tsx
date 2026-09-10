import type React from "react";
import { useState, useEffect } from "react";
import type { Catalog, Route } from "./types";
import { catalogUrl, dirHref, pageHref, parseLocation } from "./paths";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { HomeView } from "./components/HomeView";
import { DirView } from "./components/DirView";
import { ArticleView } from "./components/ArticleView";
import { SearchModal } from "./components/SearchModal";

export const App: React.FC = () => {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [route, setRoute] = useState<Route>(parseLocation());
  const [theme, setTheme] = useState<"day" | "night">(() => {
    return localStorage.getItem("yiya-theme") === "night" ? "night" : "day";
  });
  const [zenMode, setZenMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Sync theme attribute
  useEffect(() => {
    if (theme === "night") {
      document.documentElement.dataset.theme = "night";
    } else {
      delete document.documentElement.dataset.theme;
    }
    localStorage.setItem("yiya-theme", theme);
  }, [theme]);

  // Load catalog
  useEffect(() => {
    // 1. Normalize legacy ?p=... and ?d=... to clean path URLs in the address bar
    const q = new URLSearchParams(window.location.search);
    const pParam = q.get("p");
    const dParam = q.get("d");
    if (pParam) {
      window.history.replaceState(
        null,
        "",
        pageHref(pParam) + window.location.hash,
      );
      setRoute({
        view: "page",
        path: decodeURIComponent(pParam).replace(/^\/+/, ""),
      });
    } else if (dParam) {
      window.history.replaceState(
        null,
        "",
        dirHref(dParam) + window.location.hash,
      );
      setRoute({
        view: "dir",
        folder: decodeURIComponent(dParam).replace(/^\/+|\/+$/g, ""),
      });
    }

    fetch(catalogUrl())
      .then((res) => {
        if (!res.ok) throw new Error("无法加载知识目录");
        return res.json() as Promise<Catalog>;
      })
      .then((data) => setCatalog(data))
      .catch(() => {});

    const hot = import.meta as ImportMeta & {
      hot?: { on: (event: string, cb: () => void) => void };
    };
    hot.hot?.on("yiya-catalog", () => {
      fetch(catalogUrl())
        .then((res) => res.json() as Promise<Catalog>)
        .then((data) => setCatalog(data))
        .catch(() => {});
    });
  }, []);

  // History / Popstate handler
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseLocation());
      setIsSidebarOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Keyboard shortcut handler (Cmd+K / / to search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Intercept in-app link navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target || target.target === "_blank") return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;

      e.preventDefault();
      const next = `${url.pathname}${url.search}${url.hash}`;
      if (
        `${window.location.pathname}${window.location.search}${window.location.hash}` !==
        next
      ) {
        window.history.pushState(null, "", next);
        setRoute(parseLocation());
        setIsSidebarOpen(false);
        if (url.hash) {
          const el = document.getElementById(
            decodeURIComponent(url.hash.slice(1)),
          );
          el?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  const handleNavigate = (href: string) => {
    const url = new URL(href, window.location.href);
    window.history.pushState(
      null,
      "",
      `${url.pathname}${url.search}${url.hash}`,
    );
    setRoute(parseLocation());
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  if (!catalog) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[var(--bg-canvas)]">
        <div className="flex flex-col items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent)] font-display text-xl font-bold text-white shadow-md animate-pulse">
            y
          </span>
          <span className="text-xs font-mono tracking-wider text-[var(--text-muted)]">
            ARCHIVE LOADING...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200">
      <Header
        route={route}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        zenMode={zenMode}
        onToggleZenMode={() => setZenMode((prev) => !prev)}
      />

      <div className="flex">
        {/* Collapsible Curated Explorer Sidebar */}
        {!zenMode && (
          <Sidebar
            catalog={catalog}
            route={route}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Stage */}
        <main className="min-w-0 flex-1 px-4 sm:px-6 md:px-8 py-4">
          {route.view === "home" && <HomeView catalog={catalog} />}
          {route.view === "dir" && (
            <DirView catalog={catalog} folder={route.folder} />
          )}
          {route.view === "page" && (
            <ArticleView
              key={route.path}
              path={route.path}
              catalog={catalog}
              zenMode={zenMode}
            />
          )}
        </main>
      </div>

      {/* Command Palette Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        catalog={catalog}
        onSelectPage={handleNavigate}
      />
    </div>
  );
};
