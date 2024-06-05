import { globalVars } from '@/app/application/theme/index.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    background: globalVars.color.green,

    padding: '1rem',

    borderRadius: '12px',

    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    boxShadow: '0px 0px 4px 4px :color'.replace(
      ':color',
      globalVars.color.shadowGreen,
    ),
  },
  variants: {
    hasScroll: {
      true: {
        maxHeight: '480px',
        overflowY: 'scroll',

        '::-webkit-scrollbar': {
          width: '10px',
        },

        '::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 6px :color'.replace(
            ':color',
            globalVars.color.white,
          ),
          borderRadius: '8px',
        },

        '::-webkit-scrollbar-thumb': {
          background: globalVars.color.white,
          borderRadius: '8px',
        },
      },
    },
  },
});

export const card = recipe({
  base: {
    transition: 'all',
    transitionDuration: '0.2s',

    padding: '1rem',

    borderRadius: '8px',

    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',

    color: globalVars.color.white,
    letterSpacing: '.1rem',

    selectors: {
      '&:hover': {
        color: globalVars.color.yellow,

        background: globalVars.color.white,
        boxShadow: '0px 0px 4px 2px :color'.replace(
          ':color',
          globalVars.color.shadowDark,
        ),
      },
    },
  },
});

export const title = recipe({
  base: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
});

export const description = recipe({
  base: {
    padding: '0 1rem',

    fontSize: '1.2rem',
    fontWeight: 700,
  },
  variants: {
    variant: {
      Menu: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      Cart: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',

        ':first-child': {
          width: '100%',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'Menu',
  },
});

export type DescriptionVariants = RecipeVariants<typeof description>;
