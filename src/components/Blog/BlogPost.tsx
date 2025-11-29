import { Card } from '@ui/components/Card/Card';
import { Chip } from '@ui/components/Chip';
import { Text } from '@ui/components/Text';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import { MarkdownContent } from '../MarkdownContent';
import {
  article,
  backLink,
  content,
  header,
  meta,
  tagsContainer,
  title,
} from './BlogPost.css';

interface BlogPostProps {
  slug?: string;
}

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
  content: string;
}

export function BlogPost({ slug: propSlug }: BlogPostProps) {
  const { slug } = useParams();
  const postSlug = propSlug || slug;
  const [postData, setPostData] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postSlug) {
      setError('Blog post not found.');
      setLoading(false);
      return;
    }

    import(`../../data/generated/${postSlug}.json`)
      .then((module) => {
        setPostData(module.default);
      })
      .catch(() => {
        setError('Blog post not found.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postSlug]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error || !postData) {
    return <Text>{error || 'Blog post not found.'}</Text>;
  }

  return (
    <Card size="large">
      <article className={article}>
        <Link to="/blog" className={backLink}>
          ← Back to Blog
        </Link>

        <header className={header}>
          <h1 className={title}>{postData.title}</h1>
          <div className={meta}>
            <Text variant="caption">
              {new Date(postData.date).toLocaleDateString()} • By{' '}
              {postData.author}
            </Text>
          </div>
          <div className={tagsContainer}>
            {postData.tags.map((tagName) => (
              <Chip key={tagName} variant="secondary">
                {tagName}
              </Chip>
            ))}
          </div>
        </header>

        <div className={content}>
          <MarkdownContent content={postData.content} />
        </div>
      </article>
    </Card>
  );
}
