import { useMemo } from 'react';

export const useCartProvider = () => {
  const menu_items = useMemo(
    () => [
      {
        dough: 'Nhoque',
        items: [
          {
            name: 'Batata',
            price: 36,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Batata doce',
            price: 36,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Mandioca',
            price: 36,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Mandioquinha',
            price: 36,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Espinafre',
            price: 36,
            weight: '1kg',
            amount: 0,
          },
        ],
      },
      {
        dough: 'Nhoque Recheado',
        items: [
          {
            name: 'Batata recheada de muçarela',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Batata recheada de muçarela e presunto',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Mandioca recheada de carne seca/queijo',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Mandioquinha recheada de queijo',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
        ],
      },
      {
        dough: 'Canelone de espinafre',
        items: [
          {
            name: 'Muçarela e parmesão',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
        ],
      },
      {
        dough: 'Canelone Tradicional',
        items: [
          {
            name: 'Presunto e muçarela',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Tomate seco e muçarela',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Muçarela e parmesão',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
          {
            name: 'Espinafre com ricota',
            price: 48,
            weight: '1kg',
            amount: 0,
          },
        ],
      },
    ],
    [],
  );
  return {
    data: {
      menu_items,
    },
  };
};
