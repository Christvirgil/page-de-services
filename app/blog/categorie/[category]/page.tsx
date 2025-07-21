// Fichier: app/blog/categorie/[category]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';

// Fonction pour récupérer tous les articles (réutilisée)
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

// Génère les pages statiques pour chaque catégorie à la construction
export async function generateStaticParams() {
  const posts = getPosts();
  const categories = [...new Set(posts.map(post => post.frontmatter.category.toLowerCase()))];
  return categories.map(category => ({ category }));
}

// La page de catégorie
export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const allPosts = getPosts();

  const filteredPosts = allPosts.filter(post => post.frontmatter.category.toLowerCase() === category);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const categoryName = capitalize(category);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-cyan-400">Catégorie</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 leading-tight mt-2">
            {categoryName}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Aucun article trouvé dans cette catégorie.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
