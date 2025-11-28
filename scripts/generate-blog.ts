import path from 'node:path';
import fs from 'fs-extra';
import matter from 'gray-matter';
import { marked } from 'marked';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
  content: string;
  html: string;
}

async function generateBlogData() {
  const blogDir = path.join(__dirname, '../src/content/blog');
  const outputDir = path.join(__dirname, '../src/data/generated');

  await fs.ensureDir(outputDir);

  const files = await fs.readdir(blogDir);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const posts: BlogPost[] = [];

  for (const file of markdownFiles) {
    const filePath = path.join(blogDir, file);
    const rawContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(rawContent);
    const slug = file.replace('.md', '');
    const html = marked(content);

    const post: BlogPost = {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      excerpt: data.excerpt || '',
      author: data.author || '',
      content,
      html,
    };

    posts.push(post);

    // Generate individual post file
    await fs.writeFile(
      path.join(outputDir, `${slug}.json`),
      JSON.stringify(post, null, 2),
    );
  }

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Generate blog index
  await fs.writeFile(
    path.join(outputDir, 'blog-index.json'),
    JSON.stringify(posts, null, 2),
  );

  console.log(`Generated ${posts.length} blog posts`);
  console.log('Blog data generated successfully!');
}

generateBlogData().catch(console.error);
