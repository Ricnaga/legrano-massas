import { keyframes } from '@vanilla-extract/css';

export const slideInFromLeft = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const slideOutFromLeft = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-100%)' },
});

export const slideInFromRight = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const slideOutFromRight = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(100%)' },
});

export const slideInFromTop = keyframes({
  '0%': { transform: 'translateY(-100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const slideOutFromTop = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(-100%)' },
});

export const slideInFromBottom = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
});

export const slideOutFromBottom = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(100%)' },
});
