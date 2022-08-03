import { createContext, ReactNode } from 'react';
import { useMenuProvider } from './hooks/useMenuProvider';

type MenuContextProps = ReturnType<typeof useMenuProvider>;

export const MenuContext = createContext({} as MenuContextProps);

type MenuProviderPros = {
  children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderPros) {
  const { data } = useMenuProvider();
  return (
    <MenuContext.Provider value={{ data }}>{children}</MenuContext.Provider>
  );
}
