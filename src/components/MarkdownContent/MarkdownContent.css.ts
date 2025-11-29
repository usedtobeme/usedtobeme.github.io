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
  color: tokens.colors.semantic.foreground,
  padding: '0.125rem 0.375rem',
  borderRadius: tokens.borderRadius.md,
  fontSize: '0.875em',
  fontFamily: tokens.typography.fontFamily.mono,
  border: `1px solid ${tokens.colors.semantic.border}`,
  fontWeight: tokens.typography.fontWeight.medium,
});

globalStyle(`${markdownWrapper} pre`, {
  backgroundColor: tokens.colors.semantic.card,
  padding: tokens.spacing.lg,
  borderRadius: tokens.borderRadius.lg,
  overflow: 'auto',
  marginBottom: tokens.spacing.lg,
  border: `1px solid ${tokens.colors.semantic.border}`,
  boxShadow: tokens.shadows.sm,
  position: 'relative',
});

globalStyle(`${markdownWrapper} pre code`, {
  backgroundColor: 'transparent',
  padding: 0,
  border: 'none',
  fontSize: tokens.typography.fontSize.sm,
  lineHeight: tokens.typography.lineHeight.relaxed,
  fontWeight: tokens.typography.fontWeight.normal,
});

globalStyle(`${markdownWrapper} blockquote`, {
  borderLeft: `4px solid ${tokens.colors.semantic.accent}`,
  paddingLeft: tokens.spacing.lg,
  paddingRight: tokens.spacing.md,
  paddingTop: tokens.spacing.sm,
  paddingBottom: tokens.spacing.sm,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: tokens.spacing.lg,
  marginTop: tokens.spacing.lg,
  backgroundColor: tokens.colors.semantic.muted,
  borderRadius: tokens.borderRadius.md,
  fontStyle: 'italic',
  fontSize: tokens.typography.fontSize.lg,
  lineHeight: tokens.typography.lineHeight.relaxed,
  color: tokens.colors.semantic.mutedForeground,
  position: 'relative',
});

globalStyle(`${markdownWrapper} a`, {
  color: tokens.colors.semantic.accent,
  textDecoration: 'underline',
});

globalStyle(`${markdownWrapper} a:hover`, {
  color: tokens.colors.semantic.accentForeground,
});
