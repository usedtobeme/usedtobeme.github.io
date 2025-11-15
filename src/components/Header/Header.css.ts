import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 50,
  width: '100%',
  backgroundColor: vars.color.background,
  backdropFilter: 'blur(8px)',
});

export const container = style({
  display: 'flex',
  height: '3.5rem',
  alignItems: 'center',
  justifyContent: 'flex-end',
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
  color: vars.color.foreground,
});

export const brandText = style({
  display: 'none',
  fontWeight: 'bold',
  fontSize: vars.fontSize.xl,
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
  borderRadius: vars.radius.md,
  backgroundColor: 'transparent',
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  fontSize: vars.fontSize.sm,
  fontWeight: '500',
  textDecoration: 'none',
  color: vars.color.foreground,
  transition: 'all 0.2s ease',
  cursor: 'pointer',
  outline: 'none',
  gap: vars.spacing.sm,

  ':hover': {
    backgroundColor: vars.color.accent,
    color: vars.color.accentForeground,
  },

  ':focus': {
    backgroundColor: vars.color.accent,
    color: vars.color.accentForeground,
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
  borderRadius: vars.radius.md,
  backgroundColor: 'transparent',
  padding: vars.spacing.xs,
  textDecoration: 'none',
  color: vars.color.foreground,
  cursor: 'pointer',
  outline: 'none',

  ':hover': {
    backgroundColor: vars.color.accent,
    color: vars.color.accentForeground,
  },

  ':focus': {
    backgroundColor: vars.color.accent,
    color: vars.color.accentForeground,
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
  fontWeight: 'bold',
  fontSize: vars.fontSize.lg,
  textDecoration: 'none',
  color: vars.color.foreground,
});

export const headerIcon = style({
  width: '32px',
  height: '32px',
});
