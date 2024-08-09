import { globalVars } from '@/app/application/theme/index.css';
import { breakpoints } from '@/app/application/theme/theme.css';
import { style } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const containerStyles = recipe({
  base: [
    {
      width: '100%',

      display: 'grid',
      gridTemplateColumns: '1fr',
      rowGap: '1rem',
      justifyItems: 'center',
    },
  ],
  variants: {
    orientation: {
      vertical: {},
      horizontal: {
        '@media': {
          [breakpoints.lg]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
          },
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type ContainerVariants = RecipeVariants<typeof containerStyles>;

export const listStyles = recipe({
  base: [
    {
      width: '100%',

      textAlign: 'center',

      display: 'flex',
    },
  ],
  variants: {
    orientation: {
      vertical: {},
      horizontal: {
        '@media': {
          [breakpoints.lg]: {
            display: 'grid',
            height: 'min-content',
            maxWidth: '30rem',
          },
        },
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

type ListVariants = RecipeVariants<typeof listStyles>;

export const triggerStyles = recipe({
  base: [
    {
      padding: '1rem 2rem',

      fontSize: '1.5rem',

      cursor: 'pointer',

      textTransform: 'capitalize',
    },
  ],
  variants: {
    isActive: {
      true: {
        color: globalVars.color.yellow200,
        textShadow: '0px 4px 8px :color'.replace(
          ':color',
          globalVars.color.red100,
        ),
        fontWeight: 700,

        background: globalVars.color.green200,

        maxHeight: '3.75rem',

        boxShadow: '0px 0px 16px 4px :color'.replace(
          ':color',
          globalVars.color.green100,
        ),

        borderRadius: '4px',

        '@media': {
          [breakpoints.lg]: {
            borderRadius: '28px',

            selectors: {
              '&:hover': {
                filter: 'brightness(105%)',
              },
              '&:active': {
                filter: 'brightness(110%)',
              },
            },
          },
        },
      },
      false: {
        color: globalVars.color.green200,
        textShadow: '0px 4px 4px :color'.replace(
          ':color',
          globalVars.color.yellow100,
        ),

        fontWeight: 400,
      },
    },
  },
});

export const contentStyles = style({
  gridColumn: 'span 2',
  width: '100%',
});

export type TabsVariants = Extract<ContainerVariants, ListVariants>;
