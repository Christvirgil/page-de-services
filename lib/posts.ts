// Fichier: lib/posts.ts (Version Finale Complète et Bilingue, V2)

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// L'interface BlogPost ne change pas
export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    category: string;
    tags: string[];
    [key: string]: any;
  };
}

const contentDir = path.join(process.cwd(), 'content/blog');

// Fonction pour récupérer tous les articles d'une langue
export function getPosts(lang: 'fr' | 'en'): BlogPost[] {
  const postsDirectory = path.join(contentDir, lang);
  if (!fs.existsSync(postsDirectory)) return [];

  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace('.mdx', '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      return {
        slug,
        frontmatter: frontmatter as BlogPost['frontmatter'],
      };
    });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

// Fonction pour récupérer les catégories d'une liste de posts
export function getCategories(posts: BlogPost[]): string[] {
  const categories = posts.map(post => post.frontmatter.category);
  return [...new Set(categories)];
}

// Fonction pour récupérer UN seul post par son slug et sa langue
export function getPostBySlug(slug: string, lang: 'fr' | 'en') {
  const fullPath = path.join(contentDir, lang, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);
  return { frontmatter, content };
}

// Fonction pour générer tous les slugs pour toutes les langues
export function getAllPostSlugs() {
  const languages = ['fr', 'en'];
  const allSlugs: { lang: string; slug: string }[] = [];

  languages.forEach(lang => {
    const langDir = path.join(contentDir, lang);
    if (fs.existsSync(langDir)) {
      const filenames = fs.readdirSync(langDir);
      filenames.forEach(filename => {
        if (filename.endsWith('.mdx')) {
          allSlugs.push({
            lang: lang as 'fr' | 'en',
            slug: filename.replace('.mdx', ''),
          });
        }
      });
    }
  });
  return allSlugs;
}

// NOUVELLE FONCTION AJOUTÉE : Pour générer toutes les catégories pour toutes les langues
export function getAllCategories() {
  const languages = ['fr', 'en'];
  const allCategories: { lang: string; category: string }[] = [];

  languages.forEach(lang => {
    const posts = getPosts(lang as 'fr' | 'en');
    const categories = getCategories(posts);
    categories.forEach(category => {
      allCategories.push({
        lang: lang,
        category: category.toLowerCase(),
      });
    });
  });
  return allCategories;
}