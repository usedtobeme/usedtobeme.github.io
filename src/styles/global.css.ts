import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: vars.color.border,
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
});

globalStyle('body', {
  backgroundColor: vars.color.background,
  color: vars.color.foreground,
  fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  lineHeight: '1.5',
  fontWeight: '400',
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
  color: vars.color.primary,
  textDecoration: 'inherit',
});

globalStyle('a:hover', {
  color: vars.color.accent,
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: '700',
  lineHeight: '1.2',
});

globalStyle('button', {
  borderRadius: vars.radius.md,
  border: `1px solid transparent`,
  padding: `${vars.spacing.sm} ${vars.spacing.lg}`,
  fontSize: vars.fontSize.base,
  fontWeight: '500',
  fontFamily: 'inherit',
  backgroundColor: vars.color.primary,
  color: vars.color.primaryForeground,
  cursor: 'pointer',
  transition: 'border-color 0.25s, background-color 0.25s, color 0.25s',
});

globalStyle('button:hover', {
  backgroundColor: vars.color.accent,
  color: vars.color.accentForeground,
});

globalStyle('button:focus, button:focus-visible', {
  outline: `2px solid ${vars.color.ring}`,
  outlineOffset: '2px',
});
