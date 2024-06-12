'use client';

import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { convertToBRL } from '@/app/shared/utils/currency';
import { ProductCard } from '@/components';
import { amountButton, amountContainer } from './itemcard.css';
import { WhatsAppIcon } from '@/app/shared/icons';

export function ItemCard() {
  const { dispatch, state } = useMenuContext();

  const formattedState = state.flatMap((categories) =>
    categories.items
      .filter((category) => category.selected)
      .map((category) => ({
        ...category,
        categoryId: categories.id,
      })),
  );

  const selectedCategories = formattedState.map((category) => ({
    ...category,
    price: convertToBRL(category.price),
  }));

  const totalPrice = convertToBRL(
    formattedState.reduce(
      (accumulator, currentValue) =>
        accumulator + +currentValue.price * currentValue.amount,
      0,
    ),
  );

  return (
    <>
      <ProductCard
        categories={selectedCategories}
        itemsToScroll={8}
        variant="Cart"
      >
        {(category) => (
          <div className={amountContainer()}>
            <button
              className={amountButton()}
              onClick={() =>
                dispatch({
                  action: MenuActionsType.ADD_AMOUNT,
                  payload: {
                    categoryId: category.categoryId,
                    itemId: category.id,
                  },
                })
              }
            >
              +
            </button>
            <span>{category.amount}</span>
            <button
              className={amountButton()}
              onClick={() =>
                dispatch({
                  action: MenuActionsType.REMOVE_FROM_CART,
                  payload: {
                    categoryId: category.categoryId,
                    itemId: category.id,
                  },
                })
              }
            >
              -
            </button>
          </div>
        )}
      </ProductCard>
      {!!selectedCategories.length && (
        <>
          <h2>Total: {totalPrice}</h2>
          <button
            onClick={() =>
              dispatch({
                action: MenuActionsType.CLEAR_CART,
                payload: {
                  itemId: null,
                },
              })
            }
          >
            Limpar
          </button>
          <button>
            <WhatsAppIcon /> Me manda no zap
          </button>
        </>
      )}
    </>
  );
}
