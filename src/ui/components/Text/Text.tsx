import { Heading, Text as RadixText } from '@radix-ui/themes';
import type React from 'react';
import { text } from './Text.css';

export interface TextProps {
  variant?: 'default' | 'signature' | 'colorful' | 'caption';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const isHeadingElement = (
  as: string,
): as is 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as);
};

export const Text: React.FC<TextProps> = ({
  variant = 'default',
  as = 'p',
  size,
  children,
  className,
  ...props
}) => {
  if (isHeadingElement(as)) {
    return (
      <Heading
        as={as}
        className={`${text({ variant, size })} ${className || ''}`}
        {...props}
      >
        {children}
      </Heading>
    );
  }

  return (
    <RadixText
      as={as as 'p' | 'span'}
      className={`${text({ variant, size })} ${className || ''}`}
      {...props}
    >
      {children}
    </RadixText>
  );
};
