import { tokens } from '@ui/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const cardBase = style({
  borderRadius: tokens.borderRadius.lg,
  border: `1px solid ${tokens.colors.semantic.border}`,
  backgroundColor: tokens.colors.semantic.card,
  color: tokens.colors.semantic.cardForeground,
  boxShadow: tokens.shadows.sm,
});

const cardVariants = styleVariants({
  default: {
    padding: tokens.spacing.lg,
  },
  compact: {
    padding: tokens.spacing.md,
  },
  spacious: {
    padding: tokens.spacing.xl,
  },
});

export const card = recipe({
  base: cardBase,
  variants: {
    variant: cardVariants,
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  spaceY: tokens.spacing.xs,
  paddingBottom: tokens.spacing.lg,
});

export const cardTitle = style({
  fontSize: tokens.typography.fontSize.lg,
  fontWeight: tokens.typography.fontWeight.semibold,
  lineHeight: tokens.typography.lineHeight.tight,
  color: tokens.colors.semantic.cardForeground,
});

export const cardDescription = style({
  fontSize: tokens.typography.fontSize.sm,
  color: tokens.colors.semantic.mutedForeground,
  lineHeight: tokens.typography.lineHeight.normal,
});

export const cardContent = style({
  paddingTop: '0',
});

export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: tokens.spacing.lg,
});
