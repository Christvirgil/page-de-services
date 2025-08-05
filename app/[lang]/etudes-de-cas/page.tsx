// Fichier: app/[lang]/etudes-de-cas/page.tsx (Version Finale Complète)

import Header from '@/components/Header';
import Link from 'next/link';
import { getCaseStudies } from '@/lib/caseStudies'; // On garde l'import
import { fr } from '../../../dictionaries/fr.js';
import { en } from '../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

export default function CaseStudiesIndex({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);
  
  // MODIFICATION CLÉ : On passe la langue à notre fonction
  const studies = getCaseStudies(lang);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.case_studies_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            {t.case_studies_subtitle}
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {studies.map((study) => (
            <Link key={study.slug} href={`/${lang}/etudes-de-cas/${study.slug}`} className="block group">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-cyan-500 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {study.frontmatter.title}
                </h2>
                <p className="text-gray-400 mt-2">{study.frontmatter.problem}</p>
                <p className="text-cyan-400 font-semibold mt-4">{t.case_studies_link}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}