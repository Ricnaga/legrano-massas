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
    alignItems: 'center',
    justifyItems: 'center',
  },
});
