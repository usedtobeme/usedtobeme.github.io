import { tokens } from '@ui/tokens.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const markdownWrapper = style({
  lineHeight: '1.6',
  fontSize: '1.1rem',
  color: tokens.colors.semantic.foreground,
});

// Global styles for markdown elements within the wrapper
globalStyle(`${markdownWrapper} h1`, {
  fontSize: tokens.typography.fontSize.xl,
  fontWeight: tokens.typography.fontWeight.bold,
  marginTop: '2rem',
  marginBottom: '1rem',
  color: tokens.colors.semantic.foreground,
});

globalStyle(`${markdownWrapper} h2`, {
  fontSize: tokens.typography.fontSize.lg,
  fontWeight: tokens.typography.fontWeight.semibold,
  marginTop: '1.5rem',
  marginBottom: '0.75rem',
  color: tokens.colors.semantic.foreground,
});

globalStyle(`${markdownWrapper} h3`, {
  fontSize: tokens.typography.fontSize.base,
  fontWeight: tokens.typography.fontWeight.medium,
  marginTop: '1.25rem',
  marginBottom: '0.5rem',
  color: tokens.colors.semantic.foreground,
});

globalStyle(`${markdownWrapper} p`, {
  marginBottom: '1rem',
  color: tokens.colors.semantic.foreground,
});

globalStyle(`${markdownWrapper} ul`, {
  marginBottom: '1rem',
  paddingLeft: '1.5rem',
});

globalStyle(`${markdownWrapper} ol`, {
  marginBottom: '1rem',
  paddingLeft: '1.5rem',
});

globalStyle(`${markdownWrapper} li`, {
  marginBottom: '0.25rem',
  color: tokens.colors.semantic.foreground,
});

globalStyle(`${markdownWrapper} code`, {
  backgroundColor: tokens.colors.semantic.muted,
  color: tokens.colors.semantic.mutedForeground,
  padding: '0.125rem 0.25rem',
  borderRadius: tokens.borderRadius.sm,
  fontSize: '0.9em',
  fontFamily: tokens.typography.fontFamily.mono,
});

globalStyle(`${markdownWrapper} pre`, {
  backgroundColor: tokens.colors.semantic.muted,
  padding: '1rem',
  borderRadius: tokens.borderRadius.lg,
  overflow: 'auto',
  marginBottom: '1rem',
});

globalStyle(`${markdownWrapper} pre code`, {
  backgroundColor: 'transparent',
  padding: 0,
});

globalStyle(`${markdownWrapper} blockquote`, {
  borderLeft: `4px solid ${tokens.colors.semantic.accent}`,
  paddingLeft: '1rem',
  marginLeft: 0,
  marginBottom: '1rem',
  fontStyle: 'italic',
  color: tokens.colors.semantic.mutedForeground,
});

globalStyle(`${markdownWrapper} a`, {
  color: tokens.colors.semantic.accent,
  textDecoration: 'underline',
});

globalStyle(`${markdownWrapper} a:hover`, {
  color: tokens.colors.semantic.accentForeground,
});
