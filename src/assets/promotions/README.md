# Pasta de Promoções

## Como adicionar a imagem da promoção de Natal:

1. **Guarda a imagem** com o nome `promo-natal.jpg` nesta pasta
2. **Atualiza os imports** nos seguintes ficheiros:

### src/pages/Home.tsx
```typescript
// Descomenta estas linhas:
import promoNatal from "@/assets/promotions/promo-natal.jpg";

// E ativa o popup:
<PromoPopup imageUrl={promoNatal} />
```

### src/pages/Promotions.tsx
```typescript
// Substitui o import temporário:
import promoNatal from "@/assets/promotions/promo-natal.jpg";
```

## Estrutura esperada:
```
src/assets/promotions/
├── promo-natal.jpg          ← Adiciona aqui a imagem da campanha de Natal
├── README.md                ← Este ficheiro
└── [futuras-promocoes].jpg  ← Adiciona mais promoções aqui
```

## Formato recomendado:
- **Formato**: JPG ou PNG
- **Tamanho**: Máximo 2MB
- **Dimensões**: Recomendado 1080x1350px (formato vertical para melhor visualização)
- **Qualidade**: 80-85% para web

## Adicionar novas promoções:

1. Adiciona a imagem nesta pasta
2. Importa no ficheiro `Promotions.tsx`
3. Adiciona um novo objeto no array `promotions`:

```typescript
{
  id: 2,
  title: "Nova Promoção",
  description: "Descrição da promoção...",
  image: novaPromoImage,
  validUntil: "DD/MM/YYYY",
  active: true,
  featured: false,
}
```