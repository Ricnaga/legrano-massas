import { ReactNode } from 'react';
import { CardVariants, container } from './card.css';

type CardProps = CardVariants & {
  children: ReactNode;
};

export function Card({ hasScroll = false, ...rest }: CardProps) {
  return <div className={container({ hasScroll })} {...rest} />;
}
