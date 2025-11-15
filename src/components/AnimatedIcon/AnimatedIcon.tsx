import type { IconProps } from '@radix-ui/react-icons/dist/types';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

import { container, sizeVariants } from './AnimatedIcon.css';

interface AnimatedIconProps {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export const AnimatedIcon = ({ Icon, size = 'medium' }: AnimatedIconProps) => {
  return (
    <div className={`${container} ${sizeVariants[size]}`}>
      <Icon className={sizeVariants[size]} />
    </div>
  );
};
