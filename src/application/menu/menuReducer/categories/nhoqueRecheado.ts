import { MenuReducerData } from '..';

export const nhoqueRecheado: MenuReducerData = {
  id: Math.random().toString(),
  category: 'Nhoque Recheado',
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
