import { MenuReducerType } from '../hooks/useMenuProvider';

export const caneloneTradicional: MenuReducerType = {
  id: 'CaneloneTradicional',
  category: 'Canelone Tradicional',
  items: [
    {
      id: 'CaneloneTradicionalPresuntoMucarela',
      name: 'Presunto e muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'CaneloneTradicionalTomateSecoEMucarela',
      name: 'Tomate seco e muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'CaneloneTradicionalMucarelaParmesao',
      name: 'Muçarela e parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'CaneloneTradicionalEspinafreComRicota',
      name: 'Espinafre com ricota',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const caneloneEspinafre: MenuReducerType = {
  id: 'CaneloneSpinafre',
  category: 'Canelone de espinafre',
  items: [
    {
      id: 'CaneloneSpinafreMucarelaParmesao',
      name: 'Muçarela e parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
