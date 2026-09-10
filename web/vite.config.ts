import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { yiyaVault } from "./plugin/vault";

const repoRoot = path.resolve(__dirname, "..");

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), yiyaVault(repoRoot)],
  server: {
    host: "0.0.0.0",
    port: 5173,
    fs: { allow: [repoRoot, __dirname] },
  },
});
