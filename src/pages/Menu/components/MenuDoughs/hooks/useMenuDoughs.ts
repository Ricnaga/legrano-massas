import { useTheme, useMediaQuery } from '@mui/material';
import { useMenuContext } from '@application/menu/hooks/useMenuContext';
import { MenuActionsType } from '@application/menu/menuReducer';

export const useMenuDoughs = () => {
  const { breakpoints } = useTheme();
  const {
    data: { menuState },
    functions: { dispatchMenu },
  } = useMenuContext();

  const onAddItemToCart = (categoryId: string, itemId: string) =>
    dispatchMenu({
      action: MenuActionsType.ADD_TO_CART,
      payload: { categoryId, itemId },
    });

  const imageListCols = useMediaQuery(breakpoints.up('md')) ? 3 : 1;

  return {
    data: { menuState, imageListCols },
    functions: { onAddItemToCart },
  };
};
