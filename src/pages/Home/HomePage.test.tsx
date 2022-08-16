import React from 'react';
import { renderWithTheme } from '../../application/test/testing-library';
import { HomePage } from './HomePage';

describe('HOME SCREEN', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
