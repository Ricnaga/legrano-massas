import { MenuDoughs } from '.';
import { renderWithTheme } from '../../../../application/test/testing-library';

jest.mock('./hooks/useMenuDoughs', () => ({
  __esModule: true,
  useMenuDoughs: () => ({
    data: {
      menuState: [
        {
          id: 'mock id',
          category: 'mock category',
          items: [
            {
              id: 'mock id',
              name: 'mock name',
              price: 1,
              weight: 'mock weight',
              amount: 1,
              selected: false,
            },
          ],
        },
      ],
    },
    functions: { onAddItemToCart: jest.fn() },
  }),
}));

describe('MenuDoughs component', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<MenuDoughs />);
    expect(container).toMatchSnapshot();
  });
});
