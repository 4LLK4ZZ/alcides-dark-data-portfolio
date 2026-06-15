export function About() {
  return (
    <section id="about" className="relative py-32 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            / 03 · Sobre
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Engenheiro de<br />Software.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Sou <span className="text-foreground">Alcides Nogueira</span>, desenvolvedor focado em projetar e construir soluções digitais de ponta a ponta. Minha experiência prática envolve desde a criação de aplicações multiplataforma (Mobile e Desktop) com <span className="text-foreground">Flutter e Dart</span>, até o desenvolvimento de sistemas modulares em Python.
          </p>
          <p>
            Atualmente, direciono meus estudos e atuação técnica para a <span className="text-foreground">Engenharia de Dados e Machine Learning Engineering</span>. Desenvolvo pipelines estruturados de ETL, manipulação computacional de dados e integração arquitetada de modelos de linguagem (LLMs) onde eles de fato agregam valor ao produto.
          </p>
          <p>
            Trabalho de forma independente, unindo lógica de programação sólida com uma forte familiaridade em administração de ambientes e sistemas operacionais, garantindo entregas organizadas e funcionais.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-6 font-mono text-xs uppercase tracking-wider">
            <div>
              <div className="text-muted-foreground mb-1">Localização</div>
              <div className="text-foreground">São Paulo, Brasil · Remoto</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Idiomas</div>
              <div className="text-foreground">Português · Inglês</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}