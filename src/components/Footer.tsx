import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Porto de Encontro" className="h-44 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 font-sans">
              O seu café urbano chique onde tradição e modernidade se encontram.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li><a href="/sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="/missao" className="hover:text-accent transition-colors">Missão</a></li>
              <li><a href="/produtos" className="hover:text-accent transition-colors">Produtos</a></li>
              <li><a href="/contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@portodeencontro.pt</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <span>Rua das Flores, n.º 15, 4000-010 Porto</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-75 font-sans">
          <p>&copy; {new Date().getFullYear()} Porto de Encontro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
