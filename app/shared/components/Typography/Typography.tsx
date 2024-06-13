'use client';

import { ReactNode, useRef } from 'react';
import { TypographyVariants, styles } from './typography.css';
import { useElement } from '../../hooks/useElement';

type TypographyProps = TypographyVariants & {
  children: ReactNode;
};

export function Typography({
  textAlign = 'left',
  variant = 'p',
  ...rest
}: TypographyProps) {
  const { Element, getProps } = useElement({
    element: variant,
    props: { ...rest, className: styles({ variant, textAlign }) },
  });

  const ref = useRef(null);

  return <Element {...getProps()} ref={ref} />;
}
