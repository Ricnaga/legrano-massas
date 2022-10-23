import { renderWithTheme } from '../../application/test/testing-library';
import { HomePage } from './HomePage';

describe('Page: HomePage', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
