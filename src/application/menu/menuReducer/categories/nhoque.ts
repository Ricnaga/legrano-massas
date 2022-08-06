import { MenuReducerData } from '..';

export const nhoque: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Nhoque',
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
