'use client';

import { useMenuContext } from '@/app/contexts/menu';
import {
  MenuActionsType,
  MenuItems,
} from '@/app/contexts/menu/hooks/useMenuProvider';
import {
  amountButton,
  amountContainer,
  card,
  container,
  description,
  title,
} from './itemcard.css';
import { convertToBRL } from '@/app/shared/utils/currency';

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
    <div className={container({ hasScroll: selectedCategories.length > 8 })}>
      {selectedCategories.map((category) => (
        <div className={card()} key={Math.random()}>
          <p className={title()}>
            {category.name} - {category.price}
          </p>

          <div className={description()}>
            <p>{category.weight}</p>
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
          </div>
        </div>
      ))}
    </div>
  );
}
