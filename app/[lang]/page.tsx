// app/[lang]/page.tsx

import Header from '@/components/Header';
import { fr } from '../../dictionaries/fr.js';
import { en } from '../../dictionaries/en.js';
import Image from 'next/image';
import DesignerExperienceImage from '../../public/images/projet-designer-experience.png';
import Link from 'next/link'; // N'oublie pas d'importer Link

type LangParam = {
  params: {
    lang: 'fr' | 'en'; // Ajoute d'autres langues ici si besoin
  };
};

const getDictionary = (lang: string) => {
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

export default function HomePage({ params: { lang } }: LangParam) {
  const t = getDictionary(lang);

  const processSteps = [
    { number: "01", title: t.process_step1_title, text: t.process_step1_desc },
    { number: "02", title: t.process_step2_title, text: t.process_step2_desc },
    { number: "03", title: t.process_step3_title, text: t.process_step3_desc },
    { number: "04", title: t.process_step4_title, text: t.process_step4_desc },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* SECTION HERO */}
        <section id="accueil" className="relative text-center py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              {t.hero_title_line1}<br />{t.hero_title_line2}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              {t.hero_description}
            </p>
            <a href="#services" className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              {t.hero_button}
            </a>
          </div>
        </section>

        {/* SECTION SERVICES */}
        <section id="services" className="py-20 bg-gray-950/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">{t.services_tagline}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold">{t.services_title}</p>
            <div className="mt-12 grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              {/* Audit */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{t.service_audit_title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{t.service_audit_desc}</p>
                <div className="text-4xl font-bold mt-auto pt-4">299€</div>
                <a href="/services/audit" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {t.service_button}
                </a>
              </div>

              {/* Coaching */}
              <div className="bg-gray-800/50 p-8 rounded-xl border-2 border-cyan-500 relative flex flex-col">
                <div className="absolute top-0 right-4 -mt-4 bg-cyan-500 text-gray-900 px-4 py-1 font-bold rounded-full text-sm">{t.service_coaching_tag}</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{t.service_coaching_title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{t.service_coaching_desc}</p>
                <div className="text-4xl font-bold mt-auto pt-4">{t.service_coaching_price || '75€/heure'}</div>
                <a href="/services/coaching" className="mt-6 block text-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {t.service_button}
                </a>
              </div>

              {/* IA */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{t.service_ia_title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{t.service_ia_desc}</p>
                <div className="text-4xl font-bold mt-auto pt-4">{t.service_on_quote}</div>
                <a href="/services/integration-ia" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {t.service_button}
                </a>
              </div>

              {/* Création */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{t.service_creation_title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{t.service_creation_desc}</p>
                <div className="text-4xl font-bold mt-auto pt-4">{t.service_on_quote}</div>
                <a href="/services/creation-maintenance-sites" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  {t.service_button}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJET RÉCENT */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.recent_project_title}</h2>
              <p className="mt-4 text-lg text-slate-400">{t.recent_project_desc}</p>
            </div>
            <div className="mt-12 overflow-hidden rounded-3xl bg-slate-800/50 shadow-lg ring-1 ring-slate-700">
              {/* LIEN SUR L'IMAGE DU PROJET */}
              <Link href="https://courageous-paletas-4dcd3e.netlify.app/" target="_blank" rel="noopener noreferrer" legacyBehavior>
                <a className="block"> {/* Rend l'image entière cliquable */}
                  <Image 
                    src={DesignerExperienceImage} 
                    alt={t.recent_project_img_alt} 
                    className="h-auto w-full"
                    priority // On dit à Next.js de charger cette image en priorité
                    placeholder="blur" // Ajoute un effet de flou pendant le chargement
                  />
                </a>
              </Link>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-cyan-400">{t.recent_project_card_title}</h3>
                <p className="mt-3 text-base text-slate-300">{t.recent_project_card_desc}</p>
                {/* BOUTON "VOIR LA DÉMO EN DIRECT" */}
                <div className="mt-6 text-center">
                  <a 
                    href="https://courageous-paletas-4dcd3e.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                  >
                    {t.view_live_demo_button} {/* Nouvelle clé de traduction nécessaire */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TÉMOIGNAGES */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.testimonial_title}</h2>
            <div className="mt-12">
              <div className="rounded-3xl bg-slate-800/50 p-8 ring-1 ring-slate-700">
                <blockquote className="text-xl leading-8 text-slate-200">
                  <p>{t.testimonial_text}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 font-bold text-white">CD</div>
                  <div>
                    <div className="font-semibold text-white">{t.testimonial_author_name}</div>
                    <div className="text-slate-400">{t.testimonial_author_title}</div>
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSUS */}
        <section id="processus" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">{t.process_tagline}</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">{t.process_title}</p>
            <div className="mt-16 space-y-16">
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

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact_title}</h2>
            <p className="text-gray-300 mb-10 text-lg">{t.contact_desc}</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                {t.contact_button_whatsapp}
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                {t.contact_button_email}
              </a>
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