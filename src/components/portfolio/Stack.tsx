const groups = [
  {
    title: "Mobile Development",
    items: ["Flutter", "Dart", "Google AI Dart SDK", "REST APIs"],
  },
  {
    title: "Engenharia de Dados",
    items: ["Python", "Django", "PostgreSQL", "Pandas", "PyArrow", "Power BI"],
  },
  {
    title: "IA & Machine Learning",
    items: ["Gemini (Flash-Lite)", "LLMs Integration", "Prompt Engineering", "RAG & Embeddings"],
  },
  {
    title: "Ambientes & Infra",
    items: ["Docker", "Kali Linux", "Supabase", "Git & GitHub"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          / 02 · Stack
        </div>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-16">
          Stack tecnológica, <br className="hidden md:block" />
          focada em eficiência.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {groups.map((g) => (
            <div key={g.title} className="bg-background p-8">
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6">
                {g.title}
              </div>
              <ul className="space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <span className="size-1 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
