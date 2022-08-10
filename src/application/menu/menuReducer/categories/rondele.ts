import { MenuReducerData } from '..';

export const rondele: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Rondele Massa tradicional',
  items: [
    {
      id: Math.random().toString(),
      name: 'Presunto e queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: '2 queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Tomate seco c/ queijo',
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

export const rondeleEspinafre: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Rondele Massa de espinafre',
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
