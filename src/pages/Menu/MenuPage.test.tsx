import { renderWithTheme } from '../../application/test/testing-library';
import { MenuPage } from './MenuPage';

jest.mock('./components/MenuDoughs/MenuDoughs', () => ({
  __esModule: true,
  MenuDoughs: () => <div>Mock MenuDoughs</div>,
}));

describe('Page: MenuPage', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MenuPage />);
    expect(container).toMatchSnapshot();
  });
});
