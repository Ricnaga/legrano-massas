import { globalVars } from '@/app/application/theme/index.css';
import { recipe } from '@vanilla-extract/recipes';

export const addCartButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    height: '100%',
    maxHeight: '24px',

    transition: 'all',
    transitionDuration: '0.2s',

    cursor: 'pointer',

    background: globalVars.color.yellow,

    borderRadius: '28px',
    border: 'none',

    padding: '1rem 1.6rem',

    color: globalVars.color.white,
    fontSize: '1.5rem',
    fontWeight: 700,

    boxShadow: '0px 0px 4px 4px :color'.replace(
      ':color',
      globalVars.color.shadowYellow,
    ),

    selectors: {
      '&:hover:not(:disabled)': {
        background: globalVars.color.green,

        color: globalVars.color.yellow,

        boxShadow: '0px 0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.shadowGreen,
        ),
      },
      '&:active': {
        filter: 'brightness(110%)',
      },

      '&:disabled': {
        background: globalVars.color.green,
        cursor: 'not-allowed',
      },
    },
  },
});

export const cartIcon = recipe({
  base: {
    fill: globalVars.color.white,
  },
});
