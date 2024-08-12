import { MenuReducerType } from '../hooks/useMenuProvider';

export const nhoque: MenuReducerType = {
  id: 'Nhoque',
  category: 'Nhoque',
  items: [
    {
      id: 'NhoqueBatata',
      name: 'Batata',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueBatataDoce',
      name: 'Batata doce',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueMandioca',
      name: 'Mandioca',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueMandioquinha',
      name: 'Mandioquinha',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueEspinafre',
      name: 'Espinafre',
      price: 36,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};

export const nhoqueRecheado: MenuReducerType = {
  id: 'NhoqueRecheado',
  category: 'Nhoque Recheado',
  items: [
    {
      id: 'NhoqueRecheadoBatataRecheadaDeMucarela',
      name: 'Batata recheada de muçarela',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueRecheadoBatataRecheadaDeMucarelaEPresunto',
      name: 'Batata recheada de muçarela e presunto',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueRecheadoMandiocaRecheadaDeCarneSecaQueijo',
      name: 'Mandioca recheada de carne seca/queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
    {
      id: 'NhoqueRecheadoMandioquinhaRecheadaDeQueijo',
      name: 'Mandioquinha recheada de queijo',
      price: 48,
      weight: '1kg',
      amount: 0,
      selected: false,
    },
  ],
};
