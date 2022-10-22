import { render } from '@testing-library/react';
import { MenuPage } from './MenuPage';

jest.mock('./components/MenuDoughs', () => ({
  __esModule: true,
  MenuDoughs: () => <div>Mock MenuDoughs</div>,
}));

describe('Page: MenuPage', () => {
  it('should render correctly', () => {
    const { container } = render(<MenuPage />);
    expect(container).toMatchSnapshot();
  });
});
