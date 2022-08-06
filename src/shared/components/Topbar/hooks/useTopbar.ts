import { useState } from 'react';
import { useMenuContext } from '../../../../application/MenuProvider/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/MenuProvider/menuReducer';

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

  const addAmountToCartItem = (categoryId: string, itemId: string) =>
    dispatchMenu({
      action: MenuActionsType.ADD_AMOUNT,
      payload: { categoryId, itemId },
    });

  const removeAmountToCartItem = (categoryId: string, itemId: string) =>
    dispatchMenu({
      action: MenuActionsType.REMOVE_FROM_CART,
      payload: { categoryId, itemId },
    });

  return {
    data: { cartItemsLength, addedItemsToCart, isOpenDrawer },
    functions: {
      openDrawer,
      closeDrawer,
      addAmountToCartItem,
      removeAmountToCartItem,
    },
  };
};
