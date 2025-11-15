import React from 'react';
import { container, iframe } from './IframeContainer.css';

export interface IframeContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  height?: string;
  fallbackUrl?: string;
}

export const IframeContainer = ({
  src,
  title,
  height = '80vh',
  fallbackUrl,
  ...props
}: IframeContainerProps) => {
  const [currentSrc, setCurrentSrc] = React.useState(src);

  const handleError = () => {
    if (fallbackUrl && currentSrc !== fallbackUrl) {
      setCurrentSrc(fallbackUrl);
    }
  };

  return (
    <div className={container} style={{ height }} {...props}>
      <iframe
        src={currentSrc}
        title={title}
        className={iframe}
        allow="fullscreen"
        loading="lazy"
        onError={handleError}
      />
    </div>
  );
};
