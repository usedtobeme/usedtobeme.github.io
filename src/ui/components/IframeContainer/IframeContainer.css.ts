import { tokens } from '@ui/tokens.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: tokens.colors.semantic.card,
  border: `1px solid ${tokens.colors.semantic.border}`,
  borderRadius: tokens.borderRadius.lg,
  overflow: 'hidden',
  width: '100%',
  height: '80vh',
});

export const iframe = style({
  width: '100%',
  height: '100%',
  border: 'none',
});
