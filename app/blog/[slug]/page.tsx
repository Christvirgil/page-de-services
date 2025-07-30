// Fichier : app/blog/[slug]/page.tsx (Version FINALE)

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Header from '@/components/Header';
import { Metadata } from 'next';

// Cette fonction lit les informations de l'article depuis le fichier
function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(path.join(process.cwd(), 'content/blog', slug + '.mdx'), 'utf-8');
  const { data: frontMatter, content } = matter(markdownFile);
  return {
    frontMatter,
    slug,
    content,
  };
}

// ===================================================================
// BLOC DE CODE AJOUTÉ POUR LE TITRE DYNAMIQUE DE L'ONGLET
// ===================================================================
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost({ slug: params.slug });

  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
  };
}
// ===================================================================

// C'est le composant qui affiche la page
export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <article className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight mb-4">
          {props.frontMatter.title}
        </h1>
        <p className="text-gray-400 mb-8">{props.frontMatter.date}</p>
        <div
          className="prose prose-invert lg:prose-xl max-w-none 
                     prose-h2:text-cyan-400 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                     prose-strong:text-white prose-blockquote:border-l-cyan-500 prose-code:text-amber-300
                     prose-pre:bg-gray-800/50"
          dangerouslySetInnerHTML={{ __html: marked(props.content) }}
        >
        </div>
      </article>
    </div>
  );
}