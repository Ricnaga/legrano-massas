import { Theme, useMediaQuery, useTheme } from '@mui/material';

export const useTopbarCartItems = () => {
  const { breakpoints } = useTheme();
  const drawerOnMObile = useMediaQuery<Theme>(breakpoints.down('sm'))
    ? '100vw'
    : '100%';

  return {
    data: {
      drawerOnMObile,
    },
  };
};
