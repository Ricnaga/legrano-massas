import { useReducer } from 'react';
import { caneloneEspinafre } from './categories/caneloneEspinafre';
import { caneloneTradicional } from './categories/caneloneTradicional';
import { nhoque } from './categories/nhoque';
import { nhoqueRecheado } from './categories/nhoqueRecheado';

type MenuReducerItems = Record<
  'items',
  Array<{
    id: string;
    name: string;
    price: number;
    weight: string;
    amount: number;
    selected: boolean;
  }>
>;

export type MenuReducerData = {
  id: string;
  dough: string;
} & MenuReducerItems;

export enum MenuActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type MenuState = Array<MenuReducerData>;
type MenuActions = {
  action: MenuActionsType;
  payload: {
    categoryId: string;
    doughId: string;
  };
};

const openMenu = (state: MenuState, { action, payload }: MenuActions) => {
  switch (action) {
    case MenuActionsType.ADD_TO_CART: {
      const addedItemToCart = state.map((selectedState) =>
        selectedState.id === payload.categoryId
          ? {
              ...selectedState,
              items: selectedState.items.map((item) =>
                item.id === payload.doughId
                  ? { ...item, selected: true, amount: 1 }
                  : item,
              ),
            }
          : selectedState,
      );
      return addedItemToCart;
    }
    case MenuActionsType.ADD_AMOUNT: {
      const addedAmountToItems = state.map((selectedState) =>
        selectedState.id === payload.categoryId
          ? {
              ...selectedState,
              items: selectedState.items.map((item) =>
                item.id === payload.doughId
                  ? { ...item, amount: item.amount + 1 }
                  : item,
              ),
            }
          : selectedState,
      );
      return addedAmountToItems;
    }
    case MenuActionsType.REMOVE_FROM_CART: {
      const filteredCartItems = state.map((selectedState) =>
        selectedState.id === payload.categoryId
          ? {
              ...selectedState,
              items: selectedState.items.map((item) => {
                if (item.id === payload.doughId && item.amount - 1 > 0) {
                  return { ...item, amount: item.amount - 1 };
                }

                if (item.id === payload.doughId && item.amount - 1 === 0) {
                  return { ...item, amount: 0, selected: false };
                }

                return item;
              }),
            }
          : selectedState,
      );
      return filteredCartItems;
    }
    default:
      return state;
  }
};

export const menuReducer = () => {
  const MENU_ITEMS = [
    nhoque,
    nhoqueRecheado,
    caneloneTradicional,
    caneloneEspinafre,
  ];
  const [menuState, dispatch] = useReducer(openMenu, MENU_ITEMS);

  return {
    data: {
      menuState,
    },
    funtions: {
      dispatchMenu: dispatch,
    },
  };
};
