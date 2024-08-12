import { globalVars } from '@/app/application/theme/index.css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    background: globalVars.color.white200,

    borderRadius: '8px',

    padding: '2rem',

    display: 'grid',
  },
  variants: {
    orientation: {
      vertical: {
        gridTemplateColumns: '1fr',
        rowGap: '1rem',
      },
      horizontal: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '1rem',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

type TabsContainerVariant = RecipeVariants<typeof container>;

export const tablist = recipe({
  base: {
    width: '100%',

    display: 'flex',
    gap: '0.2rem',

    scrollbarWidth: 'none',
  },
  variants: {
    orientation: {
      vertical: {
        overflowX: 'auto',
        gridColumn: 'span 1',
      },
      horizontal: {
        textAlign: 'center',
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

type TabListVariant = RecipeVariants<typeof tablist>;

export const tab = recipe({
  base: {
    transition: 'all 200ms ease',

    whiteSpace: 'nowrap',

    cursor: 'pointer',

    padding: '1rem 1.4rem',

    textTransform: 'capitalize',

    color: globalVars.color.green200,

    textShadow: '0px 4px 8px :color'.replace(':color', globalVars.color.red100),

    fontSize: '1.2rem',
    fontWeight: 700,

    borderRadius: '4px',

    selectors: {
      '&:hover': {
        color: globalVars.color.dark100,
        background: globalVars.color.yellow100,
      },
      '&:active': {
        color: globalVars.color.green100,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        color: globalVars.color.yellow200,
        background: globalVars.color.green200,
      },
    },
  },
  defaultVariants: {
    isActive: false,
  },
});

export const tabpanels = recipe({
  variants: {
    orientation: {
      vertical: {},
      horizontal: {
        gridColumn: 'span 2',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

type TabPanelsVariant = RecipeVariants<typeof tabpanels>;

export type TabsVariant = Extract<
  TabsContainerVariant,
  TabListVariant | TabPanelsVariant
>;

export const tabpanel = recipe({});
