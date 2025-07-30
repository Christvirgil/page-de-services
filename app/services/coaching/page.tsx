// Fichier : app/services/coaching/page.tsx

"use client"; // Composant interactif

import { Metadata } from 'next'; // On aura besoin de Metadata pour le titre de l'onglet
import Header from '@/components/Header';

// ===================================================================
//  VOS INFORMATIONS PERSONNELLES (Récupérées de la page d'accueil)
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97"; 
const PHONE_NUMBER_LINK = "+24160061497"; 
const WHATSAPP_NUMBER_RAW = "24160061497"; 
// ===================================================================

// Métadonnées pour le titre de l'onglet



export default function CoachingPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Section Héro pour le Coaching */}
        <section className="relative text-center py-20 sm:py-28 px-4 overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              Session Coaching & Dépannage
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Bloqué sur un problème technique ? Besoin d'un avis d'expert sur votre architecture ? 
              Résolvons vos défis ensemble en 1h.
            </p>
          </div>
        </section>

        {/* Détails du Service de Coaching */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            {/* Colonne Gauche : Pourquoi est-ce pour vous ? */}
            <div>
              <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Pour qui est-ce ?</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold">Un expert à votre service</p>
              <p className="mt-4 text-gray-300">
                Ce coaching est parfait pour les développeurs ou les équipes qui ont besoin d'une aide ponctuelle et ultra-efficace pour :
              </p>
              {/* ========================================================== */}
              {/* CORRECTION ICI : la liste est bien un <ul> indépendant    */}
              {/* ========================================================== */}
              <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
                <li>Débloquer un bug persistant.</li>
                <li>Valider une approche technique ou une architecture.</li>
                <li>Apprendre une nouvelle notion sur Laravel ou l'IA.</li>
                <li>Optimiser une fonctionnalité spécifique.</li>
                <li>Faire du "pair programming" sur un point précis.</li>
              </ul>
            </div>

            {/* Colonne Droite : L'Offre et Prix */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500 relative flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Session d'1h</h3>
              <div className="text-5xl font-extrabold text-white my-4">75€<span className="text-gray-400 text-2xl">/heure</span></div>
              <ul className="text-gray-300 space-y-2 text-left w-full max-w-xs">
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>Résolution de bug en direct</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>Conseil en architecture</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>Pair programming</li>
                <li className="flex items-center"><span className="text-cyan-400 mr-2">✓</span>Session enregistrée (sur demande)</li>
              </ul>
              <a 
  href="https://www.paypal.com/ncp/payment/629VLLAP28YFY" // <-- METTEZ LE BON LIEN PAYPAL A 75€ ICI
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-8 block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
>
  Réserver la Session (75€)
</a>
            </div>
          </div>
        </section>

        {/* Comment ça marche ? (Processus simplifié) */}
        <section className="py-20 bg-gray-950/50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">Comment ça marche ?</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">Un processus simple et transparent</p>
            <div className="mt-12 space-y-12">
              {[{
                number: "01",
                title: "Réservez & Payez",
                text: "Cliquez sur le bouton pour réserver votre session et effectuez le paiement sécurisé via Stripe."
              }, {
                number: "02",
                title: "Décrivez votre Problème",
                text: "Après le paiement, vous recevrez un lien pour me décrire votre défi ou la question à aborder. Partagez le code ou les accès si nécessaire (en toute sécurité)."
              }, {
                number: "03",
                title: "La Session Live",
                text: "Nous nous connectons en visio pour une session d'1h de travail intensif. Vous partagez votre écran, et nous résolvons le problème en direct."
              }, {
                number: "04",
                title: "Bénéfices Post-Session",
                text: "Vous repartez avec une solution concrète, des explications claires et l'enregistrement de la session (sur demande)."
              }].map((step, i) => (
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
              Prêt à débloquer votre projet ?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Une session de coaching est souvent la solution la plus rapide et la plus efficace pour les défis ponctuels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">Discutons sur WhatsApp</a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">Envoyez-moi un Email</a>
            </div>
          </div>
        </section>

      </main>
      <footer className="text-center py-8 border-t border-gray-800">
        <div className="text-gray-500 space-y-2">
          <p>© 2024 - Allogic.dev | Le pont entre l'IA et le code industriel</p>
          <p>Contact : <a href={`tel:${PHONE_NUMBER_LINK}`} className="hover:text-cyan-400 transition-colors">{PHONE_NUMBER_DISPLAY}</a></p>
        </div>
      </footer>
    </div>
  );
}