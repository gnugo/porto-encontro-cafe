import { Card } from "@/components/ui/card";
import heroCafe from "@/assets/hero-cafe.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCafe})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-primary-foreground">
            Sobre Nós
          </h1>
          <p className="font-sans text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Uma história de paixão pelo café e pela arte de criar momentos especiais
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-[var(--shadow-elegant)]">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
                A Nossa História
              </h2>
              <div className="space-y-6 font-sans text-lg text-muted-foreground leading-relaxed">
                <p>
                  O <span className="text-foreground font-semibold">Porto de Encontro</span> nasceu do sonho de criar mais do que um simples café. Queríamos um espaço onde as pessoas pudessem desacelerar, conectar-se e saborear momentos autênticos.
                </p>
                <p>
                  Inspirados pela rica tradição cafeeira e pelo dinamismo urbano moderno, criámos um ambiente que celebra o melhor de ambos os mundos. Cada detalhe foi pensado para proporcionar uma experiência única, desde a seleção dos grãos até ao design do espaço.
                </p>
                <p>
                  Hoje, orgulhamo-nos de ser mais do que um café - somos um verdadeiro porto de encontro para a comunidade, onde amigos se reúnem, ideias florescem e memórias são criadas, uma chávena de cada vez.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Os Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Qualidade</h3>
              <p className="font-sans text-muted-foreground">
                Comprometemo-nos com a excelência em cada aspecto, desde a seleção de ingredientes premium até ao serviço atencioso.
              </p>
            </Card>

            <Card className="p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Autenticidade</h3>
              <p className="font-sans text-muted-foreground">
                Mantemos a verdadeira essência do café artesanal, honrando tradições enquanto abraçamos a inovação.
              </p>
            </Card>

            <Card className="p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Comunidade</h3>
              <p className="font-sans text-muted-foreground">
                Cultivamos um ambiente inclusivo onde todos se sentem bem-vindos e podem ser eles mesmos.
              </p>
            </Card>

            <Card className="p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Sustentabilidade</h3>
              <p className="font-sans text-muted-foreground">
                Praticamos comércio justo e adotamos práticas sustentáveis para proteger o planeta que amamos.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
