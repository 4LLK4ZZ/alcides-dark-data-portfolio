import { useState } from "react";

import echad01 from "@/assets/echad/01-boas-vindas.webp";
import echad02 from "@/assets/echad/02-loading.webp";
import echad03 from "@/assets/echad/03-tela-inicial.webp";
import echad04 from "@/assets/echad/04-tela-inicial-selecao.webp";
import echad05 from "@/assets/echad/05-lista-livros-1.webp";
import echad06 from "@/assets/echad/06-lista-livros-2.webp";
import echad07 from "@/assets/echad/07-sobre.webp";
import echad08 from "@/assets/echad/08-genesis-capitulo.webp";
import echad09 from "@/assets/echad/09-genesis-versiculo.webp";
import echad10 from "@/assets/echad/10-geracao-ia.webp";
import echad11 from "@/assets/echad/11-geracao-ia-2.webp";

const echadScreens = [
  { src: echad01, alt: "Tela de boas-vindas do Echad" },
  { src: echad02, alt: "Tela de carregamento do Echad" },
  { src: echad03, alt: "Tela inicial do Echad" },
  { src: echad04, alt: "Tela inicial com seleção de livro" },
  { src: echad05, alt: "Lista de livros — parte 1" },
  { src: echad06, alt: "Lista de livros — parte 2" },
  { src: echad07, alt: "Tela sobre o aplicativo" },
  { src: echad08, alt: "Capítulo de Gênesis" },
  { src: echad09, alt: "Versículo de Gênesis" },
  { src: echad10, alt: "Recomendação gerada por IA" },
  { src: echad11, alt: "Recomendação gerada por IA — variação" },
];

const projects = [
  {
    n: "01",
    title: "Echad App",
    tag: "Mobile · IA",
    desc: "Aplicativo multiplataforma para recomendação inteligente de textos. Integra o Google AI Dart SDK utilizando o modelo Gemini Flash-Lite para entregar processamento leve diretamente no dispositivo.",
    stack: ["Flutter", "Dart", "Gemini API"],
    year: "2026",
    screens: echadScreens,
  },
  {
    n: "02",
    title: "Intelligence Server & Agents",
    tag: "IA · Automação",
    desc: "Implementação de servidores baseados em Model Context Protocol (MCP) e arquiteturas de agentes autônomos para orquestração de LLMs e automação inteligente de fluxos.",
    stack: ["Python", "MCP", "CrewAI", "LangChain"],
    year: "2026",
  },
  {
    n: "03",
    title: "Data Engineering Ecosystem",
    tag: "Dados · ETL",
    desc: "Ambiente centralizado focado no desenvolvimento de pipelines de dados, engenharia reversa, modelagem de processos de ETL e manipulação computacional de volumes estruturados.",
    stack: ["Python", "Jupyter", "Pandas"],
    year: "2026",
  },
];

export function Work() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
              / 01 · Trabalhos selecionados
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Projetos desenvolvidos <br className="hidden md:block" />e em destaque.
            </h2>
          </div>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {projects.map((p) => {
            const isOpen = expanded === p.n;
            const Row = (
              <div className="grid grid-cols-12 gap-4 md:gap-8 items-start">
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-muted-foreground pt-2">
                  {p.n}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-2">
                    {p.tag} · {p.year}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 text-muted-foreground text-sm md:text-base leading-relaxed">
                  {p.desc}
                </div>
                <div className="col-span-12 md:col-span-2 flex md:justify-end">
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );

            if (!p.screens) {
              return (
                <a
                  key={p.n}
                  href="#contact"
                  className="group block py-8 md:py-10 transition-colors hover:bg-surface/40 -mx-6 px-6"
                >
                  {Row}
                </a>
              );
            }

            return (
              <div key={p.n} className="-mx-6 px-6">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : p.n)}
                  aria-expanded={isOpen}
                  className="group w-full text-left block py-8 md:py-10 transition-colors hover:bg-surface/40"
                >
                  {Row}
                  <div className="mt-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                    <span
                      className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                    >
                      →
                    </span>
                    {isOpen ? "Ocultar capturas" : `Ver capturas (${p.screens.length})`}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-10">
                    <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:thin]">
                      {p.screens.map((s) => (
                        <div
                          key={s.alt}
                          className="shrink-0 snap-start w-[150px] md:w-[180px]"
                        >
                          <div className="overflow-hidden rounded-xl border border-border bg-surface">
                            <img
                              src={s.src}
                              alt={s.alt}
                              loading="lazy"
                              className="w-full h-auto block"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground font-mono">
          * repositórios adicionais e acadêmicos disponíveis no perfil público do GitHub.
        </p>
      </div>
    </section>
  );
}
