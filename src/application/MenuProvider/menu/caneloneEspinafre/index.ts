import { useReducer } from 'react';
import { UseMenuProviderData } from '../../hooks/useMenuProvider';
import { menu_caneloneEspinafre } from './items';

export enum CaneloneEspinafreActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type CaneloneEspinafreState = UseMenuProviderData;

type CaneloneEspinafreActions = {
  action: CaneloneEspinafreActionsType;
  payload: {
    id: string;
  };
};

const menuCaneloneEspinafre = (
  state: CaneloneEspinafreState,
  { action, payload }: CaneloneEspinafreActions,
) => {
  switch (action) {
    case CaneloneEspinafreActionsType.ADD_TO_CART: {
      const { items } = state;

      const selectItem = items.map((item) =>
        item.id === payload.id ? { ...item, selected: true, amount: 1 } : item,
      );
      return { ...state, items: selectItem };
    }
    case CaneloneEspinafreActionsType.ADD_AMOUNT: {
      const { items } = state;
      const addMountToItem = items.map((item) =>
        item.id === payload.id ? { ...item, amount: item.amount + 1 } : item,
      );

      return { ...state, items: addMountToItem };
    }

    case CaneloneEspinafreActionsType.REMOVE_FROM_CART: {
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

export const useCaneloneEspinafre = () => {
  const [caneloneEspinafre_state, dispatch] = useReducer(
    menuCaneloneEspinafre,
    menu_caneloneEspinafre,
  );

  return {
    data: { caneloneEspinafre_state },
    functions: { dispatchCaneloneEspinafre: dispatch },
  };
};
