import { globalVars } from '@/app/application/theme/index.css';
import { breakpoints } from '@/app/application/theme/theme.css';
import { recipe } from '@vanilla-extract/recipes';

export const containerStyles = recipe({
  base: [
    {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      marginBottom: '4rem',

      '@media': {
        [breakpoints.lg]: {
          display: 'grid',
          gap: '1rem',

          gridTemplateColumns: 'repeat(7,1fr)',
          marginBottom: '4rem',
        },
      },
    },
  ],
});

const WHATSAPP_COLOR = '#25D366';
const INSTAGRAM_COLOR = '#F00073';
const FACEBOOK_COLOR = '#1877F2';

export const linkStyles = recipe({
  base: [
    {
      transition: 'all',
      transitionDuration: '0.2s',

      ':first-of-type': {
        gridColumn: '1',
      },

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',

      border: 'none',

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

      '@media': {
        [breakpoints.lg]: {
          ':first-of-type': {
            gridColumn: '5',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',

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
      },
    },
  ],
  variants: {
    variant: {
      WhatsApp: {
        color: WHATSAPP_COLOR,
        ':hover': {
          background: WHATSAPP_COLOR,
        },
      },

      Instagram: {
        color: INSTAGRAM_COLOR,
        ':hover': {
          background: INSTAGRAM_COLOR,
        },
      },
      Facebook: {
        color: FACEBOOK_COLOR,
        ':hover': {
          background: FACEBOOK_COLOR,
        },
      },
    },
  },
});
