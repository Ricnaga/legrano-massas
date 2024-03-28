'use client';

import { createContext, PropsWithChildren, useContext } from 'react';
import { MenuContextProps, useMenuProvider } from './hooks/useMenuProvider';

const MenuContext = createContext({} as MenuContextProps);

export const useMenuContext = () => useContext(MenuContext);

export function MenuProvider(baseProps: PropsWithChildren) {
  const { providerProps } = useMenuProvider(baseProps);

  return <MenuContext.Provider {...providerProps} />;
}
