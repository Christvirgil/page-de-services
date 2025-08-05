// Fichier: app/[lang]/blog/categorie/[category]/page.tsx (Version Finale Complète)

import Header from '@/components/Header';
import PostCard from '@/components/PostCard';
import { getPosts, getAllCategories } from '@/lib/posts';
import { fr } from '../../../../../dictionaries/fr.js';
import { en } from '../../../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

// Génère les pages statiques pour chaque combinaison de langue/catégorie
export async function generateStaticParams() {
  return getAllCategories();
}

// La page de catégorie
export default function CategoryPage({ params }: { params: { category: string, lang: 'fr' | 'en' } }) {
  const { category, lang } = params;
  const t = getDictionary(lang);
  
  // On récupère les articles de la bonne langue
  const allPosts = getPosts(lang);

  const filteredPosts = allPosts.filter(post => post.frontmatter.category.toLowerCase() === category);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const categoryName = capitalize(category);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-cyan-400">{t.category_page_tagline}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-100 leading-tight mt-2">
            {categoryName}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <PostCard key={post.slug} post={post} lang={lang} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              {t.category_page_no_posts}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}