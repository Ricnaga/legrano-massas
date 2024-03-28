import { globalVars } from '@/app/application/theme/index.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  position: 'absolute',
  bottom: 0,
  right: '64px',

  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',

  borderRadius: '16px 16px 0 0',
  boxShadow: '0px 0px 4px 8px :color'.replace(
    ':color',
    globalVars.color.shadowWhite,
  ),
});

export const linkStyles = recipe({
  base: [
    {
      cursor: 'pointer',

      color: globalVars.color.yellow,
      letterSpacing: '.1rem',
      textShadow: '0px 4px 8px :color'.replace(
        ':color',
        globalVars.color.shadowRed,
      ),
      fontSize: '1.125rem',
      fontWeight: 500,

      width: '7.75rem',
      height: '4rem',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      background: globalVars.color.white,

      textDecoration: 'none',

      transition: 'all',
      transitionDuration: '0.2s',

      ':first-child': {
        borderRadius: '16px 0 0 0',
      },
      ':last-child': {
        borderRadius: '0 16px 0 0',
      },
    },
  ],
  variants: {
    isActive: {
      true: {
        background: globalVars.color.green,
        ':hover': {
          filter: 'brightness(110%)',
        },
      },
      false: {
        ':hover': {
          filter: 'brightness(90%)',
        },
      },
    },
    isIcon: {
      true: {
        border: 'none',
      },
    },
  },
});
