import { style } from '@vanilla-extract/css';

export const backgroundContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  pointerEvents: 'none',
});

export const canvas = style({
  width: '100%',
  height: '100%',
});
