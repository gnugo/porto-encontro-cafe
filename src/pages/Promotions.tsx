import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Calendar, Gift } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import promoNatal from "@/assets/promotions/promo-natal.jpg";

const Promotions = () => {
  const [selectedPromo, setSelectedPromo] = useState<string | null>(null);

  const promotions = [
    {
      id: 1,
      title: "Campanha de Natal - 7º Pequeno-Almoço Grátis!",
      description: "O seu Bom Dia está prestes a ficar mais saboroso. Adira já ao Porto de Encontro Card! Estamos entusiasmados por tê-lo na nossa família de clientes fiéis!",
      image: promoNatal, // Usar a imagem importada
      validUntil: "31/12/2025",
      active: true,
      featured: true,
    },
    // Podes adicionar mais promoções aqui no futuro
  ];

  const handleImageClick = (image: string) => {
    setSelectedPromo(image);
  };

  const closeModal = () => {
    setSelectedPromo(null);
  };

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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Gift className="text-accent" size={48} />
            <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">
              Promoções
            </h1>
          </div>
          <p className="font-sans text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Descubra as nossas ofertas especiais e campanhas exclusivas
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {promotions.map((promo) => (
                <Card 
                  key={promo.id} 
                  className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 cursor-pointer group"
                  onClick={() => handleImageClick(promo.image)}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    <img 
                      src={promo.image} 
                      alt={promo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {promo.featured && (
                      <Badge className="absolute top-4 right-4 bg-accent text-primary font-semibold">
                        Destaque
                      </Badge>
                    )}
                    {promo.active && (
                      <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                        Ativa
                      </Badge>
                    )}
                    {/* Overlay hint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent px-4 py-2 rounded-full">
                        Clique para ampliar
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                      {promo.title}
                    </h3>
                    <p className="font-sans text-muted-foreground text-sm mb-4 line-clamp-3">
                      {promo.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent">
                      <Calendar size={16} />
                      <span>Válido até {promo.validUntil}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Empty State for future promotions */}
            {promotions.length === 0 && (
              <div className="text-center py-16">
                <Gift className="mx-auto text-muted-foreground mb-4" size={64} />
                <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">
                  Sem promoções ativas
                </h3>
                <p className="font-sans text-muted-foreground">
                  Fique atento! Em breve teremos novas ofertas especiais para si.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4 text-foreground">
            Não perca as nossas ofertas!
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Siga-nos nas redes sociais e fique a par de todas as promoções e campanhas exclusivas. 
            Subscreva a nossa newsletter para receber ofertas especiais diretamente no seu email.
          </p>
        </div>
      </section>

      {/* Modal for full-size image */}
      {selectedPromo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300 p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-3xl w-full my-8 animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            {/* Full Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={selectedPromo} 
                alt="Promoção" 
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>

            {/* Close hint */}
            <p className="text-center text-white/75 text-sm mt-4">
              Clique fora da imagem ou no X para fechar
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promotions;