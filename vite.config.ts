import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Força o ecossistema a desativar o SSR e gerar uma Build de SPA Tradicional
    app: {
      mode: "spa"
    }
  },
  vite: {
    // Mantém o caminho correto para o subdiretório do seu portfólio
    base: "/alcides-dark-data-portfolio/",
    build: {
      outDir: "dist",
      minify: true,
    },
  },
});