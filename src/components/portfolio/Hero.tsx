export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground mb-8">
          <span className="size-1.5 rounded-full bg-accent animate-pulse-dot" />
          Disponível para projetos · Q3 2026
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[0.95]">
          Alcides<br />
          Nogueira
          <span className="text-accent text-glow">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Engenheiro de software construindo aplicações robustas com{" "}
          <span className="text-foreground">Flutter</span>,{" "}
          <span className="text-foreground">pipelines de dados</span> e{" "}
          <span className="text-foreground">inteligência artificial</span>.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-md font-medium hover:bg-accent transition-colors"
          >
            Ver projetos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:border-foreground transition-colors"
          >
            Iniciar conversa
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border">
          {[
            { v: "1+", l: "ano de experiência mobile" }, //
            { v: "Multi", l: "plataformas (Mobile & Desktop)" }, //
            { v: "Engenharia", l: "de dados & automações" }, //
            { v: "GenAI", l: "integrada em produção" }, //
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl tracking-tight">{s.v}</div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
