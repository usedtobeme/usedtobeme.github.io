import type { RecipeVariants } from '@vanilla-extract/recipes';
import React from 'react';
import { input } from './Input.css';

type InputVariants = RecipeVariants<typeof input>;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    InputVariants {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, invalid, ...props }, ref) => {
    return (
      <input
        className={input({ size })}
        data-invalid={invalid}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
