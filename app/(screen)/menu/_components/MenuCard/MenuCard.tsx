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

export function MenuCard() {
  const { filteredCategories, dispatch, categoryId } = useMenuContext();

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
                  payload: { categoryId, itemId: category.id },
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
