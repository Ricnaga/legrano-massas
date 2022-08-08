import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback } from 'react';
import { useMenuContext } from '../../../../../application/menu/hooks/useMenuContext';
import { MenuActionsType } from '../../../../../application/menu/menuReducer';

export const useMenuDoughs = () => {
  const { breakpoints } = useTheme();
  const {
    data: { menuState },
    funtions: { dispatchMenu },
  } = useMenuContext();

  const onAddItemToCart = useCallback(
    (categoryId: string, itemId: string) =>
      dispatchMenu({
        action: MenuActionsType.ADD_TO_CART,
        payload: { categoryId, itemId },
      }),
    [],
  );
  const imageListCols = useMediaQuery(breakpoints.up('md'), { noSsr: true })
    ? 3
    : 1;
  return {
    data: { menuState, imageListCols },
    functions: { onAddItemToCart },
  };
};
