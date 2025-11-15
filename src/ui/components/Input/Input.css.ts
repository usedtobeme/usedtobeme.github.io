import { tokens } from '@ui/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const inputBase = style({
  display: 'flex',
  width: '100%',
  borderRadius: tokens.borderRadius.md,
  border: `1px solid ${tokens.colors.semantic.border}`,
  backgroundColor: tokens.colors.semantic.background,
  color: tokens.colors.semantic.foreground,
  fontSize: tokens.typography.fontSize.sm,
  transition: 'all 0.2s ease-in-out',
  outline: 'none',

  '::placeholder': {
    color: tokens.colors.semantic.mutedForeground,
  },

  ':focus': {
    borderColor: tokens.colors.semantic.ring,
    boxShadow: `0 0 0 2px ${tokens.colors.semantic.ring}20`,
  },

  ':disabled': {
    cursor: 'not-allowed',
    opacity: '0.5',
  },

  selectors: {
    '&[data-invalid="true"]': {
      borderColor: tokens.colors.semantic.destructive,
    },
    '&[data-invalid="true"]:focus': {
      borderColor: tokens.colors.semantic.destructive,
      boxShadow: `0 0 0 2px ${tokens.colors.semantic.destructive}20`,
    },
  },
});

const inputSizes = styleVariants({
  sm: {
    height: '2.25rem',
    padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
    fontSize: tokens.typography.fontSize.xs,
  },
  md: {
    height: '2.5rem',
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    fontSize: tokens.typography.fontSize.sm,
  },
  lg: {
    height: '2.75rem',
    padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
    fontSize: tokens.typography.fontSize.base,
  },
});

export const input = recipe({
  base: inputBase,
  variants: {
    size: inputSizes,
  },
  defaultVariants: {
    size: 'md',
  },
});
