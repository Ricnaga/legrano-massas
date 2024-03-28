import { ComponentProps, useCallback } from 'react';

type ElementKeys = keyof JSX.IntrinsicElements;

type UseElementProps<E extends ElementKeys, P = ComponentProps<ElementKeys>> = {
  element: E;
  props?: P;
};

type BaseProps<T extends ElementKeys> = ComponentProps<T> | object;

type GetPropsType<T extends ElementKeys> = (
  props?: BaseProps<T>,
) => BaseProps<T>;

export const useElement = <T extends ElementKeys = ElementKeys>({
  element,
  props,
}: UseElementProps<T>) => {
  const getProps: GetPropsType<T> = useCallback(
    (defaultProps = {}) => ({ ...defaultProps, ...props }),
    [props],
  );

  return {
    Element: element,
    getProps,
  };
};
