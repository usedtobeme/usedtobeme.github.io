import { style } from '@vanilla-extract/css';
import { tokens } from '@ui/tokens.css';

export const blogGrid = style({
  display: 'grid',
  gap: tokens.spacing.lg,
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
});

export const blogLink = style({
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  height: '100%',
  transition: 'transform 0.2s ease',
  
  ':hover': {
    transform: 'translateY(-2px)',
  },
});

export const meta = style({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.spacing.xs,
  marginBottom: tokens.spacing.sm,
});

export const tagsContainer = style({
  display: 'flex',
  gap: tokens.spacing.xs,
  flexWrap: 'wrap',
  marginTop: tokens.spacing.sm,
});