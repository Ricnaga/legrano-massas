import { act, renderHook } from '@testing-library/react';
import { ResultHook } from '../../../../../shared/utils/types';
import { useMenuDoughs } from './useMenuDoughs';

jest.mock('../../../../../application/menu/hooks/useMenuContext', () => ({
  __esModule: true,
  useMenuContext: () => ({
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
    functions: { dispatchMenu: jest.fn() },
  }),
}));

describe('useMenuDoughs Hook', () => {
  let resultHook: ResultHook<typeof useMenuDoughs>;

  beforeEach(() => {
    const { result } = renderHook(() => useMenuDoughs());
    resultHook = result;
  });

  it('should be able to get data from hook', () => {
    expect(resultHook.current.data.imageListCols).toEqual(1);
  });

  it('should be able to get functions from hook', () => {
    const spy = jest.spyOn(resultHook.current.functions, 'onAddItemToCart');
    act(() =>
      resultHook.current.functions.onAddItemToCart(
        'mock categoryId',
        'mock itemId',
      ),
    );
    expect(spy).toHaveBeenCalled();
  });
});
