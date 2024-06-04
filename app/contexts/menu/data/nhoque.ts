import { MenuReducerType } from '../hooks/useMenuProvider';

export const nhoque: MenuReducerType = {
  id: (1).toString(),
  category: 'Nhoque',
  items: [
    {
      id: (1.1).toString(),
      name: 'Batata',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (1.2).toString(),
      name: 'Batata doce',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (1.3).toString(),
      name: 'Mandioca',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (1.4).toString(),
      name: 'Mandioquinha',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (1.5).toString(),
      name: 'Espinafre',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const nhoqueRecheado: MenuReducerType = {
  id: (2).toString(),
  category: 'Nhoque Recheado',
  items: [
    {
      id: (2.1).toString(),
      name: 'Batata recheada de muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (2.2).toString(),
      name: 'Batata recheada de muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (2.3).toString(),
      name: 'Mandioca recheada de carne seca/queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: (2.4).toString(),
      name: 'Mandioquinha recheada de queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
