// Fichier : app/[lang]/blog/[slug]/page.tsx (Version Finale Complète)

import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import type { Metadata } from 'next';

// ===================================================================
// BLOC DE CODE MODIFIÉ POUR LE TITRE DYNAMIQUE DE L'ONGLET
// ===================================================================
type Props = {
  params: { slug: string, lang: 'fr' | 'en' };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { frontmatter } = getPostBySlug(params.slug, params.lang);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}
// ===================================================================

// Génère toutes les combinaisons de langue/slug possibles pour le build
export async function generateStaticParams() {
  return getAllPostSlugs();
}

// C'est le composant qui affiche la page
export default async function PostPage({ params }: Props) {
  const { frontmatter, content } = await getPostBySlug(params.slug, params.lang);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <article className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-gray-400 mb-8">{frontmatter.date}</p>
        <div
          className="prose prose-invert lg:prose-xl max-w-none 
                     prose-h2:text-cyan-400 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-white prose-blockquote:border-l-cyan-500 prose-code:text-amber-300
                     prose-pre:bg-gray-800/50"
        >
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}