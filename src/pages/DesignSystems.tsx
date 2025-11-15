import { IframeContainer } from '@ui/components';

export const DesignSystems = () => {
  const isDevelopment = window.location.hostname === 'localhost';
  const storybookUrl = isDevelopment
    ? 'http://localhost:6006'
    : `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}/storybook/`;

  return (
    <div>
      <header>
        <h1>Design Systems</h1>
        <p>
          Building scalable, maintainable component libraries and design tokens
        </p>
      </header>

      <IframeContainer
        src={storybookUrl}
        title="Design System Storybook"
        fallbackUrl="http://localhost:6006"
      />
    </div>
  );
};
