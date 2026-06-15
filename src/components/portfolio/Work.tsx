const projects = [
  {
    n: "01",
    title: "Echad App",
    tag: "Mobile · IA",
    desc: "Aplicativo multiplataforma para recomendação inteligente de textos. Integra o Google AI Dart SDK utilizando o modelo Gemini Flash-Lite para entregar processamento leve diretamente no dispositivo.",
    stack: ["Flutter", "Dart", "Gemini API"],
    year: "2026",
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
          {projects.map((p) => (
            <a
              key={p.n}
              href="#contact"
              className="group block py-8 md:py-10 transition-colors hover:bg-surface/40 -mx-6 px-6"
            >
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
                    {p.stack.slice(0, 3).map((s) => ( // Alterado para aceitar até 3 tags pequenas na visualização lateral
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
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground font-mono">
          * repositórios adicionais e acadêmicos disponíveis no perfil público do GitHub.
        </p>
      </div>
    </section>
  );
}