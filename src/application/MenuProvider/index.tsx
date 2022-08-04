import { createContext, ReactNode } from 'react';
import { useMenuProvider } from './hooks/useMenuProvider';

type MenuContextProps = ReturnType<typeof useMenuProvider>;

export const MenuContext = createContext({} as MenuContextProps);

type MenuProviderPros = {
  children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderPros) {
  const menuProvider = useMenuProvider();
  return (
    <MenuContext.Provider value={menuProvider}>{children}</MenuContext.Provider>
  );
}
