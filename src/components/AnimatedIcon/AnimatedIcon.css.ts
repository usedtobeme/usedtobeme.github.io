import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  // Reset default button styles
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  color: 'inherit',
});

export const sizeVariants = styleVariants({
  small: {
    width: '18px',
    height: '18px',
  },
  medium: {
    width: '20px',
    height: '20px',
  },
  large: {
    width: '24px',
    height: '24px',
  },
  xlarge: {
    width: '32px',
    height: '32px',
  },
});

export const iconContainer = style({
  width: '100%',
  height: '100%',
  transition: 'all 0.3s ease',

  selectors: {
    '[data-hovered="true"] &': {
      filter: 'brightness(1.2)',
    },
  },
});
