// Imagens de Café
export { default as espresso } from './cafe/cafe.jpeg';
export { default as cappuccino } from './cafe/capucino.jpeg';
export { default as latte } from './cafe/latte.jpeg';
export { default as americano } from './cafe/cafearo.jpeg';
export { default as macchiato } from './cafe/mocha.jpeg';
export { default as flatWhite } from './cafe/flat.jpeg';
export { default as coldBrew } from './cafe/coldbrew.jpeg';

// Imagens de Pastéis
export { default as croissant } from './pasteis/croissant.jpeg';
export { default as bolo } from './pasteis/bolo.jpeg';
export { default as torrada } from './pasteis/tart.jpeg';
export { default as cheesecake } from './pasteis/cheese.jpeg';
export { default as muffin } from './pasteis/muffim.jpeg';
export { default as sandes } from './pasteis/sande.jpeg';

// Imagens de Bebidas
export { default as chai } from './bebidas/chai.jpeg';
export { default as matcha } from './bebidas/matcha.jpeg';
export { default as temporada } from './bebidas/temporado.jpeg';

// Função helper para obter imagem por nome do produto
export const getProductImage = (productName: string): string => {
  const imageMap: Record<string, string> = {
    'espresso': espresso,
    'cappuccino': cappuccino,
    'latte': latte,
    'americano': americano,
    'macchiato': macchiato,
    'flat-white': flatWhite,
    'cold-brew': coldBrew,
    'croissant': croissant,
    'bolo': bolo,
    'torrada': torrada,
    'cheesecake': cheesecake,
    'muffin': muffin,
    'sandes': sandes,
    'chai': chai,
    'matcha': matcha,
    'temporada': temporada,
  };
  
  return imageMap[productName] || '/src/assets/products-cafe.jpg'; // fallback image
};

// Exportar todas as imagens como um objeto
export const productImages = {
  cafe: {
    espresso,
    cappuccino,
    latte,
    americano,
    macchiato,
    flatWhite,
    coldBrew,
  },
  pasteis: {
    croissant,
    bolo,
    torrada,
    cheesecake,
    muffin,
    sandes,
  },
  bebidas: {
    chai,
    matcha,
    temporada,
  },
};