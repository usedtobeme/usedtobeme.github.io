import { tokens } from '@ui/tokens.css';
import { style } from '@vanilla-extract/css';

export const article = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 1rem',
});

export const backLink = style({
  textDecoration: 'none',
  marginBottom: '2rem',
  display: 'inline-block',
  color: tokens.colors.semantic.foreground,
  fontSize: tokens.typography.fontSize.sm,
  transition: 'color 0.2s ease',

  ':hover': {
    color: tokens.colors.semantic.accent,
  },
});

export const header = style({
  marginBottom: '2rem',
});

export const title = style({
  marginBottom: '1rem',
  fontSize: tokens.typography.fontSize['2xl'],
  fontWeight: tokens.typography.fontWeight.bold,
  lineHeight: tokens.typography.lineHeight.tight,
});

export const meta = style({
  marginBottom: '1rem',
});

export const tagsContainer = style({
  display: 'flex',
  gap: '0.5rem',
  flexWrap: 'wrap',
});

export const tag = style({
  backgroundColor: tokens.colors.semantic.accent,
  color: tokens.colors.semantic.accentForeground,
  padding: '0.25rem 0.5rem',
  borderRadius: tokens.borderRadius.sm,
  fontSize: tokens.typography.fontSize.xs,
});

export const content = style({
  lineHeight: '1.6',
  fontSize: '1.1rem',
});
