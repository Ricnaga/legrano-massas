import { globalVars } from '@/app/application/theme/index.css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: [
    {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
  ],
});

export const amountContainer = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '1rem',
    alignItems: 'center',
    justifyItems: 'center',
  },
});

export const link = recipe({
  base: [
    {
      marginLeft: '1rem',
      fontSize: '1.5rem',
      fontWeight: 700,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.4rem',

      textDecoration: 'none',

      color: globalVars.color.white200,

      selectors: {
        '&:hover:not(:disabled)': {
          color: globalVars.color.yellow200,
        },
      },
    },
  ],
});
