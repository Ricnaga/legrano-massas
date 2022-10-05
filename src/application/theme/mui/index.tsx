import React, { ReactNode } from 'react';
import { ThemeProvider as EmotionProvider } from '@emotion/react';
import {
  CssBaseline,
  ThemeProvider as MaterialUIProvider,
} from '@mui/material';
import { theme } from './theme';

type MuiProviderProps = Partial<Record<'children', ReactNode>>;

export function MuiProvider({ children }: MuiProviderProps) {
  return (
    <MaterialUIProvider theme={theme}>
      <EmotionProvider theme={theme}>
        <CssBaseline />
        {children}
      </EmotionProvider>
    </MaterialUIProvider>
  );
}
