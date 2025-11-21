import { Target, Eye, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import latteImage from "@/assets/products/cafe/latte.jpeg";

const Mission = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${latteImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/65" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-primary-foreground">
            Missão & Objetivos
          </h1>
          <p className="font-sans text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            O nosso compromisso em criar experiências memoráveis e construir um futuro sustentável
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 shadow-[var(--shadow-elegant)] bg-gradient-to-br from-card to-secondary/20">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-accent" size={32} />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    A Nossa Missão
                  </h2>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    Proporcionar momentos únicos de prazer e conexão através de café de excelência, criando um espaço acolhedor onde a comunidade se reúne, as ideias florescem e as relações se fortalecem. Comprometemo-nos a elevar a cultura do café em Portugal, mantendo os mais altos padrões de qualidade e sustentabilidade.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 shadow-[var(--shadow-elegant)]">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="text-accent" size={32} />
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    A Nossa Visão
                  </h2>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    Tornar-nos a referência em cafés urbanos de excelência, reconhecidos não apenas pela qualidade dos nossos produtos, mas pela experiência completa que oferecemos. Aspiramos expandir a nossa presença enquanto mantemos a autenticidade e o cuidado que nos definem, inspirando uma nova geração de apreciadores de café.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="text-accent" size={32} />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Os Nossos Objetivos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Excelência no Produto</h3>
                <p className="font-sans text-muted-foreground">
                  Manter os mais altos padrões de qualidade na seleção, torra e preparação do café, garantindo consistência em cada chávena servida.
                </p>
              </Card>

              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Experiência do Cliente</h3>
                <p className="font-sans text-muted-foreground">
                  Criar um ambiente onde cada visitante se sinta valorizado e bem-vindo, proporcionando um serviço atencioso e personalizado.
                </p>
              </Card>

              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Sustentabilidade</h3>
                <p className="font-sans text-muted-foreground">
                  Implementar práticas sustentáveis em toda a cadeia de valor, desde o comércio justo até à redução do impacto ambiental.
                </p>
              </Card>

              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Inovação Contínua</h3>
                <p className="font-sans text-muted-foreground">
                  Explorar novas técnicas, sabores e experiências, mantendo-nos na vanguarda da cultura do café contemporâneo.
                </p>
              </Card>

              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Desenvolvimento de Equipa</h3>
                <p className="font-sans text-muted-foreground">
                  Investir na formação e bem-estar dos nossos colaboradores, reconhecendo que são essenciais para o nosso sucesso.
                </p>
              </Card>

              <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border-l-4 border-accent">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">Expansão Responsável</h3>
                <p className="font-sans text-muted-foreground">
                  Crescer de forma estratégica e sustentável, levando a experiência Porto de Encontro a novas comunidades.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
