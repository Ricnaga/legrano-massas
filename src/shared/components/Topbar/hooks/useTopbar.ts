import { useState } from 'react';
import { useMenuContext } from '../../../../application/MenuProvider/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/MenuProvider/menu';

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

  const addAmountToCartItem = (categoryId: string, doughId: string) =>
    dispatchMenu({
      action: MenuActionsType.ADD_AMOUNT,
      payload: { categoryId, doughId },
    });

  const removeAmountToCartItem = (categoryId: string, doughId: string) =>
    dispatchMenu({
      action: MenuActionsType.REMOVE_FROM_CART,
      payload: { categoryId, doughId },
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
