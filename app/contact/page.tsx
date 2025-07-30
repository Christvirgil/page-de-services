// Fichier : app/contact/page.tsx

"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import { Mail, Phone, MessageSquare } from 'lucide-react'; // Icônes pour l'illustration

// ===================================================================
//  VOS INFORMATIONS PERSONNELLES (récupérées de la page d'accueil)
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97";
const PHONE_NUMBER_LINK = "+24160061497";
const WHATSAPP_NUMBER_RAW = "24160061497";
// ===================================================================

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Envoi en cours...");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/movllezq", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("Merci ! Votre message a bien été envoyé.");
        form.reset();
      } else {
        const responseData = await response.json();
        setStatus(responseData.errors ? responseData.errors.map((e: any) => e.message).join(", ") : "Oups! Une erreur est survenue.");
      }
    } catch (error) {
      setStatus("Oups! Une erreur est survenue.");
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-6xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Parlons de votre projet
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Que vous ayez une idée claire, un projet existant à améliorer, ou simplement une question, je suis là pour vous aider à trouver la meilleure solution technique.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-start">
          {/* Colonne de gauche : Raisons de contacter */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-100">Pourquoi me contacter ?</h2>
            
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">Démarrer un nouveau projet</h3>
                <p className="text-gray-400 mt-1">Vous avez une idée d'application ou de SaaS ? Discutons-en pour définir un plan d'action et un devis précis.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">Audit & Coaching</h3>
                <p className="text-gray-400 mt-1">Votre application Laravel est lente ou vous êtes bloqué ? Une session de coaching ou un audit peut débloquer la situation rapidement.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-full"><MessageSquare className="text-cyan-400" /></div>
              <div>
                <h3 className="text-xl font-semibold">Une simple question</h3>
                <p className="text-gray-400 mt-1">Pas de projet immédiat mais une question technique ? N'hésitez pas, je réponds à tout le monde.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Contact Direct</h3>
                <div className="space-y-4">
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <Mail size={20} />
                        <span>{EMAIL_ADDRESS}</span>
                    </a>
                    <a href={`tel:${PHONE_NUMBER_LINK}`} className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <Phone size={20} />
                        <span>{PHONE_NUMBER_DISPLAY}</span>
                    </a>
                     <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
                        <MessageSquare size={20} />
                        <span>Disponible sur WhatsApp</span>
                    </a>
                </div>
            </div>
          </div>

          {/* Colonne de droite : Formulaire */}
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                <input type="text" name="name" id="name" required className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input type="email" name="email" id="email" required className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Votre Message</label>
                <textarea name="message" id="message" required rows={5} className="w-full bg-gray-900 border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Envoyer
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
