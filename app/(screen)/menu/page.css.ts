import { globalVars } from '@/app/application/theme/index.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  background: globalVars.color.white200,

  borderRadius: '8px',

  padding: '2rem',
});
