'use client';

import { ReactNode, useRef } from 'react';
import { TypographyVariants, styles } from './typography.css';
import { useElement } from '../../hooks/useElement';

type TypographyProps = TypographyVariants & {
  children: ReactNode;
};

export function Typography({ variant, ...rest }: TypographyProps) {
  const { Element, getProps } = useElement({
    element: variant || 'p',
    props: { ...rest, className: styles({ variant: variant || 'p' }) },
  });

  const ref = useRef(null);

  return <Element {...getProps()} ref={ref} />;
}
