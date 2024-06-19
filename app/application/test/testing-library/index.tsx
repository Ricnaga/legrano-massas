import { ComposeProviders } from '@/app/contexts/compose';
import { RenderResult, render } from '@testing-library/react';
import testingUserEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ComposeProviders>{children}</ComposeProviders>);

const userEvent = testingUserEvent.setup();

export * from '@testing-library/react';

export { renderWithTheme, userEvent };
