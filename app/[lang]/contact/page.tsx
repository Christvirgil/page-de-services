// Fichier : app/[lang]/contact/page.tsx (Version Finale Complète)

"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { fr } from '../../../dictionaries/fr.js';
import { en } from '../../../dictionaries/en.js';

const getDictionary = (lang: 'fr' | 'en') => {
  if (lang === 'en') return en;
  return fr;
};

// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97";
const PHONE_NUMBER_LINK = "+24160061497";
const WHATSAPP_NUMBER_RAW = "24160061497";
// ===================================================================

export default function ContactPage({ params: { lang } }: { params: { lang: 'fr' | 'en' } }) {
  const t = getDictionary(lang);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(t.contact_form_status_sending);
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movllezq", {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus(t.contact_form_status_success);
        form.reset();
      } else {
        const responseData = await response.json();
        setStatus(responseData.errors ? responseData.errors.map((e: any) => e.message).join(", ") : t.contact_form_status_error_default);
      }
    } catch (error) {
      setStatus(t.contact_form_status_error_default);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {t.contact_page_title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            {t.contact_page_subtitle}
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-100">{t.contact_reason_title}</h2>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">{t.contact_reason1_title}</h3>
                <p className="text-gray-400 mt-1">{t.contact_reason1_desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">{t.contact_reason2_title}</h3>
                <p className="text-gray-400 mt-1">{t.contact_reason2_desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">{t.contact_reason3_title}</h3>
                <p className="text-gray-400 mt-1">{t.contact_reason3_desc}</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-semibold mb-4">{t.contact_direct_title}</h3>
                <div className="space-y-4">
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <Mail size={20} /><span>{EMAIL_ADDRESS}</span>
                    </a>
                    <a href={`tel:${PHONE_NUMBER_LINK}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <Phone size={20} /><span>{PHONE_NUMBER_DISPLAY}</span>
                    </a>
                     <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <MessageSquare size={20} /><span>{t.contact_direct_whatsapp}</span>
                    </a>
                </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">{t.contact_form_title}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t.contact_form_name_label}</label>
                <input type="text" name="name" id="name" required className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t.contact_form_email_label}</label>
                <input type="email" name="email" id="email" required className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t.contact_form_message_label}</label>
                <textarea name="message" id="message" required rows={5} className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  {t.contact_form_button}
                </button>
              </div>
              {status && <p className="text-center text-gray-400 text-sm mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}