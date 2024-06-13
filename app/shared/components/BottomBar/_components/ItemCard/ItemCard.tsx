'use client';

import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { WhatsAppIcon } from '@/app/shared/icons';
import { convertToBRL } from '@/app/shared/utils/currency';
import { Button, Card, ProductCard, Typography } from '@/components';
import { amountContainer, container } from './itemcard.css';

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
    <div className={container()}>
      <ProductCard
        categories={selectedCategories}
        itemsToScroll={5}
        variant="Cart"
      >
        {(category) => (
          <div className={amountContainer()}>
            <Button
              radius="full"
              isIconButton
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
            </Button>
            <span>{category.amount}</span>
            <Button
              radius="full"
              isIconButton
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
            </Button>
          </div>
        )}
      </ProductCard>
      {!!selectedCategories.length && (
        <Card>
          <Typography variant="h2" textAlign="right">
            Total: {totalPrice}
          </Typography>
          <Button
            variant="error"
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
          </Button>
          <Button>
            <WhatsAppIcon /> Me manda no zap
          </Button>
        </Card>
      )}
    </div>
  );
}
