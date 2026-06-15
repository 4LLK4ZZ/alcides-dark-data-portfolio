// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Mantém a entrada do servidor padrão que o Lovable precisa
    server: { entry: "server" },
  },
  // Passamos as customizações de build de forma segura por dentro do bloco do Vite
  vite: {
    // Se for o repositório principal (seu-usuario.github.io), deixe "/"
    // Se for um sub-repositório, altere para "/nome-do-repositorio/"
    base: "/",
    
    // Injetamos as diretivas do Nitro aqui para que o compilador do Lovable repasse para o gerador estático
    // @ts-ignore - Evita que o TypeScript do Lovable trave o build por validação rígida de propriedades
    nitro: {
      preset: "github-pages",
      prerender: {
        routes: ["/"],
      },
    },
  },
});