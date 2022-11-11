import { renderWithTheme } from '@application/test/testing-library';
import { MenuPage } from './MenuPage';

describe('Page: MenuPage', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MenuPage />);
    expect(container).toMatchSnapshot();
  });
});
