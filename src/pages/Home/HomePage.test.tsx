import { render } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('Page: HomePage', () => {
  it('should render correctly', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
