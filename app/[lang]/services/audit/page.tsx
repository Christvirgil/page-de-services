// Fichier: app/[lang]/services/audit/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';
import { fr } from '../../../../dictionaries/fr.js'; // Ajustement des chemins
import { en } from '../../../../dictionaries/en.js'; // Ajustement des chemins

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

export default function AuditPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.audit_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t.audit_subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">{t.audit_for_who_title}</h2>
            <p className="text-gray-400 mb-6">{t.audit_for_who_desc}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>{t.audit_for_who_item1}</li>
                <li>{t.audit_for_who_item2}</li>
                <li>{t.audit_for_who_item3}</li>
              </ul>
            <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-4">{t.audit_how_it_works_title}</h2>
            <p className="text-gray-400">{t.audit_how_it_works_desc}</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{t.audit_card_title}</h3>
            <div className="text-5xl font-bold mb-6">299€</div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.audit_card_feature1}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.audit_card_feature2}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.audit_card_feature3}</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> {t.audit_card_feature4}</li>
            </ul>
            <a 
              href="https://www.paypal.com/ncp/payment/9ZLAGAW6VU4NU"
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              {t.audit_card_button}
            </a>
          </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">{t.audit_testimonial_title}</h2>
            <div className="max-w-2xl mx-auto">
                <Link href={`/${lang}/etudes-de-cas/${t.audit_case_study_slug}`} className="block group">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-cyan-500 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                          {t.audit_case_study_title}
                        </h3>
                        <p className="text-gray-400 mt-2">{t.audit_case_study_desc}</p>
                        <p className="text-cyan-400 font-semibold mt-4">{t.audit_case_study_link}</p>
                    </div>
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}