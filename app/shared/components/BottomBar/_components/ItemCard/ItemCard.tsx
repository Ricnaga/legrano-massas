'use client';

import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { convertToBRL } from '@/app/shared/utils/currency';
import { ProductCard } from '@/components';
import { amountButton, amountContainer } from './itemcard.css';

export function ItemCard() {
  const { dispatch, state } = useMenuContext();

  const selectedCategories = state.flatMap((categories) =>
    categories.items
      .filter((category) => category.selected)
      .map((category) => ({
        ...category,
        categoryId: categories.id,
        price: convertToBRL(category.price),
      })),
  );

  return (
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
  );
}
