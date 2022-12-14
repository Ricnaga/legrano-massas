import { createTheme, ThemeOptions } from '@mui/material';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: {
      default: '#6c844c',
      paper: '#e1e4bc',
    },
    primary: {
      main: '#d0b474',
      dark: '#edca61',
      light: '#ecce9a',
    },
    secondary: {
      main: '#5a4b2a',
      dark: '#664a1e',
      light: '#ae8a50',
    },
    info: {
      main: '#c74213',
      light: '#c82b0d',
      dark: '#981e09',
    },
    error: {
      main: '#c82b0d',
    },
    text: {
      primary: '#fcecdc',
    },
  },
  spacing: (factor: number) => `${factor}rem`,
  typography: {
    fontFamily: ['Ibarra Real Nova'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: '0.4rem',
    },
    h2: {
      fontSize: '3.4rem',
      fontWeight: 700,
      lineHeight: 1.6,
      letterSpacing: '0.4rem',
    },
    h3: {
      fontSize: '2.6rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.2rem',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.4rem',
    },
    h5: {
      fontSize: '1.6rem',
      fontWeight: 400,
      letterSpacing: '0.4rem',
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 400,
      letterSpacing: '0.4rem',
    },
    body1: {
      fontSize: '1.36rem',
      fontWeight: 500,
      letterSpacing: '0.14rem',
    },
    body2: {
      fontSize: '1.2rem',
      fontWeight: 500,
      letterSpacing: '0.14rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: '#5e3923',
        },
      },
    },
  },
};

export const theme = createTheme(lightTheme);
