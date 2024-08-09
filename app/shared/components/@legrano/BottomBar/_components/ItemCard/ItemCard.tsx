'use client';

import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { Button } from '@/app/shared/components/Button/Button';
import { Card } from '@/app/shared/components/Card/Card';
import { Typography } from '@/app/shared/components/Typography/Typography';
import { WhatsAppIcon } from '@/app/shared/icons';
import Link from 'next/link';
import { ProductCard } from '../../../ProductCard/ProductCard';
import { useItemCard } from './hooks/useItemCard';
import { amountContainer, container, link } from './itemcard.css';

export function ItemCard() {
  const { selectedCategories, totalPrice, onClear, onAmount, href } =
    useItemCard();

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
                onAmount({
                  action: MenuActionsType.ADD_AMOUNT,
                  categoryId: category.categoryId,
                  itemId: category.id,
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
                onAmount({
                  action: MenuActionsType.REMOVE_FROM_CART,
                  categoryId: category.categoryId,
                  itemId: category.id,
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
          <Typography variant="h2" align="right">
            Total: {totalPrice}
          </Typography>
          <Button variant="error" onClick={onClear}>
            Limpar
          </Button>
          <Button>
            <Link href={href} className={link()}>
              <WhatsAppIcon /> Me manda no zap
            </Link>
          </Button>
        </Card>
      )}
    </div>
  );
}
