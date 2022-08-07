import { useReducer } from 'react';
import { categories } from './categories';
import {
  clearCartItems,
  getCartItems,
  saveCartItems,
  updateCartItems,
} from './storage/localStorage';

export type MenuReducerData = {
  id: string;
  category: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    weight: string;
    amount: number;
    selected: boolean;
  }>;
};

export enum MenuActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export type MenuState = Array<MenuReducerData>;
type MenuActions = {
  action: MenuActionsType;
  payload: {
    categoryId: string | null;
    itemId: string | null;
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
                item.id === payload.itemId
                  ? { ...item, selected: true, amount: 1 }
                  : item,
              ),
            }
          : selectedState,
      );
      saveCartItems(addedItemToCart);
      return addedItemToCart;
    }
    case MenuActionsType.ADD_AMOUNT: {
      const addedAmountToItems = state.map((selectedState) =>
        selectedState.id === payload.categoryId
          ? {
              ...selectedState,
              items: selectedState.items.map((item) =>
                item.id === payload.itemId
                  ? { ...item, amount: item.amount + 1 }
                  : item,
              ),
            }
          : selectedState,
      );
      updateCartItems(addedAmountToItems);
      return addedAmountToItems;
    }
    case MenuActionsType.REMOVE_FROM_CART: {
      const filteredCartItems = state.map((selectedState) =>
        selectedState.id === payload.categoryId
          ? {
              ...selectedState,
              items: selectedState.items.map((item) => {
                if (item.id === payload.itemId && item.amount - 1 > 0) {
                  return { ...item, amount: item.amount - 1 };
                }

                if (item.id === payload.itemId && item.amount - 1 === 0) {
                  return { ...item, amount: 0, selected: false };
                }

                return item;
              }),
            }
          : selectedState,
      );
      updateCartItems(filteredCartItems);
      return filteredCartItems;
    }
    case MenuActionsType.CLEAR_CART:
      clearCartItems();
      return categories;
    default:
      return state;
  }
};

export const menuReducer = () => {
  const STORED_CATEGORIES = getCartItems() ?? categories;
  const [menuState, dispatch] = useReducer(openMenu, STORED_CATEGORIES);

  return {
    data: {
      menuState,
    },
    funtions: {
      dispatchMenu: dispatch,
    },
  };
};
