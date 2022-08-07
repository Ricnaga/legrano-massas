import { useCallback, useState } from 'react';
import { useMenuContext } from '../../../../application/menu/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/menu/menuReducer';

export const useTopbar = () => {
  const {
    data: { menuState },
    funtions: { dispatchMenu },
  } = useMenuContext();

  const [isOpenDrawer, setDrawerOpened] = useState<boolean>(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const addedItemsToCart = menuState
    .map((cartFilteredItems) => ({
      ...cartFilteredItems,
      items: cartFilteredItems.items.filter(({ selected }) => selected),
    }))
    .filter((selectedCart) => !!selectedCart.items.length);

  const cartItemsLength = addedItemsToCart.reduce(
    (accumulator, element) => accumulator + element.items.length,
    0,
  );

  const addAmountToCartItem = useCallback(
    (categoryId: string, itemId: string) =>
      dispatchMenu({
        action: MenuActionsType.ADD_AMOUNT,
        payload: { categoryId, itemId },
      }),
    [],
  );

  const removeAmountToCartItem = useCallback(
    (categoryId: string, itemId: string) =>
      dispatchMenu({
        action: MenuActionsType.REMOVE_FROM_CART,
        payload: { categoryId, itemId },
      }),
    [],
  );

  const clearItemsFromCart = useCallback(
    () =>
      dispatchMenu({
        action: MenuActionsType.CLEAR_CART,
        payload: { categoryId: null, itemId: null },
      }),
    [],
  );

  return {
    data: { cartItemsLength, addedItemsToCart, isOpenDrawer },
    functions: {
      openDrawer,
      closeDrawer,
      addAmountToCartItem,
      removeAmountToCartItem,
      clearItemsFromCart,
    },
  };
};
