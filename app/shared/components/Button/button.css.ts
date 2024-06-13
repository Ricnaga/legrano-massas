import { globalVars } from '@/app/application/theme/index.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const styles = recipe({
  base: [
    {
      transition: 'all',
      transitionDuration: '0.1s',

      cursor: 'pointer',

      border: 'none',

      padding: '.8rem',

      fontSize: '1.5rem',
      fontWeight: 700,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      selectors: {
        '&:active': {
          filter: 'brightness(110%)',
        },
        '&:disabled': {
          cursor: 'not-allowed',
        },
      },
    },
  ],
  variants: {
    isIconButton: {
      true: {
        height: '100%',
        maxHeight: '28px',
        padding: '1rem 1.6rem',
      },
    },
    radius: {
      rounded: {
        borderRadius: '4px',
      },
      lg: {
        borderRadius: '8px',
      },
      xl: {
        borderRadius: '12px',
      },
      full: {
        borderRadius: '28px',
      },
    },
    variant: {
      primary: {
        background: globalVars.color.yellow200,
        color: globalVars.color.white200,
        boxShadow: '0px 0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.yellow100,
        ),

        selectors: {
          '&:hover:not(:disabled)': {
            background: globalVars.color.green200,

            color: globalVars.color.yellow200,

            boxShadow: '0px 0px 2px 2px :color'.replace(
              ':color',
              globalVars.color.yellow200,
            ),
          },

          '&:disabled': {
            background: globalVars.color.white100,
          },
        },
      },
      secondary: {
        background: globalVars.color.green200,
        color: globalVars.color.yellow200,
        boxShadow: '0px 0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.red100,
        ),

        selectors: {
          '&:hover:not(:disabled)': {
            background: globalVars.color.white200,

            color: globalVars.color.dark200,

            boxShadow: '0px 0px 2px 2px :color'.replace(
              ':color',
              globalVars.color.red200,
            ),
          },

          '&:disabled': {
            background: globalVars.color.white100,
          },
        },
      },
      error: {
        background: globalVars.color.red200,
        color: globalVars.color.yellow200,
        boxShadow: '0px 0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.dark100,
        ),

        selectors: {
          '&:hover:not(:disabled)': {
            background: globalVars.color.white200,

            color: globalVars.color.red200,

            boxShadow: '0px 0px 2px 2px :color'.replace(
              ':color',
              globalVars.color.red200,
            ),
          },

          '&:disabled': {
            background: globalVars.color.white100,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    radius: 'xl',
    isIconButton: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof styles>;
