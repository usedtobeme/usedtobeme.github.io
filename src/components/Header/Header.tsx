import { PersonIcon, StarIcon } from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router';

import { AnimatedIcon } from '../AnimatedIcon';

import {
  brandLink,
  brandText,
  container,
  header,
  iconOnlyLink,
  navigationList,
  navigationRoot,
} from './Header.css';

export const Header = () => {
  return (
    <header className={header}>
      <div className={container}>
        <Link to="/" className={brandLink}>
          <span className={brandText}>IA</span>
        </Link>
        <NavigationMenu.Root className={navigationRoot}>
          <NavigationMenu.List className={navigationList}>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/leadership"
                  className={iconOnlyLink}
                  aria-label="Leadership"
                >
                  <AnimatedIcon Icon={StarIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/portfolio"
                  className={iconOnlyLink}
                  aria-label="Portfolio"
                >
                  <AnimatedIcon Icon={PersonIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
};
