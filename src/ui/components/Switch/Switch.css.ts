import { tokens } from '@ui/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const switchRootBase = style({
  width: '42px',
  height: '25px',
  backgroundColor: tokens.colors.semantic.input,
  borderRadius: tokens.borderRadius.full,
  position: 'relative',
  border: `1px solid ${tokens.colors.semantic.border}`,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: tokens.colors.semantic.primary,
      borderColor: tokens.colors.semantic.primary,
    },
    '&:focus-visible': {
      outline: `2px solid ${tokens.colors.semantic.ring}`,
      outlineOffset: '2px',
    },
    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
});

const switchThumbBase = style({
  display: 'block',
  width: '21px',
  height: '21px',
  backgroundColor: tokens.colors.semantic.background,
  borderRadius: tokens.borderRadius.full,
  boxShadow: tokens.shadows.sm,
  transition: 'transform 0.2s ease-in-out',
  transform: 'translateX(2px)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(19px)',
    },
  },
});

const switchSizes = styleVariants({
  sm: {
    width: '32px',
    height: '18px',
  },
  md: {
    width: '42px',
    height: '25px',
  },
  lg: {
    width: '52px',
    height: '32px',
  },
});

const switchThumbSizes = styleVariants({
  sm: {
    width: '14px',
    height: '14px',
    transform: 'translateX(2px)',
    selectors: {
      '&[data-state="checked"]': {
        transform: 'translateX(16px)',
      },
    },
  },
  md: {
    width: '21px',
    height: '21px',
    transform: 'translateX(2px)',
    selectors: {
      '&[data-state="checked"]': {
        transform: 'translateX(19px)',
      },
    },
  },
  lg: {
    width: '28px',
    height: '28px',
    transform: 'translateX(2px)',
    selectors: {
      '&[data-state="checked"]': {
        transform: 'translateX(22px)',
      },
    },
  },
});

export const switchRoot = recipe({
  base: switchRootBase,
  variants: {
    size: switchSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});

export const switchThumb = recipe({
  base: switchThumbBase,
  variants: {
    size: switchThumbSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});
