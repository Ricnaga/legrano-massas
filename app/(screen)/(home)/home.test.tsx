import { renderWithTheme } from '@/app/application/test/testing-library';
import Home from './page';

describe('Page: Home', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Home />);
    expect(container).toMatchSnapshot();
  });
});
