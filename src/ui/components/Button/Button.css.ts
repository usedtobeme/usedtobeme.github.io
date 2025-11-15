import { tokens } from '@ui/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.borderRadius.md,
  fontWeight: tokens.typography.fontWeight.medium,
  transition: 'all 0.2s ease-in-out',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',

  ':focus-visible': {
    outline: `2px solid ${tokens.colors.semantic.ring}`,
    outlineOffset: '2px',
  },

  ':disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
});

const buttonVariants = styleVariants({
  primary: {
    backgroundColor: tokens.colors.semantic.primary,
    color: tokens.colors.semantic.primaryForeground,

    ':hover': {
      opacity: '0.9',
    },
  },
  secondary: {
    backgroundColor: tokens.colors.semantic.secondary,
    color: tokens.colors.semantic.secondaryForeground,
    border: `1px solid ${tokens.colors.semantic.border}`,

    ':hover': {
      backgroundColor: tokens.colors.semantic.accent,
      color: tokens.colors.semantic.accentForeground,
    },
  },
  destructive: {
    backgroundColor: tokens.colors.semantic.destructive,
    color: tokens.colors.semantic.destructiveForeground,

    ':hover': {
      opacity: '0.9',
    },
  },
  outline: {
    border: `1px solid ${tokens.colors.semantic.border}`,
    backgroundColor: 'transparent',
    color: tokens.colors.semantic.foreground,

    ':hover': {
      backgroundColor: tokens.colors.semantic.accent,
      color: tokens.colors.semantic.accentForeground,
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: tokens.colors.semantic.foreground,

    ':hover': {
      backgroundColor: tokens.colors.semantic.accent,
      color: tokens.colors.semantic.accentForeground,
    },
  },
});

const buttonSizes = styleVariants({
  sm: {
    height: '2.25rem',
    padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
    fontSize: tokens.typography.fontSize.sm,
  },
  md: {
    height: '2.5rem',
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    fontSize: tokens.typography.fontSize.base,
  },
  lg: {
    height: '2.75rem',
    padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
    fontSize: tokens.typography.fontSize.lg,
  },
  icon: {
    height: '2.5rem',
    width: '2.5rem',
    padding: '0',
  },
});

export const button = recipe({
  base: buttonBase,
  variants: {
    variant: buttonVariants,
    size: buttonSizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
