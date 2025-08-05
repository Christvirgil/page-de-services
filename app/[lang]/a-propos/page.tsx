// Fichier: app/[lang]/a-propos/page.tsx (Version Finale Complète)

import Header from '@/components/Header';
import Link from 'next/link';
import { fr } from '../../../dictionaries/fr.js';
import { en } from '../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

export default function AboutPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);

  // Helper pour gérer le HTML dans les traductions
  const createMarkup = (htmlString: string) => {
    return { __html: htmlString };
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.about_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t.about_subtitle}
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none mx-auto prose-h2:text-cyan-400 prose-h3:text-purple-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-500">
          <h2 dangerouslySetInnerHTML={createMarkup(t.about_h2_1)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p1_1)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p1_2)} />

          <h2 dangerouslySetInnerHTML={createMarkup(t.about_h2_2)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p2_1)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p2_2)} />

          <h2 dangerouslySetInnerHTML={createMarkup(t.about_h2_3)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p3_1)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p3_2)} />

          <h2 dangerouslySetInnerHTML={createMarkup(t.about_h2_4)} />
          <p dangerouslySetInnerHTML={createMarkup(t.about_p4_1)} />
          
          <p className="text-center mt-8">
            <Link href={`/${lang}/contact`} className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              {t.about_cta_button}
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}