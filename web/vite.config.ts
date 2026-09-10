import path from "node:path";
import { defineConfig } from "vite";
import { yiyaVault } from "./plugin/vault";

const repoRoot = path.resolve(__dirname, "..");

export default defineConfig({
  base: "./",
  plugins: [yiyaVault(repoRoot)],
  server: {
    port: 5173,
    fs: { allow: [repoRoot, __dirname] },
  },
});
