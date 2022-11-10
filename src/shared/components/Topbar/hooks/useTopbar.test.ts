import { useTopbar } from './useTopbar';
import { ResultHook } from '../../../utils/types';
import { act, renderHook } from '../../../../application/test/testing-library';
import { MenuReducerData } from '../../../../application/menu/menuReducer';

let resultHook: ResultHook<typeof useTopbar>;

jest.mock('../../../../application/menu/hooks/useMenuContext', () => ({
  __esModule: true,
  useMenuContext: () => ({
    data: {
      menuState: [
        {
          category: 'mocked category',
          id: 'categoryId1',
          items: [
            {
              amount: 1,
              id: 'itemId1',
              name: 'items name',
              price: 10,
              selected: true,
              weight: '10kg',
            },
          ],
        },
      ] as Array<MenuReducerData>,
    },
    functions: { dispatchMenu: jest.fn() },
  }),
}));

describe('useTopbar Hook', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useTopbar());
    resultHook = result;
  });

  it('should test modal state', () => {
    act(() => resultHook.current.functions.openDrawer());
    expect(resultHook.current.data.isOpenDrawer).toBeTruthy();

    act(() => resultHook.current.functions.closeDrawer());
    expect(resultHook.current.data.isOpenDrawer).toBeFalsy();
  });

  it('should test addAmountToCartItem function', () => {
    const spy = jest.spyOn(resultHook.current.functions, 'addAmountToCartItem');
    act(() =>
      resultHook.current.functions.addAmountToCartItem(
        'categoryId1',
        'itemId1',
      ),
    );

    expect(spy).toHaveBeenCalled();
  });

  it('should test removeAmountToCartItem function', () => {
    const spy = jest.spyOn(
      resultHook.current.functions,
      'removeAmountToCartItem',
    );
    act(() =>
      resultHook.current.functions.removeAmountToCartItem(
        'categoryId1',
        'itemId1',
      ),
    );

    expect(spy).toHaveBeenCalled();
  });

  it('should test clearItemsFromCart function', () => {
    const spy = jest.spyOn(resultHook.current.functions, 'clearItemsFromCart');
    act(() => resultHook.current.functions.clearItemsFromCart());

    expect(spy).toHaveBeenCalled();
  });

  it('should test cartItemsLength', () => {
    expect(resultHook.current.data.cartItemsLength).toBe(1);
  });
});
