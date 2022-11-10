import { Topbar } from './Topbar';
import { renderWithTheme } from '../../../application/test/testing-library';

describe('Component: Topbar', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Topbar />);
    expect(container).toMatchSnapshot();
  });
});
