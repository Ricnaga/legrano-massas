import { breakpoints } from '@/app/application/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const styles = recipe({
  base: [
    {
      '@media': {
        [breakpoints.lg]: {
          height: '100%',
          padding: '2rem 2rem 0',
        },
      },
    },
  ],
});
