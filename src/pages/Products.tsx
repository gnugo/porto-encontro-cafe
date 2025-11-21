import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productsImage from "@/assets/products-cafe.jpg";
import { getProductImage } from "@/assets/products/images";

const Products = () => {
  const products = {
    cafes: [
      { name: "Espresso", description: "O clássico italiano, intenso e encorpado", price: "1.50€", popular: true, image: "espresso" },
      { name: "Cappuccino", description: "Espresso com leite vaporizado e espuma cremosa", price: "2.50€", popular: true, image: "cappuccino" },
      { name: "Latte", description: "Espresso suave com leite e toque de arte latte", price: "2.80€", image: "latte" },
      { name: "Flat White", description: "Café australiano com microespuma aveludada", price: "2.90€", image: "flat-white" },
      { name: "Mocha", description: "Espresso com chocolate e leite vaporizado", price: "3.20€", image: "macchiato" },
      { name: "Cold Brew", description: "Café extraído a frio, suave e refrescante", price: "3.50€", image: "cold-brew" },
    ],
    pastelaria: [
      { name: "Croissant Artesanal", description: "Folhado estaladiço e amanteigado", price: "2.00€", popular: true, image: "croissant" },
      { name: "Bolo de Chocolate", description: "Bolo húmido com cobertura de ganache", price: "3.50€", image: "bolo" },
      { name: "Tarte de Limão", description: "Base estaladiça com creme de limão fresco", price: "3.80€", image: "tarte" },
      { name: "Cheesecake", description: "Cremoso com base de bolacha", price: "4.00€", image: "cheesecake" },
      { name: "Muffin do Dia", description: "Variedade diária de sabores", price: "2.50€", image: "muffin" },
      { name: "Sandes Gourmet", description: "Seleção de ingredientes frescos e artesanais", price: "5.50€", image: "sande-gourmet" },
    ],
    especiais: [
      { name: "Café Aromático Signature", description: "Blend exclusivo da casa", price: "3.00€", popular: true, image: "americano" },
      { name: "Chai Latte", description: "Especiarias aromáticas com leite vaporizado", price: "3.20€", image: "chai-latte" },
      { name: "Matcha Latte", description: "Chá verde japonês premium com leite", price: "3.50€", image: "matcha-latte" },
      { name: "Bebida de Temporada", description: "Criação sazonal exclusiva", price: "3.80€", image: "bebida-temporada" },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Os Nossos Produtos
          </h1>
          <p className="font-sans text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Descubra uma seleção cuidadosamente elaborada de cafés premium e delícias artesanais
          </p>
        </div>
      </section>

      {/* Cafés Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Cafés Especiais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.cafes.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
                    <img 
                      src={getProductImage(item.image)} 
                      alt={item.name}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = productsImage;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                      {item.popular && <Badge className="bg-accent text-accent-foreground">Popular</Badge>}
                    </div>
                    <p className="font-sans text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <p className="font-display text-2xl font-bold text-accent">{item.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pastelaria Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Pastelaria Artesanal
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.pastelaria.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
                    <img 
                      src={getProductImage(item.image)} 
                      alt={item.name}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = productsImage;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                      {item.popular && <Badge className="bg-accent text-accent-foreground">Popular</Badge>}
                    </div>
                    <p className="font-sans text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <p className="font-display text-2xl font-bold text-accent">{item.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Especiais Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Bebidas Especiais
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.especiais.map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-4">
                    <img 
                      src={getProductImage(item.image)} 
                      alt={item.name}
                      className="max-w-full max-h-full object-contain rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = productsImage;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                      {item.popular && <Badge className="bg-accent text-accent-foreground">Popular</Badge>}
                    </div>
                    <p className="font-sans text-muted-foreground mb-4 text-sm">{item.description}</p>
                    <p className="font-display text-2xl font-bold text-accent">{item.price}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-lg max-w-3xl mx-auto">
            Todos os nossos produtos são preparados com ingredientes de alta qualidade e cuidado artesanal. 
            Os preços estão sujeitos a alterações. Consulte-nos para opções especiais ou restrições alimentares.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;