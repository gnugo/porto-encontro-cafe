import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Social */}
          <div className="text-center md:text-left">
            <img src={logo} alt="Porto de Encontro" className="h-48 w-auto mb-6 brightness-0 invert mx-auto md:mx-0" />
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div>info@portodeencontro.pt</div>
                  <div className="opacity-75">reservas@portodeencontro.pt</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div>+351 912 345 678</div>
                  <div className="opacity-75">Segunda a Sábado</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div>Rua das Flores, n.º 15</div>
                  <div className="opacity-75">4000-010 Porto, Portugal</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
              <Clock size={20} className="text-accent" />
              Horário
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex justify-between items-center">
                <span>Segunda - Sexta</span>
                <span className="text-accent font-medium">8h - 20h</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sábado</span>
                <span className="text-accent font-medium">9h - 20h</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Domingo</span>
                <span className="text-accent font-medium">10h - 18h</span>
              </li>
              <li className="mt-4 p-3 bg-primary-foreground/10 rounded-lg">
                <div className="text-xs opacity-90">
                  <strong>Nota:</strong> Horários podem variar em feriados. Consulte as nossas redes sociais para atualizações.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="space-y-4">
            <div className="text-sm opacity-75 font-sans">
              <p>&copy; {new Date().getFullYear()} Porto de Encontro. Todos os direitos reservados.</p>
            </div>
            <div className="text-sm opacity-75 font-sans max-w-4xl mx-auto">
              <p>Todos os nossos produtos são preparados com ingredientes de alta qualidade e cuidado artesanal. Os preços estão sujeitos a alterações. Consulte-nos para opções especiais ou restrições alimentares.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;