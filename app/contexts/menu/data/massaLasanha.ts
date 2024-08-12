import { MenuReducerType } from '../hooks/useMenuProvider';

export const massaLasanha: MenuReducerType = {
  id: 'MassaLasanhaPreCozida',
  category: 'Massa lasanha pré-cozida',
  items: [
    {
      id: 'MassaLasanhaPreCozidaTradicional',
      name: 'Tradicional',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'MassaLasanhaPreCozidaEspinafre',
      name: 'Espinafre',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
