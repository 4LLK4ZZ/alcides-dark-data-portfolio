export function Nav() {
  const links = [
    { href: "#work", label: "Trabalhos" },
    { href: "#stack", label: "Stack" },
    { href: "#about", label: "Sobre" },
    { href: "#contact", label: "Contato" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-medium tracking-tight">
          <span className="size-2 rounded-full bg-accent animate-pulse-dot" />
          akz.dev
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-mono px-3 py-1.5 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
        >
          disponível →
        </a>
      </nav>
    </header>
  );
}
