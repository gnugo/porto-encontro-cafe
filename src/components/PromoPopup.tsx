import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface PromoPopupProps {
  imageUrl: string;
  onClose?: () => void;
}

const PromoPopup = ({ imageUrl, onClose }: PromoPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o popup já foi mostrado nesta sessão
    const hasSeenPopup = sessionStorage.getItem("hasSeenPromoPopup");
    
    if (!hasSeenPopup) {
      // Mostra o popup após 1 segundo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenPromoPopup", "true");
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 p-4 overflow-y-auto"
      onClick={handleClose}
    >
      <div 
        className="relative max-w-3xl w-full my-8 animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl">
          <img 
            src={imageUrl} 
            alt="Promoção Porto de Encontro" 
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>

        {/* Close hint */}
        <p className="text-center text-white/75 text-sm mt-4">
          Clique fora da imagem ou no X para fechar
        </p>
      </div>
    </div>
  );
};

export default PromoPopup;