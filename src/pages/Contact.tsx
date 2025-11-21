import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import cafeImage from "@/assets/products/cafe/cafe.jpeg";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cafeImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 text-primary-foreground">
            Contacto & Localização
          </h1>
          <p className="font-sans text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Venha visitar-nos e descubra o seu novo lugar favorito no Porto
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Endereço</h3>
              <p className="font-sans text-muted-foreground">
                Rua das Flores, n.º 15<br />
                4000-010 Porto<br />
                Portugal
              </p>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Telefone</h3>
              <p className="font-sans text-muted-foreground">
                +351 912 345 678<br />
                Segunda a Sábado<br />
                8h00 - 20h00
              </p>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="font-sans text-muted-foreground">
                info@portodeencontro.pt<br />
                reservas@portodeencontro.pt<br />
                Resposta em 24h
              </p>
            </Card>

            <Card className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-accent" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Horário</h3>
              <p className="font-sans text-muted-foreground">
                Seg-Sex: 8h - 20h<br />
                Sábado: 9h - 20h<br />
                Domingo: 10h - 18h
              </p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="max-w-6xl mx-auto">
            <Card className="p-8 shadow-[var(--shadow-elegant)]">
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground text-center">
                Como Chegar
              </h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.494287394863!2d-8.614776!3d41.145645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464e30d20bf5f%3A0x4c1b6c7e8a7b3c8f!2sRua%20das%20Flores%2C%20Porto!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Porto de Encontro"
                />
              </div>
              <div className="mt-6 space-y-4 font-sans text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Transportes Públicos</h3>
                  <p>Metro: Estação São Bento (Linha D) - 5 min a pé</p>
                  <p>Autocarros: Várias linhas param na Praça da Liberdade</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Estacionamento</h3>
                  <p>Parque de estacionamento público a 2 minutos a pé</p>
                  <p>Lugares de estacionamento na rua (zona azul)</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Estamos à sua espera!
          </h2>
          <p className="font-sans text-lg max-w-2xl mx-auto opacity-90">
            Venha experimentar o melhor café do Porto num ambiente único e acolhedor. 
            Seguimos todos os protocolos de higiene e segurança para garantir a sua tranquilidade.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
