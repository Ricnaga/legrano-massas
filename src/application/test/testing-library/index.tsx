import { ThemeProvider } from '@mui/material';
import { render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import { theme } from '../../theme/mui/theme';

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
