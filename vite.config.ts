import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Força o empacotador a gerar um build estático para hospedagens como GitHub Pages
    nitro: {
      preset: "github-pages"
    }
  },
  vite: {
    base: "/alcides-dark-data-portfolio/",
    build: {
      outDir: "dist",
    }
  },
});