import { MenuReducerData } from '..';

export const ravioli: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Ravioli Massa tradicional',
  items: [
    {
      id: Math.random().toString(),
      name: 'Abóbora com parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'presunto e queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Tomate seco com queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const ravioliEspinafre: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Ravioli Massa de espinafre',
  items: [
    {
      id: Math.random().toString(),
      name: 'Dois queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
