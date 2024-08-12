import { MenuReducerType } from '../hooks/useMenuProvider';

export const lasanha: MenuReducerType = {
  id: 'Lasanha',
  category: 'Lasanha',
  items: [
    {
      id: 'LasanhaMolhoSugoMmucarelaEPresunto',
      name: 'Molho sugo c/ muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'LasanhaMolhoBolonhesaMucarelaEPresunto',
      name: 'Molho bolonhesa c/ muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'LasanhaMolhoBranco4Queijos',
      name: 'Molho branco c/ 4 queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
