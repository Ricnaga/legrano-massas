import { useReducer } from 'react';
import { UseMenuProviderData } from '../../hooks/useMenuProvider';
import { menu_nhoque } from './items';

export enum NhoqueActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type NhoqueState = UseMenuProviderData;

type NhoqueActions = {
  action: NhoqueActionsType;
  payload: {
    id: string;
  };
};

const menuNhoque = (state: NhoqueState, { action, payload }: NhoqueActions) => {
  switch (action) {
    case NhoqueActionsType.ADD_TO_CART: {
      const { items } = state;

      const selectItem = items.map((item) =>
        item.id === payload.id ? { ...item, selected: true, amount: 1 } : item,
      );
      return { ...state, items: selectItem };
    }
    case NhoqueActionsType.ADD_AMOUNT: {
      const { items } = state;
      const addMountToItem = items.map((item) =>
        item.id === payload.id ? { ...item, amount: item.amount + 1 } : item,
      );

      return { ...state, items: addMountToItem };
    }

    case NhoqueActionsType.REMOVE_FROM_CART: {
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

export const useNhoque = () => {
  const [nhoque_state, dispatch] = useReducer(menuNhoque, menu_nhoque);

  return {
    data: { nhoque_state },
    functions: { dispatchNhoque: dispatch },
  };
};
