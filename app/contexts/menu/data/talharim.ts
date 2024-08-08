import { MenuReducerType } from '../hooks/useMenuProvider';

export const talharim: MenuReducerType = {
  id: Math.random().toString(),
  category: 'Talharim',
  items: [
    {
      id: Math.random().toString(),
      name: 'Tradicional',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Beterraba',
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
