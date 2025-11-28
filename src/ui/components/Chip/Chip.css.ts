import { style, styleVariants } from '@vanilla-extract/css';
import { tokens } from '../../tokens.css';

export const chip = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.borderRadius.full,
  fontWeight: tokens.typography.fontWeight.medium,
  transition: 'all 0.2s ease',
  whiteSpace: 'nowrap',
});

export const variants = styleVariants({
  default: {
    backgroundColor: tokens.colors.semantic.muted,
    color: tokens.colors.semantic.mutedForeground,
  },
  primary: {
    backgroundColor: tokens.colors.semantic.primary,
    color: tokens.colors.semantic.primaryForeground,
  },
  secondary: {
    backgroundColor: tokens.colors.semantic.accent,
    color: tokens.colors.semantic.accentForeground,
  },
});

export const sizes = styleVariants({
  small: {
    padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
    fontSize: tokens.typography.fontSize.xs,
  },
  medium: {
    padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
    fontSize: tokens.typography.fontSize.sm,
  },
});