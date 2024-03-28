import {
  Dispatch,
  PropsWithChildren,
  ProviderProps,
  SetStateAction,
  useReducer,
  useState,
} from 'react';
import { categories } from '../data';

export type MenuItems = {
  id: string;
  name: string;
  price: number | string;
  weight: string;
  amount: number;
  selected: boolean;
};

export type MenuReducerType = {
  id: string;
  category: string;
  items: Array<MenuItems>;
};

export enum MenuActionsType {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_AMOUNT = 'ADD_AMOUNT',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

export type MenuState = Array<MenuReducerType>;

type MenuActions = {
  action: MenuActionsType;
  payload: {
    categoryId: string | null;
    itemId: string | null;
  };
};

const STORAGE_KEY = String(process.env.NEXT_PUBLIC_STORAGE_KEY);

const saveCartItems = (selectedCartItems: Array<MenuReducerType>) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCartItems));

const getCartItems = (): Array<MenuReducerType> | null => {
  const localCartItems = localStorage.getItem(STORAGE_KEY);
  return localCartItems ? JSON.parse(localCartItems) : null;
};

const updateCartItems = (updatedCartItems: Array<MenuReducerType>) => {
  localStorage.removeItem(STORAGE_KEY);
  saveCartItems(updatedCartItems);
};

const clearCartItems = () => localStorage.clear();

const reducer = (state: MenuState, { action, payload }: MenuActions) => {
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

const initialState = getCartItems() || categories;

export type MenuContextProps = {
  state: MenuState;
  dispatch: Dispatch<MenuActions>;
  categoryId: string;
  setCategoryId: Dispatch<SetStateAction<string>>;
  filteredCategories: MenuItems[];
};

export const useMenuProvider = (baseProps: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [categoryId, setCategoryId] = useState<string>(initialState[0].id);

  const filteredCategories: Array<MenuItems> =
    state
      .filter((category) => Object.is(category.id, categoryId))
      .at(0)
      ?.items.map((item) => ({
        ...item,
        price:
          typeof item.price === 'number'
            ? new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.price)
            : item.price,
      })) || [];

  const providerProps: ProviderProps<MenuContextProps> = {
    ...baseProps,
    value: {
      state,
      categoryId,
      dispatch,
      setCategoryId,
      filteredCategories,
    },
  };

  return { providerProps };
};
