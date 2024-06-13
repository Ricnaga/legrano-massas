import { Card } from '@/components';
import { Typography } from '../Typography/Typography';
import { UseProductCardProps, useProductCard } from './hooks/useProductCard';
import { card, description, title, typography } from './productcard.css';

interface ProductCardProps extends UseProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  const { categories, children, hasScroll, variant, noCategories } =
    useProductCard(props);

  return (
    <Card hasScroll={hasScroll}>
      {noCategories ? (
        <div className={typography()}>
          <Typography variant="h3">Nenhum produto selecionado</Typography>
        </div>
      ) : (
        categories.map((category) => (
          <div className={card()} key={Math.random()}>
            <p className={title()}>
              {category.name} - {category.price}
            </p>

            <div className={description({ variant })}>
              <p>{category.weight}</p>
              {children(category)}
            </div>
          </div>
        ))
      )}
    </Card>
  );
}
