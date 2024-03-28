import { globalVars } from '@/app/application/theme/index.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
});

export const imgStyles = style({
  width: '100%',
  height: '100%',
});

export const bibliographyStyles = style({
  display: 'flex',
  alignItems: 'center',

  flexDirection: 'column',

  gap: '2rem',
});

export const descriptionStyles = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  padding: '1rem',

  textAlign: 'justify',

  overflowY: 'scroll',
  maxHeight: '30rem',

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
});
