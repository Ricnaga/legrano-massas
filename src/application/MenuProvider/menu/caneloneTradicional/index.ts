import { useReducer } from 'react';
import { UseMenuProviderData } from '../../hooks/useMenuProvider';
import { menu_caneloneTradicional } from './items';

export enum CaneloneTradicionalActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type CaneloneTradicionalState = UseMenuProviderData;

type CaneloneTradicionalActions = {
  action: CaneloneTradicionalActionsType;
  payload: {
    id: string;
  };
};

const menuCaneloneTradicional = (
  state: CaneloneTradicionalState,
  { action, payload }: CaneloneTradicionalActions,
) => {
  switch (action) {
    case CaneloneTradicionalActionsType.ADD_TO_CART: {
      const { items } = state;

      const selectItem = items.map((item) =>
        item.id === payload.id ? { ...item, selected: true, amount: 1 } : item,
      );
      return { ...state, items: selectItem };
    }
    case CaneloneTradicionalActionsType.ADD_AMOUNT: {
      const { items } = state;
      const addMountToItem = items.map((item) =>
        item.id === payload.id ? { ...item, amount: item.amount + 1 } : item,
      );

      return { ...state, items: addMountToItem };
    }

    case CaneloneTradicionalActionsType.REMOVE_FROM_CART: {
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

export const useCaneloneTradicional = () => {
  const [caneloneTradicional_state, dispatch] = useReducer(
    menuCaneloneTradicional,
    menu_caneloneTradicional,
  );

  return {
    data: { caneloneTradicional_state },
    functions: { dispatchCaneloneTradicional: dispatch },
  };
};
