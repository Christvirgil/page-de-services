import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Définition de l'interface pour un article de blog
export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    category: string;
    tags: string[];
    [key: string]: any; // Permet d'autres propriétés si nécessaire
  };
}

// Cette fonction lit tous les fichiers .mdx dans le dossier content/blog
export function getPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter: frontmatter as BlogPost['frontmatter'], // Assurer le type
    };
  });

  // Trie les articles par date, le plus récent en premier
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

export function getCategories(posts: BlogPost[]): string[] {
  const categories = posts.map(post => post.frontmatter.category);
  return [...new Set(categories)];
}
