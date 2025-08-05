// Fichier: app/[lang]/services/integration-ia/page.tsx (Version Finale Complète)

import Header from '@/components/Header';
import Link from 'next/link';
import { fr } from '../../../../dictionaries/fr.js';
import { en } from '../../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

export default function IntegrationIAPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.ia_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t.ia_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">{t.ia_for_who_title}</h2>
            <p className="text-gray-400 mb-6">{t.ia_for_who_desc}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>{t.ia_for_who_item1}</li>
                <li>{t.ia_for_who_item2}</li>
                <li>{t.ia_for_who_item3}</li>
                <li>{t.ia_for_who_item4}</li>
              </ul>
            <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-4">{t.ia_how_it_works_title}</h2>
            <p className="text-gray-400">{t.ia_how_it_works_desc}</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.ia_card_title}</h3>
            <div className="text-5xl font-bold mb-6">{t.ia_card_price}</div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.ia_card_feature1}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.ia_card_feature2}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.ia_card_feature3}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.ia_card_feature4}</li>
            </ul>
            <Link href={`/${lang}/contact`} className="block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              {t.ia_card_button}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}