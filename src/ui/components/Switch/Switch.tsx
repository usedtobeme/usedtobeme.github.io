import * as SwitchPrimitive from '@radix-ui/react-switch';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import React from 'react';
import { switchRoot, switchThumb } from './Switch.css';

type SwitchVariants = RecipeVariants<typeof switchRoot>;

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    SwitchVariants {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitive.Root className={switchRoot({ size })} {...props} ref={ref}>
    <SwitchPrimitive.Thumb className={switchThumb({ size })} />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
