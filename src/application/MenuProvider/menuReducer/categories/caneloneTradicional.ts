import { MenuReducerData } from '..';

export const caneloneTradicional: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Canelone Tradicional',
  items: [
    {
      id: Math.random().toString(),
      name: 'Presunto e muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Tomate seco e muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Muçarela e parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Espinafre com ricota',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
