import { UseProductCardProps, useProductCard } from './hooks/useProductCard';
import { card, container, description, title } from './productcard.css';

interface ProductCardProps extends UseProductCardProps {}

export function ProductCard(props: ProductCardProps) {
  const { categories, children, hasScroll, variant } = useProductCard(props);

  return (
    <div className={container({ hasScroll })}>
      {categories.map((category) => (
        <div className={card()} key={Math.random()}>
          <p className={title()}>
            {category.name} - {category.price}
          </p>

          <div className={description({ variant })}>
            <p>{category.weight}</p>
            {children(category)}
          </div>
        </div>
      ))}
    </div>
  );
}
