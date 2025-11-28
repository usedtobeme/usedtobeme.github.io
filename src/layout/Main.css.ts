import { style } from '@vanilla-extract/css';

export const mainWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  overflow: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '3.5rem', // Account for fixed header height
});
