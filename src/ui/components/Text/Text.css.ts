import { tokens } from '@ui/tokens.css';
import { keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const gradientShift = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
});

export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
    lineHeight: 1.6,
    color: tokens.colors.semantic.foreground,
  },
  variants: {
    variant: {
      default: {
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: tokens.typography.fontSize.base,
      },
      signature: {
        fontFamily: tokens.typography.fontFamily.signature,
        fontSize: '4rem',
        fontWeight: tokens.typography.fontWeight.normal,
        color: tokens.colors.semantic.primary,
        letterSpacing: '0.02em',
        lineHeight: 1,
        textShadow: tokens.textShadows.lg,
      },
      colorful: {
        fontFamily: tokens.typography.fontFamily.colorful,
        fontSize: '3.5rem',
        fontWeight: tokens.typography.fontWeight.normal,
        background:
          'linear-gradient(45deg, #59c1c9ff, #fab1a0)',
        backgroundSize: '100% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: `${gradientShift} 3s ease infinite`,
        letterSpacing: '-0.02em',
        lineHeight: 0.85,
        filter: `drop-shadow(${tokens.textShadows.md})`,
      },
      caption: {
        fontFamily: tokens.typography.fontFamily.sans,
        fontSize: tokens.typography.fontSize.sm,
        fontWeight: tokens.typography.fontWeight.normal,
        color: tokens.colors.semantic.mutedForeground,
        lineHeight: tokens.typography.lineHeight.normal,
      },
    },
    size: {
      h1: {
        fontSize: tokens.typography.fontSize['5xl'],
        fontWeight: tokens.typography.fontWeight.bold,
        lineHeight: tokens.typography.lineHeight.tight,
      },
      h2: {
        fontSize: tokens.typography.fontSize['4xl'],
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.snug,
      },
      h3: {
        fontSize: tokens.typography.fontSize['3xl'],
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.snug,
      },
      h4: {
        fontSize: tokens.typography.fontSize['2xl'],
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.normal,
      },
      h5: {
        fontSize: tokens.typography.fontSize.xl,
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.normal,
      },
      h6: {
        fontSize: tokens.typography.fontSize.lg,
        fontWeight: tokens.typography.fontWeight.semibold,
        lineHeight: tokens.typography.lineHeight.normal,
      },
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'signature', size: 'h1' },
      style: {
        fontSize: '7rem',
      },
    },
    {
      variants: { variant: 'signature', size: 'h2' },
      style: {
        fontSize: '6rem',
      },
    },
    {
      variants: { variant: 'signature', size: 'h3' },
      style: {
        fontSize: '5.5rem',
      },
    },
    {
      variants: { variant: 'colorful', size: 'h1' },
      style: {
        fontSize: '5rem',
      },
    },
    {
      variants: { variant: 'colorful', size: 'h2' },
      style: {
        fontSize: '4rem',
      },
    },
    {
      variants: { variant: 'colorful', size: 'h3' },
      style: {
        fontSize: '3.5rem',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
  },
});
