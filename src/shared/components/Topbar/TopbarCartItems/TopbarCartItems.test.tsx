import { waitFor } from '@testing-library/react';
import {
  renderWithTheme,
  screen,
  userEvent,
} from '../../../../application/test/testing-library';
import { TopbarCartItems } from './TopbarCartItems';
import { MenuReducerData } from '../../../../application/menu/menuReducer';

let cartItems: Array<MenuReducerData> = [
  {
    category: 'mocked category',
    id: String(1),
    items: [
      {
        amount: 1,
        id: String(1),
        name: 'items name',
        price: 10,
        selected: false,
        weight: '10kg',
      },
    ],
  },
];

const mockedAddAmount = () => {
  cartItems = cartItems.map((cart) => ({
    ...cart,
    items: cart.items.map((item) => ({ ...item, amount: item.amount + 1 })),
  }));
};

const mockedRemoveAmount = () => {
  cartItems = cartItems.map((cart) => ({
    ...cart,
    items: cart.items.map((item) => ({ ...item, amount: item.amount - 1 })),
  }));
};

let containerComp: HTMLElement;
let unMountComponent: () => void;

describe('Component: TopbarCartItems', () => {
  beforeEach(() => {
    const { container, unmount } = renderWithTheme(
      <TopbarCartItems
        addAmount={mockedAddAmount}
        whatsAppText=""
        cartItems={cartItems}
        clearItems={jest.fn()}
        removeAmount={mockedRemoveAmount}
        totalPrice="mocked totalPrice"
      />,
    );
    containerComp = container;
    unMountComponent = unmount;
  });

  it('should render correctly', () => {
    expect(containerComp).toMatchSnapshot();
  });

  it('should test addAmount function', async () => {
    await userEvent.click(screen.getByTestId('AddIcon'));

    waitFor(() => expect(screen.getByText(/x2/i)).toBeInTheDocument());
  });

  it('should test removeAmount function', async () => {
    await userEvent.click(screen.getByTestId('RemoveIcon'));
    waitFor(() => expect(screen.getByText(/x1/i)).toBeInTheDocument());
  });

  it('should test empty cart', async () => {
    unMountComponent();
    renderWithTheme(
      <TopbarCartItems
        addAmount={jest.fn()}
        whatsAppText=""
        cartItems={[]}
        clearItems={jest.fn()}
        removeAmount={jest.fn()}
        totalPrice="mocked totalPrice"
      />,
    );

    expect(
      screen.getByRole('heading', {
        name: /carrinho vazio!/i,
      }),
    ).toBeInTheDocument();
  });
});
