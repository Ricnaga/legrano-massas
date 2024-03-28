import { globalVars } from '@/app/application/theme/index.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const containerStyles = style({
  display: 'grid',
  gap: '1rem',

  gridTemplateColumns: 'repeat(7,1fr)',
  marginBottom: '4rem',
});

export const linkStyles = recipe({
  base: [
    {
      ':first-of-type': {
        gridColumn: '5',
      },
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',

      transition: 'all',
      transitionDuration: '0.2s',

      cursor: 'pointer',

      border: 'none',
      borderRadius: '12px',

      background: globalVars.color.white,
      padding: '1rem',

      fontSize: '1.2rem',
      fontWeight: 700,
      fontVariant: 'small-caps',
      lineHeight: '1rem',

      ':hover': {
        boxShadow: '0px 0px 4px 8px :color'.replace(
          ':color',
          globalVars.color.shadowWhite,
        ),
        transitionDuration: '0.2s',
        color: globalVars.color.white,
      },

      textDecoration: 'none',
    },
  ],
  variants: {
    variant: {
      WhatsApp: {
        color: '#25D366',
        ':hover': {
          background: '#25D366',
        },
      },

      Instagram: {
        color: '#F00073',
        ':hover': {
          background: '#F00073',
        },
      },
      Facebook: {
        color: '#1877F2',
        ':hover': {
          background: '#1877F2',
        },
      },
    },
  },
});
