import { renderHook } from '@testing-library/react';
import { ResultHook } from '@shared/utils/types';
import { useTopbarCartItems } from './useTopbarCartItems';

let resultHook: ResultHook<typeof useTopbarCartItems>;

jest.mock('@mui/material', () => ({
  __esModule: true,
  useTheme: () => ({
    breakpoints: {
      down: jest.fn(),
    },
  }),
  useMediaQuery: jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false),
}));

describe('useTopbarCartItems Hook', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useTopbarCartItems());
    resultHook = result;
  });

  it('should test desktop resolution with useMediaQuery', () => {
    expect(resultHook.current.data.drawerOnMObile).toBe('100vw');
  });

  it('should test mobile resolution with useMediaQuery', () => {
    expect(resultHook.current.data.drawerOnMObile).toBe('100%');
  });
});
