// Fichier: app/[lang]/etudes-de-cas/[slug]/page.tsx (Version Finale Complète)

import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/caseStudies';
import { fr } from '../../../../dictionaries/fr.js';
import { en } from '../../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

// Génère toutes les combinaisons de langue/slug possibles pour le build
export async function generateStaticParams() {
  return getAllCaseStudySlugs();
}

export default async function CaseStudyPage({ params }: { params: { slug: string, lang: 'fr' | 'en' } }) {
  const t = getDictionary(params.lang);
  const { frontmatter, content } = await getCaseStudyBySlug(params.slug, params.lang);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <article>
          <header className="text-center mb-16">
            <p className="text-base font-semibold text-cyan-400">{frontmatter.client}</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-100 leading-tight">
              {frontmatter.title}
            </h1>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <div>
              <h3 className="font-bold text-lg text-gray-400">{t.case_study_problem}</h3>
              <p className="mt-1 text-gray-300">{frontmatter.problem}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-400">{t.case_study_solution}</h3>
              <p className="mt-1 text-gray-300">{frontmatter.solution}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-400">{t.case_study_result}</h3>
              <p className="mt-1 text-cyan-400 font-semibold">{frontmatter.result}</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mx-auto prose-h2:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-500">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    </div>
  );
}