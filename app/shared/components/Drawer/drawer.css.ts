import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideOutFromBottom,
  slideOutFromLeft,
  slideOutFromRight,
  slideOutFromTop,
} from '@/app/application/theme/animations.css';
import { globalVars } from '@/app/application/theme/index.css';
import { breakpoints } from '@/app/application/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const animation = recipe({
  base: {
    transition: 'all 300ms ease',
  },
});

export const backdropStyles = recipe({
  base: [
    animation(),
    {
      position: 'fixed',
      inset: 0,
    },
  ],
  variants: {
    isOpen: {
      true: {
        backdropFilter: 'blur(5px)',

        zIndex: 50,

        width: '100%',
        height: '100%',

        background: 'rgba(0, 0, 0, .5)',
      },
    },
  },
  defaultVariants: {
    isOpen: false,
  },
});

export const drawerStyles = recipe({
  base: [
    animation(),
    {
      position: 'fixed',

      animationDuration: '0.4s',

      zIndex: 60,

      boxShadow:
        '0 10px 16px -4px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

      background: globalVars.color.white200,
    },
  ],
  variants: {
    isOpen: {
      true: {},
      false: {},
    },
    side: {
      left: {
        inset: '0 auto 0 0',

        width: '100%',

        height: '100vh',

        '@media': {
          [breakpoints.md]: {
            width: '40vw',
          },

          [breakpoints.lg]: {
            width: '40vw',
          },
        },
      },
      right: {
        inset: '0 0 0 auto',

        width: '100%',

        height: '100vh',

        '@media': {
          [breakpoints.md]: {
            width: '40vw',
          },

          [breakpoints.lg]: {
            width: '40vw',
          },
        },
      },
      top: {
        inset: '0 0 auto',

        width: '100%',

        height: '100%',

        '@media': {
          [breakpoints.md]: {
            height: '40vh',
          },

          [breakpoints.lg]: {
            height: '40vh',
          },
        },
      },
      bottom: {
        inset: 'auto 0 0',
        width: '100%',

        height: '100%',

        '@media': {
          [breakpoints.md]: {
            height: '40vh',
          },

          [breakpoints.lg]: {
            height: '40vh',
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        isOpen: false,
        side: 'left',
      },
      style: {
        transform: 'translateX(-100%)',
        animation: slideOutFromLeft,
      },
    },
    {
      variants: {
        isOpen: true,
        side: 'left',
      },
      style: {
        animation: slideInFromLeft,
      },
    },
    {
      variants: {
        isOpen: false,
        side: 'right',
      },
      style: {
        transform: 'translateX(100%)',
        animation: slideOutFromRight,
      },
    },
    {
      variants: {
        isOpen: true,
        side: 'right',
      },
      style: {
        animation: slideInFromRight,
      },
    },
    {
      variants: {
        isOpen: false,
        side: 'top',
      },
      style: {
        transform: 'translateY(-100%)',
        animation: slideOutFromTop,
      },
    },
    {
      variants: {
        isOpen: true,
        side: 'top',
      },
      style: {
        animation: slideInFromTop,
      },
    },
    {
      variants: {
        isOpen: false,
        side: 'bottom',
      },
      style: {
        transform: 'translateY(100%)',
        animation: slideOutFromBottom,
      },
    },
    {
      variants: {
        isOpen: true,
        side: 'bottom',
      },
      style: {
        animation: slideOutFromTop,
      },
    },
  ],
});

export const closeButtonStyles = recipe({
  base: [
    animation(),
    {
      position: 'absolute',
      inset: '.8rem .8rem auto auto',

      border: 'none',
      borderRadius: '100%',

      padding: '.6rem',

      cursor: 'pointer',

      ':hover': {
        filter: 'brightness(90%)',
      },

      ':active': {
        filter: 'brightness(96%)',
      },
    },
  ],
});

export const contentStyles = recipe({
  base: {
    margin: '5rem 1rem 1rem',
  },
});
