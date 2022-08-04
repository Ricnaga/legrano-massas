import { UseMenuProviderData } from '../../hooks/useMenuProvider';

export const menu_caneloneEspinafre: UseMenuProviderData = {
  id: Math.random().toString(),
  dough: 'Canelone de espinafre',
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
