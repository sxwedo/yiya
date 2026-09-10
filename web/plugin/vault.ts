import fs from "node:fs";
import path from "node:path";
import type { Plugin, ViteDevServer } from "vite";
import { buildCatalog } from "./catalog";

function mime(file: string): string {
  if (file.endsWith(".md")) return "text/markdown; charset=utf-8";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".png")) return "image/png";
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) return "image/jpeg";
  if (file.endsWith(".gif")) return "image/gif";
  if (file.endsWith(".webp")) return "image/webp";
  if (file.endsWith(".svg")) return "image/svg+xml";
  return "application/octet-stream";
}

function safeJoin(root: string, rel: string): string | null {
  const abs = path.resolve(root, rel);
  const normalizedRoot = path.resolve(root);
  if (abs !== normalizedRoot && !abs.startsWith(normalizedRoot + path.sep))
    return null;
  return abs;
}

function copyTree(src: string, dest: string, skip: Set<string>) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    if (skip.has(name) || name.startsWith(".")) continue;
    const from = path.join(src, name);
    const to = path.join(dest, name);
    const stat = fs.statSync(from);
    if (stat.isDirectory()) copyTree(from, to, skip);
    else fs.copyFileSync(from, to);
  }
}

export function yiyaVault(repoRoot: string): Plugin {
  let catalogJson = "{}";

  const rebuild = () => {
    catalogJson = JSON.stringify(buildCatalog(repoRoot));
  };

  const serve = (server: ViteDevServer) => {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split("?")[0] ?? "";
      if (url === "/api/catalog.json") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(catalogJson);
        return;
      }
      if (!url.startsWith("/vault/")) {
        next();
        return;
      }
      const rel = decodeURIComponent(url.slice("/vault/".length));
      const abs = safeJoin(repoRoot, rel);
      if (!abs || !fs.existsSync(abs) || fs.statSync(abs).isDirectory()) {
        res.statusCode = 404;
        res.end("not found");
        return;
      }
      res.setHeader("Content-Type", mime(abs));
      fs.createReadStream(abs).pipe(res);
    });
  };

  return {
    name: "yiya-vault",
    buildStart() {
      rebuild();
    },
    configureServer(server) {
      rebuild();
      const watchDirs = ["domains", "shared", "raw", "config"].map((d) =>
        path.join(repoRoot, d),
      );
      server.watcher.add(watchDirs);
      server.watcher.on("all", (_event, file) => {
        if (!file.endsWith(".md") && !file.endsWith(".yaml")) return;
        rebuild();
        server.ws.send({ type: "custom", event: "yiya-catalog" });
      });
      serve(server);
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "api/catalog.json",
        source: catalogJson,
      });
    },
    closeBundle() {
      const outDir = path.resolve(repoRoot, "web", "dist", "vault");
      const skip = new Set(["_media", "node_modules"]);
      copyTree(
        path.join(repoRoot, "domains"),
        path.join(outDir, "domains"),
        skip,
      );
      copyTree(
        path.join(repoRoot, "shared"),
        path.join(outDir, "shared"),
        skip,
      );
      copyTree(path.join(repoRoot, "raw"), path.join(outDir, "raw"), skip);
      for (const name of ["README.md", "AGENTS.md"]) {
        const from = path.join(repoRoot, name);
        if (fs.existsSync(from)) fs.copyFileSync(from, path.join(outDir, name));
      }
    },
  };
}
