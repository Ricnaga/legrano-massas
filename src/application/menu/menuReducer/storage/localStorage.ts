import { STORAGE_KEY } from '@application/config';
import { MenuReducerData } from '..';

export const saveCartItems = (selectedCartItems: Array<MenuReducerData>) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedCartItems));

export const getCartItems = (): Array<MenuReducerData> | null => {
  const localCartItems = localStorage.getItem(STORAGE_KEY);
  return localCartItems ? JSON.parse(localCartItems) : null;
};

export const updateCartItems = (updatedCartItems: Array<MenuReducerData>) => {
  localStorage.removeItem(STORAGE_KEY);
  saveCartItems(updatedCartItems);
};

export const clearCartItems = () => localStorage.clear();
