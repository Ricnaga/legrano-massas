import { UseMenuProviderData } from '../../hooks/useMenuProvider';

export const menu_nhoqueRecheado: UseMenuProviderData = {
  id: Math.random().toString(),
  dough: 'Nhoque Recheado',
  items: [
    {
      id: Math.random().toString(),
      name: 'Batata recheada de muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Batata recheada de muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Mandioca recheada de carne seca/queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: Math.random().toString(),
      name: 'Mandioquinha recheada de queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
