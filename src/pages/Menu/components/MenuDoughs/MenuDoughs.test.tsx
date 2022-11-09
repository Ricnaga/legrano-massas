import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuDoughs } from './MenuDoughs';
import { renderWithTheme } from '../../../../application/test/testing-library';

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
    const user = userEvent.setup();
    const buttonTextState = {
      before: 'Colocar no carrinho',
      after: 'Adicionado no carrinho',
    };
    const firstButton = screen.getAllByText(buttonTextState.before)[0];

    await user.click(firstButton);
    expect(screen.getByText(buttonTextState.after)).toBeInTheDocument();
  });
});
