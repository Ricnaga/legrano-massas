import { useCallback, useMemo, useState } from 'react';
import { useMenuContext } from '../../../../application/menu/hooks/useMenuContext';
import { MenuActionsType } from '../../../../application/menu/menuReducer';
import { getBRL } from '../../../utils/number';

export const useTopbar = () => {
  const {
    data: { menuState },
    functions: { dispatchMenu },
  } = useMenuContext();

  const [isOpenDrawer, setDrawerOpened] = useState<boolean>(false);
  const openDrawer = () => setDrawerOpened(true);
  const closeDrawer = () => setDrawerOpened(false);

  const addedItemsToCart = useMemo(
    () =>
      menuState
        .map((cartFilteredItems) => ({
          ...cartFilteredItems,
          items: cartFilteredItems.items.filter(({ selected }) => selected),
        }))
        .filter((selectedCart) => !!selectedCart.items.length),
    [menuState],
  );

  const cartItemsLength = useMemo(
    () =>
      addedItemsToCart.reduce(
        (accumulator, element) => accumulator + element.items.length,
        0,
      ),
    [addedItemsToCart],
  );

  const totalPrice = useMemo(
    () =>
      getBRL(
        addedItemsToCart.reduce((accumulator, element) => {
          const accumulatorItemsPrice = element.items.reduce(
            (accumulator, { amount, price }) => accumulator + amount * price,
            0,
          );
          return accumulator + accumulatorItemsPrice;
        }, 0),
      ),
    [addedItemsToCart],
  );

  const whatsAppText = useMemo(
    () => `${`
  Olá tudo bem %3F,
  %0A Quero encomendar algumas coisas que vi no site Legrano:%0A
  ${addedItemsToCart.map(
    ({ category, items }) => `
    %0A${category.toUpperCase()}%0A
  ${items.map(
    ({ amount, name }) => `(${amount}x - ${name})%0A
  `,
  )}%0A
`,
  )}`.replace(/,/g, '')}
  %0ATotal: ${totalPrice}`,
    [addedItemsToCart, totalPrice],
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
    data: {
      cartItemsLength,
      addedItemsToCart,
      isOpenDrawer,
      totalPrice,
      whatsAppText,
    },
    functions: {
      openDrawer,
      closeDrawer,
      addAmountToCartItem,
      removeAmountToCartItem,
      clearItemsFromCart,
    },
  };
};
