# Sistema de Imagens dos Produtos

## Estrutura das Pastas

```
src/assets/products/
├── cafe/           # Imagens de cafés
├── pasteis/        # Imagens de pastéis e doces
├── bebidas/        # Imagens de bebidas
├── index.ts        # Exportações centralizadas
└── README.md       # Este ficheiro
```

## Como Adicionar Novas Imagens

1. **Coloca a imagem na pasta correta** (cafe/, pasteis/, ou bebidas/)
2. **Adiciona a exportação no index.ts**
3. **Usa a imagem no componente**

## Exemplo de Uso

```tsx
import { espresso, cappuccino, getProductImage } from '@/assets/products';

// Uso direto
<img src={espresso} alt="Espresso" />

// Uso com função helper
<img src={getProductImage('cappuccino')} alt="Cappuccino" />

// Uso do objeto organizado
import { productImages } from '@/assets/products';
<img src={productImages.cafe.latte} alt="Latte" />
```

## Convenções de Nomes

- **Ficheiros**: usar kebab-case (ex: `pastel-nata.jpg`)
- **Exportações**: usar camelCase (ex: `pastelNata`)
- **Formatos**: preferir JPG para fotos, PNG para logos/ícones

## Otimização

- Redimensionar imagens para máximo 800x600px
- Comprimir para web (qualidade 80-85%)
- Usar WebP quando possível para melhor performance