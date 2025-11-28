import { ReactNode } from 'react';
import { clsx } from 'clsx';
import * as styles from './Chip.css';

export interface ChipProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium';
  className?: string;
}

export function Chip({
  children,
  variant = 'default',
  size = 'small',
  className,
}: ChipProps) {
  return (
    <span
      className={clsx(
        styles.chip,
        styles.variants[variant],
        styles.sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}