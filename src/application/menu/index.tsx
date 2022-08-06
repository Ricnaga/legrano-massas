import { createContext, ReactNode } from 'react';
import { menuReducer } from './menuReducer';

type MenuContextProps = ReturnType<typeof menuReducer>;

export const MenuContext = createContext({} as MenuContextProps);

type MenuProviderPros = {
  children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderPros) {
  const menuProvider = menuReducer();
  return (
    <MenuContext.Provider value={menuProvider}>{children}</MenuContext.Provider>
  );
}
