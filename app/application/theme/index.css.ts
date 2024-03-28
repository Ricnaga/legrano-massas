import { createGlobalTheme } from '@vanilla-extract/css';
import { colors } from './theme.css';

export const globalVars = createGlobalTheme(':root', {
  color: colors,
});
