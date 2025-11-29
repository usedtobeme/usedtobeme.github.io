import { Text } from '@ui/components/Text';
import { BlogList } from '../components/Blog';

export function Blog() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <Text as="h1" size="h1">Leadership & Technology Blog</Text>
        <Text>
          Insights on engineering leadership, architecture decisions, and
          building scalable systems.
        </Text>
      </header>

      <BlogList />
    </div>
  );
}
