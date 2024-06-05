import { MenuItems } from '@/app/contexts/menu/hooks/useMenuProvider';
import { ReactNode } from 'react';
import {
  container,
  card,
  title,
  description,
  DescriptionVariants,
} from './productcard.css';

type ProductCardProps<T = MenuItems> = DescriptionVariants & {
  children: (data: T) => ReactNode;
  categories: T[];
  itemsToScroll?: number;
};

export function ProductCard(props: ProductCardProps) {
  const { children, categories, itemsToScroll = 6, variant = 'Menu' } = props;

  return (
    <div
      className={container({ hasScroll: categories.length > itemsToScroll })}
    >
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
