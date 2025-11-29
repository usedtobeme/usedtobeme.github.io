import { tokens } from '@ui/tokens.css';
import { style } from '@vanilla-extract/css';

export const profileContainer = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: tokens.spacing.lg,
  maxWidth: '1200px',
  margin: '0 auto',
  padding: tokens.spacing.xl,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const leftColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.lg,
});

export const rightColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.lg,
});

export const nameSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.sm,
});

export const contactItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: tokens.spacing.sm,
  marginTop: tokens.spacing.sm,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  color: tokens.colors.semantic.primary,
});

export const skillsSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.md,
});

export const skillCategory = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.sm,
});

export const skillsGrid = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: tokens.spacing.sm,
});

export const experienceItem = style({
  paddingBottom: tokens.spacing.xl,
  borderBottom: `1px solid ${tokens.colors.semantic.border}`,
  ':last-child': {
    borderBottom: 'none',
    paddingBottom: 0,
  },
});

export const experienceHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: tokens.spacing.md,
  '@media': {
    '(max-width: 640px)': {
      flexDirection: 'column',
      gap: tokens.spacing.xs,
    },
  },
});

export const experienceHighlights = style({
  marginTop: tokens.spacing.md,
  paddingLeft: tokens.spacing.xl,
  listStyle: 'disc',
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.sm,
});

export const educationItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.sm,
  marginBottom: tokens.spacing.lg,
  ':last-child': {
    marginBottom: 0,
  },
});

export const sectionTitle = style({
  paddingLeft: tokens.spacing.lg,
  paddingRight: tokens.spacing.lg,
  marginBottom: tokens.spacing.xs,
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.sm,
});
