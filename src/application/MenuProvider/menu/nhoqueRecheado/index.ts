import { useReducer } from 'react';
import { UseMenuProviderData } from '../../hooks/useMenuProvider';
import { menu_nhoqueRecheado } from './items';

export enum NhoqueRecheadoActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type NhoqueRecheadoState = UseMenuProviderData;

type NhoqueRecheadoActions = {
  action: NhoqueRecheadoActionsType;
  payload: {
    id: string;
  };
};

const menuNhoqueRecheado = (
  state: NhoqueRecheadoState,
  { action, payload }: NhoqueRecheadoActions,
) => {
  switch (action) {
    case NhoqueRecheadoActionsType.ADD_TO_CART: {
      const { items } = state;

      const selectItem = items.map((item) =>
        item.id === payload.id ? { ...item, selected: true, amount: 1 } : item,
      );
      return { ...state, items: selectItem };
    }
    case NhoqueRecheadoActionsType.ADD_AMOUNT: {
      const { items } = state;
      const addMountToItem = items.map((item) =>
        item.id === payload.id ? { ...item, amount: item.amount + 1 } : item,
      );

      return { ...state, items: addMountToItem };
    }

    case NhoqueRecheadoActionsType.REMOVE_FROM_CART: {
      const { items } = state;
      const removeAmountToItem = items.map((item) => {
        if (item.id === payload.id && item.amount - 1 > 0) {
          return { ...item, amount: item.amount - 1 };
        }
        if (item.id === payload.id && item.amount - 1 === 0) {
          return { ...item, amount: 0, selected: false };
        }

        return item;
      });

      return { ...state, items: removeAmountToItem };
    }
    default:
      return state;
  }
};

export const useNhoqueRecheado = () => {
  const [nhoqueRecheado_state, dispatch] = useReducer(
    menuNhoqueRecheado,
    menu_nhoqueRecheado,
  );

  return {
    data: { nhoqueRecheado_state },
    functions: { dispatchNhoqueRecheado: dispatch },
  };
};
