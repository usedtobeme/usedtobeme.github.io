import { tokens } from '@ui/tokens.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'fixed',
  top: 0,
  zIndex: 50,
  width: '100%',
  backdropFilter: 'blur(8px)',
});

export const container = style({
  display: 'flex',
  height: '3.5rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '0 1.5rem',
});

export const brand = style({
  marginRight: '1rem',
  display: 'none',
  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const brandLink = style({
  marginRight: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  color: tokens.colors.semantic.foreground,
});

export const brandText = style({
  display: 'none',
  fontWeight: tokens.typography.fontWeight.bold,
  fontSize: tokens.typography.fontSize.xl,
  '@media': {
    '(min-width: 640px)': {
      display: 'inline-block',
    },
  },
});

export const navigationRoot = style({
  position: 'relative',
  zIndex: 10,
  display: 'flex',
  maxWidth: 'max-content',
  alignItems: 'center',
});

export const navigationList = style({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  gap: '0.5rem',
  margin: 0,
  padding: 0,
});

export const navigationLink = style({
  display: 'inline-flex',
  height: '2.25rem',
  width: 'max-content',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.borderRadius.md,
  backgroundColor: 'transparent',
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  fontSize: tokens.typography.fontSize.sm,
  fontWeight: '500',
  textDecoration: 'none',
  color: tokens.colors.semantic.foreground,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  outline: 'none',
  gap: tokens.spacing.sm,

  ':hover': {
    backgroundColor: tokens.colors.semantic.accent,
    color: tokens.colors.semantic.accentForeground,
  },

  ':focus': {
    backgroundColor: tokens.colors.semantic.accent,
    color: tokens.colors.semantic.accentForeground,
    outline: 'none',
  },

  selectors: {
    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
});

export const iconOnlyLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: tokens.borderRadius.md,
  backgroundColor: 'transparent',
  padding: tokens.spacing.xs,
  textDecoration: 'none',
  color: tokens.colors.semantic.foreground,
  cursor: 'pointer',
  outline: 'none',

  ':hover': {
    backgroundColor: tokens.colors.semantic.accent,
    color: tokens.colors.semantic.accentForeground,
  },

  ':focus': {
    backgroundColor: tokens.colors.semantic.accent,
    color: tokens.colors.semantic.accentForeground,
    outline: 'none',
  },

  selectors: {
    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
});

export const mobileContainer = style({
  display: 'flex',
  flex: '1 1 0%',
  alignItems: 'center',
  gap: '0.5rem',
  justifyContent: 'flex-end',
  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
});

export const mobileBrandLink = style({
  fontWeight: tokens.typography.fontWeight.bold,
  fontSize: tokens.typography.fontSize.lg,
  textDecoration: 'none',
  color: tokens.colors.semantic.foreground,
});

export const headerIcon = style({
  width: '32px',
  height: '32px',
});
