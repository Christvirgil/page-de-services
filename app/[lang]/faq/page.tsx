// Fichier: app/[lang]/faq/page.tsx (Version Finale Complète)

import Header from '@/components/Header';
import { fr } from '../../../dictionaries/fr.js';
import { en } from '../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

export default function FAQPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);

  // On construit le tableau des FAQs à partir du dictionnaire
  const faqs = [
    { question: t.faq_q1, answer: t.faq_a1 },
    { question: t.faq_q2, answer: t.faq_a2 },
    { question: t.faq_q3, answer: t.faq_a3 },
    { question: t.faq_q4, answer: t.faq_a4 },
    { question: t.faq_q5, answer: t.faq_a5 },
    { question: t.faq_q6, answer: t.faq_a6 },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.faq_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t.faq_subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-bold text-gray-100 mb-3">{faq.question}</h2>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}