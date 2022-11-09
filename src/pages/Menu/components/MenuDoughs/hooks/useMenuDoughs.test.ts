import { act, renderHook } from '@testing-library/react';
import { ResultHook } from '../../../../../shared/utils/types';
import { useMenuDoughs } from './useMenuDoughs';
import { MenuProvider } from '../../../../../application/menu';

let resultHook: ResultHook<typeof useMenuDoughs>;

jest.mock('@mui/material', () => ({
  __esModule: true,
  useTheme: () => ({
    breakpoints: {
      up: jest.fn(),
    },
  }),
  useMediaQuery: jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false),
}));

describe('useMenuDoughs Hook', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useMenuDoughs(), {
      wrapper: MenuProvider,
    });
    resultHook = result;
  });

  it('should test addToCart Function', () => {
    const spy = jest.spyOn(resultHook.current.functions, 'onAddItemToCart');
    act(() =>
      resultHook.current.functions.onAddItemToCart(
        'mock categoryId',
        'mock itemId',
      ),
    );
    expect(spy).toHaveBeenCalled();
  });

  it('should test desktop resolution with useMediaQuery', () => {
    expect(resultHook.current.data.imageListCols).toBe(3);
  });

  it('should test mobile resolution with useMediaQuery', () => {
    expect(resultHook.current.data.imageListCols).toBe(1);
  });
});
