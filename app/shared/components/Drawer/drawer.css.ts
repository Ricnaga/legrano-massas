import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideOutFromBottom,
  slideOutFromLeft,
  slideOutFromTop,
} from '@/app/application/theme/animations.css';
import { globalVars } from '@/app/application/theme/index.css';
import { breakpoints } from '@/app/application/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const drawer = recipe({
  base: {
    position: 'fixed',

    zIndex: 999,

    boxShadow:
      '0 10px 16px -4px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

    transition: 'all 0.3s ease-in-out',

    background: globalVars.color.white200,
    width: '100%',
    height: '100%',

    padding: '1rem',
  },
  variants: {
    side: {
      right: {
        inset: 0,
        left: 'auto',
        right: 0,

        animationDuration: '0.4s',

        selectors: {
          '&[data-opened=true]': {
            animation: slideInFromRight,
          },

          '&[data-opened=false]': {
            transform: 'translateX(100%)',
          },
        },

        '@media': {
          [breakpoints.md]: {
            width: '60%',
          },

          [breakpoints.lg]: {
            width: '40%',
          },
        },
      },
      left: {
        inset: 0,
        right: 'auto',
        left: 0,

        selectors: {
          '&[data-opened=true]': {
            animation: slideInFromLeft,
            animationDuration: '0.4s',
          },

          '&[data-opened=false]': {
            transform: 'translateX(-100%)',

            animation: slideOutFromLeft,
            animationDuration: '0.4s',
          },
        },

        '@media': {
          [breakpoints.md]: {
            width: '60%',
          },

          [breakpoints.lg]: {
            width: '40%',
          },
        },
      },
      top: {
        inset: 0,
        top: 0,
        bottom: 'auto',

        selectors: {
          '&[data-opened=true]': {
            animation: slideInFromTop,
            animationDuration: '0.4s',
          },

          '&[data-opened=false]': {
            transform: 'translateY(-100%)',

            animation: slideOutFromTop,
            animationDuration: '0.4s',
          },
        },

        '@media': {
          [breakpoints.lg]: {
            height: '40%',
          },
        },
      },
      bottom: {
        inset: 0,
        bottom: 0,
        top: 'auto',

        selectors: {
          '&[data-opened=true]': {
            animation: slideInFromBottom,
            animationDuration: '0.4s',
          },

          '&[data-opened=false]': {
            transform: 'translateY(100%)',

            animation: slideOutFromBottom,
            animationDuration: '0.4s',
          },
        },

        '@media': {
          [breakpoints.lg]: {
            height: '40%',
          },
        },
      },
    },
  },
});

export const content = recipe({
  base: {
    margin: '2rem 1rem 1rem',
  },
});

export const closeButton = recipe({
  base: {
    border: 'none',
    borderRadius: '100%',

    padding: '.6rem',

    cursor: 'pointer',

    transition: 'all',
    transitionDuration: '0.2s',

    ':hover': {
      filter: 'brightness(90%)',
    },

    ':active': {
      filter: 'brightness(96%)',
    },
  },
});
