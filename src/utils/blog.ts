import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
  content: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogModules = import.meta.glob('/src/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];

  for (const [path, moduleLoader] of Object.entries(blogModules)) {
    const rawContent = await moduleLoader();
    const { data, content } = matter(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    posts.push({
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      author: data.author || '',
      content,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const rawContent = await import(`/src/content/blog/${slug}.md?raw`);
    const { data, content } = matter(rawContent.default);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      author: data.author || '',
      content,
    };
  } catch (_error) {
    return null;
  }
}
