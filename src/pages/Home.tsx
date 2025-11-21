import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cafe.jpg";
import PromoPopup from "@/components/PromoPopup";
import promoNatal from "@/assets/promotions/promo-natal.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Promo Popup */}
      <PromoPopup imageUrl={promoNatal} />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Porto de Encontro
          </h1>
          <p className="font-sans text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Onde cada café conta uma história e cada momento se torna especial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold"
            >
              <Link to="/produtos">
                Descubra o Menu <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-sans font-semibold"
            >
              <Link to="/contacto">
                Visite-nos
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Por que escolher o Porto de Encontro?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="text-accent" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Café Premium</h3>
              <p className="font-sans text-muted-foreground">
                Grãos selecionados das melhores origens, torrados com perfeição para criar uma experiência única em cada chávena.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-accent" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Ambiente Acolhedor</h3>
              <p className="font-sans text-muted-foreground">
                Um espaço pensado para relaxar, trabalhar ou conviver. Design moderno que convida a ficar.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-accent" size={32} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">Comunidade</h3>
              <p className="font-sans text-muted-foreground">
                Mais que um café, somos um ponto de encontro. Venha fazer parte da nossa família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Visite-nos Hoje
          </h2>
          <p className="font-sans text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra porque somos o café preferido dos amantes de bom gosto. Estamos à sua espera.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold"
          >
            <Link to="/contacto">
              Ver Localização <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
