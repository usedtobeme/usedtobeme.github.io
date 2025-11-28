import { globalStyle } from '@vanilla-extract/css';
import { tokens } from '../ui/tokens.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: tokens.colors.semantic.border,
});

globalStyle('html', {
  margin: 0,
  padding: 0,
  height: '100%',
  backgroundColor: 'hsl(282, 100%, 16%)', // Set immediately to prevent flash
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  backgroundColor: tokens.colors.semantic.background,
  color: tokens.colors.semantic.foreground,
  fontFamily: 'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
  letterSpacing: '0.025em',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('#root', {
  minHeight: '100vh',
});

globalStyle('a', {
  fontWeight: '500',
  color: tokens.colors.semantic.primary,
  textDecoration: 'inherit',
});

globalStyle('a:hover', {
  color: tokens.colors.semantic.accent,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: '700',
  lineHeight: '1.2',
  letterSpacing: '0.01em',
});

globalStyle('button', {
  borderRadius: tokens.borderRadius.md,
  border: `1px solid transparent`,
  padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
  fontSize: tokens.typography.fontSize.base,
  fontWeight: '500',
  fontFamily: 'inherit',
  letterSpacing: '0.025em',
  backgroundColor: tokens.colors.semantic.primary,
  color: tokens.colors.semantic.primaryForeground,
  cursor: 'pointer',
  transition: 'border-color 0.25s, background-color 0.25s, color 0.25s',
});

globalStyle('button:hover', {
  backgroundColor: tokens.colors.semantic.accent,
  color: tokens.colors.semantic.accentForeground,
});

globalStyle('button:focus, button:focus-visible', {
  outline: `2px solid ${tokens.colors.semantic.ring}`,
  outlineOffset: '2px',
});
