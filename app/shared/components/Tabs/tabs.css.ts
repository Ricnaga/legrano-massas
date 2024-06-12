import { globalVars } from '@/app/application/theme/index.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const containerStyles = recipe({
  base: [
    {
      width: '100%',
      display: 'grid',
      gap: '1rem',

      gridTemplateColumns: 'repeat(3, 1fr)',

      justifyItems: 'center',
    },
  ],
  variants: {
    orientation: {
      vertical: {},
    },
  },
});

export const listStyles = recipe({
  base: [
    {
      display: 'grid',
      height: 'min-content',

      gap: '1rem',

      width: '100%',
      maxWidth: '30rem',

      textAlign: 'center',
    },
  ],
  variants: {
    orientation: {
      vertical: {},
    },
  },
});

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

        borderRadius: '32px',

        selectors: {
          '&:hover': {
            filter: 'brightness(105%)',
          },
          '&:active': {
            filter: 'brightness(110%)',
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
