import { Card } from '../../Card/Card';
import { Typography } from '../../Typography/Typography';
import { UseProductCardProps, useProductCard } from './hooks/useProductCard';
import { card, description, title } from './productcard.css';

interface ProductCardProps extends UseProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  const { categories, children, hasScroll, variant, noCategories } =
    useProductCard(props);

  return (
    <Card hasScroll={hasScroll}>
      {noCategories ? (
        <Typography variant="h3" align="center">
          Nenhum produto selecionado
        </Typography>
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
