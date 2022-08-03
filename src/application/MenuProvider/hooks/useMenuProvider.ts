type UseMenuProviderItems = Record<
  'items',
  Array<{
    id: string;
    name: string;
    price: number;
    weight: string;
    amount: number;
    selected: boolean;
  }>
>;

export type UseMenuProviderData = {
  id: string;
  dough: string;
} & UseMenuProviderItems;

export const useMenuProvider = () => {
  const menu_nhoque = {
    id: Math.random().toString(),
    dough: 'Nhoque',
    items: [
      {
        id: Math.random().toString(),
        name: 'Batata',
        price: 36,
        weight: '1kg',
        amount: 0,
        selected: false,
      },
      {
        id: Math.random().toString(),
        name: 'Batata doce',
        price: 36,
        weight: '1kg',
        amount: 0,
        selected: false,
      },
      {
        id: Math.random().toString(),
        name: 'Mandioca',
        price: 36,
        weight: '1kg',
        amount: 0,
        selected: false,
      },
      {
        id: Math.random().toString(),
        name: 'Mandioquinha',
        price: 36,
        weight: '1kg',
        amount: 0,
        selected: false,
      },
      {
        id: Math.random().toString(),
        name: 'Espinafre',
        price: 36,
        weight: '1kg',
        amount: 0,
        selected: false,
      },
    ],
  };
  const menu_nhoqueRecheado = {
    id: Math.random().toString(),
    dough: 'Nhoque Recheado',
    items: [
      {
        id: Math.random().toString(),
        name: 'Batata recheada de muçarela',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Batata recheada de muçarela e presunto',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Mandioca recheada de carne seca/queijo',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Mandioquinha recheada de queijo',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
    ],
  };
  const menu_caneloneEspinafre = {
    id: Math.random().toString(),
    dough: 'Canelone de espinafre',
    items: [
      {
        id: Math.random().toString(),
        name: 'Muçarela e parmesão',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
    ],
  };
  const menu_caneloneTradicional = {
    id: Math.random().toString(),
    dough: 'Canelone Tradicional',
    items: [
      {
        id: Math.random().toString(),
        name: 'Presunto e muçarela',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Tomate seco e muçarela',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Muçarela e parmesão',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
      {
        id: Math.random().toString(),
        name: 'Espinafre com ricota',
        price: 48,
        weight: '1kg',
        amount: 0,
      },
    ],
  };

  return {
    data: {
      menu_nhoque,
      menu_nhoqueRecheado,
      menu_caneloneEspinafre,
      menu_caneloneTradicional,
    },
  };
};
