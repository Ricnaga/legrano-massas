import { MenuReducerType } from '../hooks/useMenuProvider';

export const rondele: MenuReducerType = {
  id: 'RondeleMassaTradicional',
  category: 'Rondele Massa tradicional',
  items: [
    {
      id: 'RondeleMassaTradicionalPresuntoEQueijo',
      name: 'Presunto e queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RondeleMassaTradicional2Queijos',
      name: '2 queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RondeleMassaTradicionalTomateSecoQueijo',
      name: 'Tomate seco c/ queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RondeleMassaTradicionalEspinafreComRicota',
      name: 'Espinafre com ricota',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const rondeleEspinafre: MenuReducerType = {
  id: 'RondeleMassaDeEspinafre',
  category: 'Rondele Massa de espinafre',
  items: [
    {
      id: 'RondeleMassaDeEspinafreDoisQueijos',
      name: 'Dois queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
