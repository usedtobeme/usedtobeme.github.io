import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@ui/components/Card';
import { Chip } from '@ui/components/Chip';
import { Text } from '@ui/components/Text';
import { Link } from 'react-router';

import blogIndex from '../../data/generated/blog-index.json';
import { blogGrid, blogLink, meta, tagsContainer } from './BlogList.css';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
}

export function BlogList() {
  const posts = blogIndex as BlogPost[];

  if (posts.length === 0) {
    return <Text>No blog posts found.</Text>;
  }

  return (
    <div className={blogGrid}>
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className={blogLink}>
          <Card variant="default">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <div className={meta}>
                <Text variant="caption">
                  {new Date(post.date).toLocaleDateString()}
                </Text>
                <Text variant="caption">•</Text>
                <Text variant="caption">By {post.author}</Text>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter>
              <div className={tagsContainer}>
                {post.tags.map((tag) => (
                  <Chip key={tag} variant="secondary" size="small">
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}