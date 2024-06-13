import { globalVars } from '@/app/application/theme/index.css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const styles = recipe({
  base: [{ letterSpacing: '.2rem', color: globalVars.color.white200 }],
  variants: {
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
    variant: {
      h1: {
        fontSize: '2.4rem',
        fontWeight: 900,
        lineHeight: '32px',
      },
      h2: {
        fontSize: '2.2rem',
        fontWeight: 700,
        lineHeight: '32px',
      },

      h3: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: '24px',
      },

      h4: {
        fontSize: '1.8rem',
        fontWeight: 500,
        lineHeight: '24px',
      },

      h5: {
        fontSize: '.875rem',
        fontWeight: 400,
        lineHeight: '24px',
      },

      h6: {
        fontSize: '.8rem',
        fontWeight: 400,
        lineHeight: '24px',
      },

      p: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: '24px',
      },
      span: {
        fontSize: '.625rem',
        fontWeight: 400,
        lineHeight: '16px',
      },
    },
  },
  defaultVariants: {
    textAlign: 'left',
    variant: 'p',
  },
});

export type TypographyVariants = RecipeVariants<typeof styles>;
