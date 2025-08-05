// Fichier : app/[lang]/services/coaching/page.tsx (Version Finale Complète)

"use client";

import Header from '@/components/Header';
import { fr } from '../../../../dictionaries/fr.js';
import { en } from '../../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

// ===================================================================
//  VOS INFORMATIONS PERSONNELLES
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97"; 
const PHONE_NUMBER_LINK = "+24160061497"; 
const WHATSAPP_NUMBER_RAW = "24160061497"; 
// ===================================================================

export default function CoachingPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);

  const processSteps = [
    { number: "01", title: t.coaching_process_step1_title, text: t.coaching_process_step1_desc },
    { number: "02", title: t.coaching_process_step2_title, text: t.coaching_process_step2_desc },
    { number: "03", title: t.coaching_process_step3_title, text: t.coaching_process_step3_desc },
    { number: "04", title: t.coaching_process_step4_title, text: t.coaching_process_step4_desc },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Section Héro pour le Coaching */}
        <section className="relative text-center py-20 sm:py-28 px-4 overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              {t.coaching_title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              {t.coaching_subtitle}
            </p>
          </div>
        </section>

        {/* Détails du Service de Coaching */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne Gauche : Pourquoi est-ce pour vous ? */}
            <div>
              <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">{t.coaching_for_who_tagline}</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold">{t.coaching_for_who_title}</p>
              <p className="mt-4 text-gray-300">
                {t.coaching_for_who_desc}
              </p>
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <li>{t.coaching_for_who_item1}</li>
                <li>{t.coaching_for_who_item2}</li>
                <li>{t.coaching_for_who_item3}</li>
                <li>{t.coaching_for_who_item4}</li>
                <li>{t.coaching_for_who_item5}</li>
              </ul>
            </div>

            {/* Colonne Droite : L'Offre et Prix */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500 relative flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{t.coaching_card_title}</h3>
              <div className="text-5xl font-extrabold text-white my-4">{t.coaching_card_price}</div>
              <ul className="text-gray-300 space-y-2 text-left w-full max-w-xs">
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>{t.coaching_card_feature1}</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>{t.coaching_card_feature2}</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>{t.coaching_card_feature3}</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>{t.coaching_card_feature4}</li>
              </ul>
              <a 
                href="https://www.paypal.com/ncp/payment/629VLLAP28YFY"
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {t.coaching_card_button}
              </a>
            </div>
          </div>
        </section>

        {/* Comment ça marche ? (Processus simplifié) */}
        <section className="py-20 bg-gray-950/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">{t.coaching_process_tagline}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">{t.coaching_process_title}</p>
            <div className="mt-12 space-y-12">
              {processSteps.map((step, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                  <div className="text-8xl font-extrabold text-gray-700 text-center">{step.number}</div>
                  <div className="md:col-span-3">
                    <h3 className="text-2xl font-bold text-cyan-400">{step.title}</h3>
                    <p className="mt-2 text-gray-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact / Call to Action Final */}
        <section id="contact" className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t.coaching_cta_title}
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              {t.coaching_cta_desc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">{t.contact_button_whatsapp}</a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">{t.contact_button_email}</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center py-8 border-t border-gray-800">
        <div className="text-gray-500 space-y-2">
          <p>{t.footer_copyright}</p>
          <p>{t.footer_contact} <a href={`tel:${PHONE_NUMBER_LINK}`} className="hover:text-cyan-400 transition-colors">{PHONE_NUMBER_DISPLAY}</a></p>
        </div>
      </footer>
    </div>
  );
}