import { Slot } from '@radix-ui/react-slot';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import React from 'react';
import { button } from './Button.css';

type ButtonVariants = RecipeVariants<typeof button>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={button({ variant, size })} ref={ref} {...props} />;
  },
);

Button.displayName = 'Button';

export { Button };
