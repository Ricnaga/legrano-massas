import { renderWithTheme } from '@application/test/testing-library';
import { Topbar } from './Topbar';

describe('Component: Topbar', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Topbar />);
    expect(container).toMatchSnapshot();
  });
});
