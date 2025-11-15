import {
  BarChartIcon,
  ComponentInstanceIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  LayersIcon,
  StarIcon,
  VideoIcon,
} from '@radix-ui/react-icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Link } from 'react-router';

import { AnimatedIcon } from '../AnimatedIcon';

import {
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
        <NavigationMenu.Root className={navigationRoot}>
          <NavigationMenu.List className={navigationList}>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link to="/" className={iconOnlyLink} aria-label="About">
                  <AnimatedIcon Icon={HomeIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/design-systems"
                  className={iconOnlyLink}
                  aria-label="Design Systems"
                >
                  <AnimatedIcon Icon={ComponentInstanceIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/state-management"
                  className={iconOnlyLink}
                  aria-label="State Management"
                >
                  <AnimatedIcon Icon={LayersIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/observability-d3"
                  className={iconOnlyLink}
                  aria-label="Observability & D3"
                >
                  <AnimatedIcon Icon={BarChartIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  to="/webgl-media"
                  className={iconOnlyLink}
                  aria-label="WebGL & Media"
                >
                  <AnimatedIcon Icon={VideoIcon} size="xlarge" />
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
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
                <a
                  href="#contact"
                  className={iconOnlyLink}
                  aria-label="Contact"
                >
                  <AnimatedIcon Icon={EnvelopeClosedIcon} size="xlarge" />
                </a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
};
