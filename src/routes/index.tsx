import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Stack } from "@/components/portfolio/Stack";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alcides Nogueira — Mobile, Dados & IA" },
      {
        name: "description",
        content:
          "Portfólio de Alcides Nogueira, desenvolvedor mobile autônomo especializado em React Native, engenharia de dados e inteligência artificial.",
      },
      { property: "og:title", content: "Alcides Nogueira — Mobile, Dados & IA" },
      {
        property: "og:description",
        content:
          "Apps mobile, pipelines de dados e produtos com IA construídos por Alcides Nogueira.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Work />
      <Stack />
      <About />
      <Contact />
    </main>
  );
}
