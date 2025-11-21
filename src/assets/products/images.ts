// Imagens de Café
import cafe from './cafe/cafe.jpeg';
import cafearo from './cafe/cafearo.jpeg';
import capucino from './cafe/capucino.jpeg';
import coldbrew from './cafe/coldbrew.jpeg';
import flat from './cafe/flat.jpeg';
import latte from './cafe/latte.jpeg';
import mocha from './cafe/mocha.jpeg';

// Imagens de Pastéis
import bolo from './pasteis/bolo.jpeg';
import cheese from './pasteis/cheese.jpeg';
import croissant from './pasteis/croissant.jpeg';
import muffim from './pasteis/muffim.jpeg';
import sande from './pasteis/sande.jpeg';
import tart from './pasteis/tart.jpeg';

// Imagens de Bebidas
import chai from './bebidas/chai.jpeg';
import matcha from './bebidas/matcha.jpeg';
import temporado from './bebidas/temporado.jpeg';

// Fallback image
import productsDefault from '../products-cafe.jpg';

// Função helper para obter imagem por nome do produto
export const getProductImage = (productName: string): string => {
  const imageMap: Record<string, string> = {
    // Cafés
    'espresso': cafe,
    'cappuccino': capucino,
    'latte': latte,
    'americano': cafearo,
    'macchiato': mocha,
    'flat-white': flat,
    'cold-brew': coldbrew,
    
    // Pastéis
    'croissant': croissant,
    'bolo': bolo,
    'torrada': tart,
    'tarte': tart,
    'cheesecake': cheese,
    'muffin': muffim,
    'sandes': sande,
    'sande-gourmet': sande,
    
    // Bebidas
    'chai': chai,
    'chai-latte': chai,
    'matcha': matcha,
    'matcha-latte': matcha,
    'temporada': temporado,
    'bebida-temporada': temporado,
  };
  
  return imageMap[productName] || productsDefault;
};

// Exportar todas as imagens organizadas
export const productImages = {
  cafe: {
    espresso: cafe,
    cappuccino: capucino,
    latte: latte,
    americano: cafearo,
    macchiato: mocha,
    flatWhite: flat,
    coldBrew: coldbrew,
  },
  pasteis: {
    croissant: croissant,
    bolo: bolo,
    torrada: tart,
    cheesecake: cheese,
    muffin: muffim,
    sandes: sande,
  },
  bebidas: {
    chai: chai,
    matcha: matcha,
    temporada: temporado,
  },
};