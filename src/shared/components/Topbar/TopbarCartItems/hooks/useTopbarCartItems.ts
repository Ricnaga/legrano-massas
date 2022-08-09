import { Theme, useMediaQuery } from '@mui/material';

export const useTopbarCartItems = () => {
  const drawerOnMObile = useMediaQuery<Theme>(({ breakpoints }) =>
    breakpoints.down('sm'),
  )
    ? '100vw'
    : '100%';

  return {
    data: {
      drawerOnMObile,
    },
  };
};
