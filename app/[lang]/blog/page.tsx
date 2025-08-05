// Fichier : app/[lang]/blog/page.tsx (VERSION FINALE ET DÉFINITIVE)

import Header from '@/components/Header';
import FeaturedPostCard from '@/components/FeaturedPostCard';
import PostCard from '@/components/PostCard';
import CategoryFilter from '@/components/CategoryFilter'; // Le composant de filtre de catégories

import { getPosts } from '@/lib/posts'; // Pour récupérer tous les articles

import { fr } from '../../../dictionaries/fr.js';
import { en } from '../../../dictionaries/en.js';

// Type pour les paramètres de recherche d'URL (utile pour TypeScript)
type SearchParams = {
  [key: string]: string | string[] | undefined;
};

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

// La fonction de page reçoit maintenant aussi 'searchParams'
export default function BlogIndex({ 
  params: { lang }, 
  searchParams 
}: { 
  params: { lang: 'fr' | 'en' }, 
  searchParams: SearchParams 
}) {
  const t = getDictionary(lang);
  
  // Récupère la catégorie actuellement sélectionnée depuis les paramètres d'URL
  const currentCategory = searchParams.category as string || 'All'; 
  
  // Récupère TOUS les posts disponibles pour la langue donnée (Server Component)
  const allPosts = getPosts(lang); 

  // Calcule les catégories uniques à partir de tous les posts
  // Utilise un Set pour garantir l'unicité, puis convertit en tableau
  // *** CORRECTION : NE PAS AJOUTER 'All' ICI. CategoryFilter.js le fait. ***
  const uniqueCategories = [...new Set(allPosts.map(post => post.frontmatter.category))];

  // Le premier post est considéré comme le featured post, peu importe la catégorie sélectionnée
  // S'il n'y a pas de posts, featuredPost sera undefined
  const featuredPost = allPosts[0]; 

  // Filtre les posts pour la grille en fonction de la catégorie sélectionnée
  // Exclut le featured post
  let postsForGrid = currentCategory === 'All'
    ? allPosts.slice(1) // Si "All", prend tous les posts sauf le featured (si existant)
    : allPosts.filter(post => 
        post.frontmatter.category === currentCategory && post.slug !== featuredPost?.slug
      );

  // *** CORRECTION : Limite le nombre d'articles affichés dans la grille à 4 ***
  postsForGrid = postsForGrid.slice(0, 4);


  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4">
        {/* *** CORRECTION : SUPPRESSION COMPLÈTE DU BLOC TITRE ET SOUS-TITRE DU BLOG *** */}
        {/*
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight mb-4">
            {t.blog_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {t.blog_subtitle}
          </p>
        </div>
        */}

        {/* Le composant de filtre horizontal des catégories - Remonte maintenant directement sous le Header */}
        <CategoryFilter categories={uniqueCategories} lang={lang} />

        {/* Featured Post - Si un featuredPost existe */}
        {featuredPost && (
          <div className="max-w-4xl mx-auto mb-12">
            <FeaturedPostCard post={featuredPost} lang={lang} />
          </div>
        )}

        {/* Grille des autres articles */}
        <div className="mt-16"> {/* Marge supérieure pour séparer du filtre */}
          {postsForGrid.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsForGrid.map(post => (
                <PostCard key={post.slug} post={post} lang={lang} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-lg mt-10">
              {t.blog_no_articles_found || "Aucun article trouvé pour cette catégorie."}
            </p>
          )}
        </div>
      </main>
    </div>
  );
}