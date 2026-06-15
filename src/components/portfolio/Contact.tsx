export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          / 04 · Contato
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[0.95]">
          Tem uma ideia?<br />
          <span className="text-muted-foreground">Vamos construir</span>
          <span className="text-accent text-glow">.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border border border-border">
          <a
            href="mailto:allkazzcoder@gmail.com"
            className="bg-background p-8 group hover:bg-surface/40 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Email
            </div>
            <div className="font-display text-2xl group-hover:text-accent transition-colors">
              allkazzcoder@gmail.com →
            </div>
          </a>
          <a
            href="https://github.com/4LLK4ZZ"
            target="_blank"
            rel="noreferrer"
            className="bg-background p-8 group hover:bg-surface/40 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Código
            </div>
            <div className="font-display text-2xl group-hover:text-accent transition-colors">
              github.com/4LLK4ZZ →
            </div>
          </a>
          <a
            href="https://linkedin.com/in/alcides-augusto-nog"
            target="_blank"
            rel="noreferrer"
            className="bg-background p-8 group hover:bg-surface/40 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Rede
            </div>
            <div className="font-display text-2xl group-hover:text-accent transition-colors">
              linkedin.com/in/alcides-augusto-nog →
            </div>
          </a>
          <a
            href="https://calendar.app.google/pcWNtfEqeVR5F7zS7"
            target="_blank"
            rel="noreferrer"
            className="bg-background p-8 group hover:bg-surface/40 transition-colors"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Agenda
            </div>
            <div className="font-display text-2xl group-hover:text-accent transition-colors">
              Marcar uma call (30min) →
            </div>
          </a>
        </div>
        <footer className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
          <div>© 2026 Alcides Nogueira</div>
          <div>Construído com cuidado · Brasil</div>
        </footer>
      </div>
    </section>
  );
}