import { MenuProvider } from '@application/menu';
import { theme } from '@application/theme/mui/theme';
import { ThemeProvider } from '@mui/material';
import {
  render,
  RenderResult,
  screen,
  renderHook,
  fireEvent,
  act,
  waitFor,
} from '@testing-library/react';
import testingUserEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, {
    wrapper: MenuProvider,
  });

const userEvent = testingUserEvent.setup();

export {
  userEvent,
  renderWithTheme,
  screen,
  renderHook,
  fireEvent,
  act,
  waitFor,
};
