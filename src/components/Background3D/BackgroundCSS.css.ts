import { keyframes, style } from '@vanilla-extract/css';

const noiseAnimation = keyframes({
  '0%': { backgroundPosition: '0% 0%' },
  '25%': { backgroundPosition: '100% 0%' },
  '50%': { backgroundPosition: '100% 100%' },
  '75%': { backgroundPosition: '0% 100%' },
  '100%': { backgroundPosition: '0% 0%' },
});

const glowPulse = keyframes({
  '0%, 100%': { opacity: '0.3' },
  '50%': { opacity: '0.7' },
});

export const backgroundContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  background: `
    radial-gradient(circle at 20% 30%, rgba(102, 51, 153, 0.6) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(153, 102, 255, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(204, 153, 255, 0.5) 0%, transparent 50%),
    radial-gradient(circle at 60% 20%, rgba(76, 29, 149, 0.3) 0%, transparent 50%),
    linear-gradient(135deg, rgba(102, 51, 153, 0.2) 0%, rgba(153, 102, 255, 0.1) 100%)
  `,
  backgroundSize: '200% 200%, 150% 150%, 180% 180%, 160% 160%, 100% 100%',
  animation: `${noiseAnimation} 20s ease-in-out infinite, ${glowPulse} 6s ease-in-out infinite alternate`,
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `
      repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.02) 0px,
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px,
        transparent 20px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.01) 0px,
        rgba(255, 255, 255, 0.01) 1px,
        transparent 1px,
        transparent 15px
      )
    `,
    opacity: 0.5,
    animation: `${noiseAnimation} 30s linear infinite reverse`,
  },
});
