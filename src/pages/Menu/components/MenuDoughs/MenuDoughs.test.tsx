import {
  renderWithTheme,
  userEvent,
  screen,
} from '@application/test/testing-library';
import { MenuDoughs } from './MenuDoughs';

let containerTheme: HTMLElement;
describe('Components: MenuDoughs', () => {
  beforeEach(() => {
    const { container } = renderWithTheme(<MenuDoughs />);
    containerTheme = container;
  });

  it('should render correctly', () => {
    expect(containerTheme).toMatchSnapshot();
  });

  it('should test addToCart button', async () => {
    const buttonTextState = {
      before: 'Colocar no carrinho',
      after: 'Adicionado no carrinho',
    };
    const firstButton = screen.getAllByText(buttonTextState.before)[0];

    await userEvent.click(firstButton);
    expect(screen.getByText(buttonTextState.after)).toBeInTheDocument();
  });
});
