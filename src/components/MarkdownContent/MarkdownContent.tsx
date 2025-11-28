import { Text } from '@ui/components/Text';
import { lazy, Suspense, useEffect, useState } from 'react';

import { markdownWrapper } from './MarkdownContent.css';

const ReactMarkdown = lazy(() => import('react-markdown'));

interface MarkdownContentProps {
  content: string;
}

export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const [remarkGfmPlugin, setRemarkGfmPlugin] = useState<
    typeof import('remark-gfm').default | null
  >(null);

  useEffect(() => {
    import('remark-gfm').then((module) => {
      setRemarkGfmPlugin(() => module.default);
    });
  }, []);

  return (
    <Suspense fallback={<Text>Loading post...</Text>}>
      <div className={markdownWrapper}>
        <ReactMarkdown remarkPlugins={remarkGfmPlugin ? [remarkGfmPlugin] : []}>
          {content}
        </ReactMarkdown>
      </div>
    </Suspense>
  );
};
