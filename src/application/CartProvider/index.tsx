import { createContext, ReactNode } from 'react';
import { useCartProvider } from './hooks/useCartProvider';

type CartContextProps = ReturnType<typeof useCartProvider>;

export const CartContext = createContext({} as CartContextProps);

type CartProviderPros = {
  children: ReactNode;
};

export function CartProvider({ children }: CartProviderPros) {
  const { data } = useCartProvider();
  return (
    <CartContext.Provider value={{ data }}>{children}</CartContext.Provider>
  );
}
