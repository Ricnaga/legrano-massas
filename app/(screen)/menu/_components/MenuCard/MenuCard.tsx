'use client';

import { useMenuContext } from '@/app/contexts/menu';
import {
  addCartButton,
  card,
  cartIcon,
  container,
  description,
  title,
} from './menucard.css';
import { AddCartIcon } from '@/app/shared/icons';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { convertToBRL } from '@/app/shared/utils/currency';

export function MenuCard() {
  const { state, dispatch, categoryId } = useMenuContext();

  const filteredCategories =
    state
      .filter((category) => Object.is(category.id, categoryId))
      .at(0)
      ?.items.map((item) => ({
        ...item,
        categoryId,
        price: convertToBRL(item.price),
      })) || [];

  return (
    <div className={container({ hasScroll: filteredCategories.length > 4 })}>
      {filteredCategories.map((category) => (
        <div className={card()} key={Math.random()}>
          <p className={title()}>
            {category.name} - {category.price}
          </p>

          <div className={description()}>
            <p>{category.weight}</p>
            <button
              className={addCartButton()}
              disabled={category.selected}
              onClick={() =>
                dispatch({
                  action: MenuActionsType.ADD_TO_CART,
                  payload: {
                    categoryId: !!category.categoryId
                      ? category.categoryId
                      : null,
                    itemId: category.id,
                  },
                })
              }
            >
              Adicionar ao carrinho{' '}
              <AddCartIcon pathProps={{ className: cartIcon() }} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
