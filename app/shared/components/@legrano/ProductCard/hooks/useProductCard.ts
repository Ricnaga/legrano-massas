import { MenuItems } from '@/app/contexts/menu/hooks/useMenuProvider';
import { ReactNode } from 'react';
import { DescriptionVariants } from '../productcard.css';

export type UseProductCardProps<T = MenuItems> = DescriptionVariants & {
  children: (data: T) => ReactNode;
  categories: T[];
  itemsToScroll?: number;
};

export const useProductCard = (props: UseProductCardProps) => {
  const { children, categories, itemsToScroll = 4, variant = 'Menu' } = props;

  return {
    children,
    noCategories: variant === 'Cart' && !categories.length,
    categories,
    hasScroll: categories.length >= itemsToScroll,
    variant,
  };
};
