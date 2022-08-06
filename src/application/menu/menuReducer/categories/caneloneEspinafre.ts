import { MenuReducerData } from '..';

export const caneloneEspinafre: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Canelone de espinafre',
  items: [
    {
      id: Math.random().toString(),
      name: 'Muçarela e parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
