import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Define a base com o nome do seu repositório no GitHub
    base: "/alcides-dark-data-portfolio/",
    build: {
      outDir: "dist",
      minify: true,
      cssMinify: true,
      sourcemap: false,
    },
  },
});