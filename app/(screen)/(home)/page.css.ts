import { globalVars } from '@/app/application/theme/index.css';
import { breakpoints } from '@/app/application/theme/theme.css';
import { style } from '@vanilla-extract/css';

export const containerStyles = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: '2rem',

  '@media': {
    [breakpoints.xl]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

export const imgStyles = style({
  width: '100%',
  height: '100%',
  padding: '0 2rem',

  '@media': {
    [breakpoints.lg]: {
      padding: 0,
    },
  },
});

export const bibliographyStyles = style({
  display: 'flex',
  alignItems: 'center',

  flexDirection: 'column',

  gap: '2rem',
  padding: '0 2rem',

  '@media': {
    [breakpoints.lg]: {
      padding: 0,
    },
  },
});

export const descriptionStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  padding: '1rem',

  textAlign: 'justify',

  overflowY: 'scroll',
  maxHeight: '40rem',

  '::-webkit-scrollbar': {
    width: '10px',
  },

  '::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px :color'.replace(
      ':color',
      globalVars.color.yellow,
    ),
    borderRadius: '8px',
  },

  '::-webkit-scrollbar-thumb': {
    background: globalVars.color.yellow,
    borderRadius: '8px',
  },

  '@media': {
    [breakpoints.lg]: {
      maxHeight: '30rem',
    },
  },
});
