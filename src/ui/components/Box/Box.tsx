import type React from 'react';
import { box, scrollableBox } from './Box.css';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'div' | 'aside' | 'section' | 'article';
  children?: React.ReactNode;
  className?: string;
  scrollable?: boolean;
}

export const Box: React.FC<BoxProps> = ({
  as: Component = 'div',
  children,
  className,
  scrollable = false,
  ...props
}) => {
  const baseClass = scrollable ? scrollableBox : box;
  return (
    <Component className={`${baseClass} ${className || ''}`} {...props}>
      {children}
    </Component>
  );
};
