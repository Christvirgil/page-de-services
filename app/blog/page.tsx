// Fichier : app/blog/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/components/Header';
import FeaturedPostCard from '@/components/FeaturedPostCard';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';

// Définition de l'interface pour un article de blog
interface BlogPost {
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
function getPosts(): BlogPost[] {
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

function getCategories(posts: BlogPost[]): string[] {
  const categories = posts.map(post => post.frontmatter.category);
  return [...new Set(categories)];
}

export default function BlogIndex() {
  const posts = getPosts();
  const categories = getCategories(posts);
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight mb-4">
            Le Blog
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Tutoriels et réflexions sur Laravel, l'IA et le développement web.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && <FeaturedPostCard post={featuredPost} />}

        <div className="flex flex-col md:flex-row gap-12 mt-16">
          {/* Posts Grid */}
          <div className="md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map(post => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar categories={categories} />
        </div>
      </main>
    </div>
  );
}