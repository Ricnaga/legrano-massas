export const colors = {
  dark: '#000814',
  get shadowDark() {
    return this.dark.concat('80');
  },
  white: '#F1FAEE',
  get shadowWhite() {
    return this.white.concat('42');
  },
  yellow: '#FCA311',
  get shadowYellow() {
    return this.yellow.concat('42');
  },
  green: '#538D22',
  get shadowGreen() {
    return this.green.concat('80');
  },
  red: '#FF0101',
  get shadowRed() {
    return this.red.concat('42');
  },
};

export const breakpoints = {
  sm: 'screen and (min-width: 640px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 1024px)',
  xl: 'screen and (min-width: 1280px)',
  '2xl': 'screen and (min-width: 1536px)',
};
