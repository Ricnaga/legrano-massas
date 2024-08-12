'use client';

import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { Button } from '@/app/shared/components';
import { ProductCard } from '@/app/shared/components/@legrano';
import { AddCartIcon } from '@/app/shared/icons';
import { convertToBRL } from '@/app/shared/utils/currency';
import { cartIcon } from './menucard.css';

type MenuCardProps = {
  id: string;
};

export function MenuCard({ id }: MenuCardProps) {
  const { state, dispatch } = useMenuContext();

  const filteredCategories =
    state
      .filter((category) => Object.is(category.id, id))
      .at(0)
      ?.items.map((item) => ({
        ...item,
        categoryId: id,
        price: convertToBRL(item.price),
      })) || [];

  return (
    <ProductCard categories={filteredCategories}>
      {(category) => (
        <Button
          radius="full"
          isIconButton
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
          <AddCartIcon pathProps={{ className: cartIcon() }} />
        </Button>
      )}
    </ProductCard>
  );
}
