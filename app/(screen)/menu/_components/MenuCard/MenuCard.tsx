'use client';

import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { ProductCard } from '@/app/shared/components';
import { AddCartIcon } from '@/app/shared/icons';
import { convertToBRL } from '@/app/shared/utils/currency';
import { addCartButton, cartIcon } from './menucard.css';

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
    <ProductCard categories={filteredCategories}>
      {(category) => (
        <button
          className={addCartButton()}
          disabled={category.selected}
          onClick={() =>
            dispatch({
              action: MenuActionsType.ADD_TO_CART,
              payload: {
                categoryId: category.categoryId,
                itemId: category.id,
              },
            })
          }
        >
          Adicionar ao carrinho{' '}
          <AddCartIcon pathProps={{ className: cartIcon() }} />
        </button>
      )}
    </ProductCard>
  );
}
