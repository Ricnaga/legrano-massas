import { fontFace, globalStyle } from '@vanilla-extract/css';
import { globalVars } from './index.css';

const karla = fontFace({
  src: 'local(Karla)',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: karla,
});

globalStyle('body', {
  height: '100vh',
  background: globalVars.color.dark,
});
