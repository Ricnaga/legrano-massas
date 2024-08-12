import { MenuReducerType } from '../hooks/useMenuProvider';

export const talharim: MenuReducerType = {
  id: 'Talharim',
  category: 'Talharim',
  items: [
    {
      id: 'TalharimTradicional',
      name: 'Tradicional',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'TalharimBeterraba',
      name: 'Beterraba',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'TalharimEspinafre',
      name: 'Espinafre',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
