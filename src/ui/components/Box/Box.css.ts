import { style } from '@vanilla-extract/css';

export const box = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  background: 'none',
  overflow: 'visible',
  margin: 0,
  padding: 0,
});

export const scrollableBox = style([
  box,
  {
    height: '100%',
    overflow: 'auto',

    // Custom scrollbar styling for webkit browsers
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
    },
    '::-webkit-scrollbar-button': {
      display: 'none',
      width: 0,
      height: 0,
    },

    // Firefox scrollbar styling
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
  },
]);
