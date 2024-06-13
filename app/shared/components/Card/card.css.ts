import { globalVars } from '@/app/application/theme/index.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    background: globalVars.color.green200,

    padding: '1rem',

    borderRadius: '12px',

    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    boxShadow: '0px 0px 4px 4px :color'.replace(
      ':color',
      globalVars.color.green100,
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
            globalVars.color.white200,
          ),
          borderRadius: '8px',
        },

        '::-webkit-scrollbar-thumb': {
          background: globalVars.color.white200,
          borderRadius: '8px',
        },
      },
    },
  },
});

export type CardVariants = RecipeVariants<typeof container>;
