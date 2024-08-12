import { MenuReducerType } from '../hooks/useMenuProvider';

export const ravioli: MenuReducerType = {
  id: 'RavioliMassaTradicional',
  category: 'Ravioli Massa tradicional',
  items: [
    {
      id: 'RavioliMassaTradicionalAboboraComParmesao',
      name: 'Abóbora com parmesão',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RavioliMassaTradicionalPresuntoEQueijo',
      name: 'presunto e queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RavioliMassaTradicionalTomateSecoComQueijo',
      name: 'Tomate seco com queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'RavioliMassaTradicionalQueijo',
      name: 'Queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const ravioliEspinafre: MenuReducerType = {
  id: 'RavioliMassaDeEspinafre',
  category: 'Ravioli Massa de espinafre',
  items: [
    {
      id: 'RavioliMassaDeEspinafreDoisQueijos',
      name: 'Dois queijos',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
