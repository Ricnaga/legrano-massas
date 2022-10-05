import { renderWithTheme } from 'application/test/testing-library';
import { MenuPage } from './MenuPage';

jest.mock('./components/MenuDoughs', () => ({
  __esModule: true,
  MenuDoughs: () => <div>MenuDoughs</div>,
}));

describe('MENU SCREEN', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MenuPage />);
    expect(container).toMatchSnapshot();
  });
});
