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

    background: globalVars.color.yellow200,

    borderRadius: '28px',
    border: 'none',

    padding: '1rem 1.6rem',

    color: globalVars.color.white200,
    fontSize: '1.5rem',
    fontWeight: 700,

    boxShadow: '0px 0px 4px 4px :color'.replace(
      ':color',
      globalVars.color.yellow100,
    ),

    selectors: {
      '&:hover:not(:disabled)': {
        background: globalVars.color.green200,

        color: globalVars.color.yellow200,

        boxShadow: '0px 0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.green100,
        ),
      },
      '&:active': {
        filter: 'brightness(110%)',
      },

      '&:disabled': {
        background: globalVars.color.green200,
        cursor: 'not-allowed',
      },
    },
  },
});

export const cartIcon = recipe({
  base: {
    fill: globalVars.color.white200,
  },
});
