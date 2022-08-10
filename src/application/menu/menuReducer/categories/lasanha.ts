import { MenuReducerData } from '..';

export const lasanha: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Lasanha',
  items: [
    {
      id: Math.random().toString(),
      name: 'Molho sugo c/ muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Molho bolonhesa c/ muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Molho branco c/ 4 queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
