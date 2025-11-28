import { tokens } from '@ui/tokens.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const cardBase = style({
  borderRadius: tokens.borderRadius.lg,
  color: tokens.colors.semantic.cardForeground,
  
  // Liquid glass background
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  
  // Gradient overlay for more depth
  position: 'relative',
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    borderRadius: tokens.borderRadius.lg,
    pointerEvents: 'none',
    zIndex: -1,
  },
});

const cardVariants = styleVariants({
  default: {
    padding: tokens.spacing.lg,
  },
  compact: {
    padding: tokens.spacing.md,
  },
  spacious: {
    padding: tokens.spacing.xl,
  },
});

const cardSizeVariants = styleVariants({
  default: {},
  large: {
    height: '90dvh',
    maxHeight: '90dvh',
    padding:
      'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
    paddingTop: 'calc(env(safe-area-inset-top) + 2rem)',
    overflow: 'auto',
    borderRadius: tokens.borderRadius.xl,

    // Custom scrollbar styling for webkit browsers
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
    },
    '::-webkit-scrollbar-button': {
      display: 'none',
      width: 0,
      height: 0,
    },

    // Firefox scrollbar styling
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)',
    
    // Update the gradient overlay border radius for xl
    '::before': {
      borderRadius: tokens.borderRadius.xl,
    },
  },
});

export const card = recipe({
  base: cardBase,
  variants: {
    variant: cardVariants,
    size: cardSizeVariants,
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: tokens.spacing.xs,
  paddingBottom: tokens.spacing.lg,
});

export const cardTitle = style({
  fontSize: tokens.typography.fontSize.lg,
  fontWeight: tokens.typography.fontWeight.semibold,
  lineHeight: tokens.typography.lineHeight.tight,
  color: tokens.colors.semantic.cardForeground,
});

export const cardDescription = style({
  fontSize: tokens.typography.fontSize.sm,
  color: tokens.colors.semantic.mutedForeground,
  lineHeight: tokens.typography.lineHeight.normal,
});

export const cardContent = style({
  paddingTop: '0',
});

export const cardFooter = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: tokens.spacing.lg,
});
