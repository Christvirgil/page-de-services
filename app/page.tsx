// app/page.tsx
import Header from '@/components/Header';

// ===================================================================
//  MODIFIEZ VOS INFORMATIONS PERSONNELLES ICI
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
// Numéro pour l'appel (format international lisible)
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97"; 
// Lien pour l'appel (format international sans espaces)
const PHONE_NUMBER_LINK = "+24160061497"; 
// Numéro pour WhatsApp (format international SANS le '+')
const WHATSAPP_NUMBER_RAW = "24160061497"; 
// ===================================================================


// Composant d'icône (ne pas toucher)
const Icon = ({ path }: { path: string }) => (
  <svg className="w-8 h-8 mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />

      <main>
        {/* ===== SECTION HÉROS AMÉLIORÉE ===== */}
        <section id="accueil" className="relative text-center py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              Votre IA crée le design. <br/> Je lui donne vie.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Service de développement backend sur-mesure pour transformer vos prototypes générés par IA en applications web réelles et fonctionnelles.
            </p>
            <a href="#contact" className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Transformer mon design en produit
            </a>
          </div>
        </section>

        {/* ===== SECTION SERVICES AMÉLIORÉE ===== */}
        <section id="services" className="py-20 bg-gray-950/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Mes Services</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold">Le moteur qui manquait à votre vision</p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Je construis le pont technique entre votre créativité et une application robuste.</p>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                <h3 className="text-xl font-bold mb-2">API sur-mesure</h3>
                <p className="text-gray-400 text-sm">Le cerveau de votre application pour gérer la logique métier, les calculs et les données.</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7s0 0 0 0" />
                <h3 className="text-xl font-bold mb-2">Base de Données</h3>
                <p className="text-gray-400 text-sm">Stockage sécurisé et optimisé pour les données de vos utilisateurs sur PostgreSQL, MongoDB, etc.</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                <h3 className="text-xl font-bold mb-2">Authentification</h3>
                <p className="text-gray-400 text-sm">Systèmes de connexion et d'inscription (Clerk, Supabase Auth) simples et sécurisés.</p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                <h3 className="text-xl font-bold mb-2">Déploiement Pro</h3>
                <p className="text-gray-400 text-sm">Une infrastructure automatisée sur GitHub Actions qui grandit avec votre succès.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION PROCESSUS (maintenant remplie) ===== */}
        <section id="processus" className="py-20">
           <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">Mon Processus</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">De l'idée à la production en 4 étapes claires</p>
            <div className="mt-16 space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="text-8xl font-extrabold text-gray-700 text-center">01</div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-cyan-400">Découverte & Stratégie</h3>
                  <p className="mt-2 text-gray-400">Nous commençons par un appel pour comprendre votre vision, votre design IA et vos objectifs. Je vous propose ensuite un plan d'action technique et un devis transparent.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="text-8xl font-extrabold text-gray-700 text-center">02</div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-cyan-400">Développement & Intégration</h3>
                  <p className="mt-2 text-gray-400">Je construis l'architecture backend et je la connecte à votre frontend. Vous avez un accès constant pour suivre l'avancement et donner votre feedback.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="text-8xl font-extrabold text-gray-700 text-center">03</div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-cyan-400">Tests & Livraison</h3>
                  <p className="mt-2 text-gray-400">Je m'assure que tout fonctionne parfaitement. Je vous livre une application fonctionnelle et je vous montre comment tout fonctionne.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                <div className="text-8xl font-extrabold text-gray-700 text-center">04</div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-cyan-400">Suivi & Maintenance</h3>
                  <p className="mt-2 text-gray-400">Je reste disponible en option pour la maintenance, les mises à jour de sécurité et l'ajout de nouvelles fonctionnalités.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ===== SECTION CONTACT MISE À JOUR ===== */}
        <section id="contact" className="py-20 bg-gray-950/50">
           <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à passer à l'étape suivante ?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">Choisissez le moyen de contact qui vous convient le mieux.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M16.75 13.96c.25.13.43.2.5.28.08.08.13.18.15.25.03.08.03.18 0 .28-.03.1-.08.18-.13.2-.05.03-.13.05-.2.08s-.15.05-.23.05c-.08 0-.15 0-.23-.03-.08-.03-.15-.03-.2-.05-.08-.03-.15-.05-.2-.08-.05-.03-.1-.05-.15-.08-.1-.05-.2-.1-.3-.15s-.2-.1-.3-.18c-1.1-1.1-1.83-2.38-2.15-3.85-.03-.15-.05-.3-.05-.45s0-.3.03-.45c0-.05 0-.1.03-.15.03-.05.03-.1.05-.15.13-.25.28-.48.45-.68.18-.2.38-.35.6-.48.23-.13.48-.2.75-.2.15 0 .3.03.43.05.13.03.25.08.38.15.13.08.23.18.3.3.08.13.13.28.15.45.03.18.03.35 0 .53-.03.18-.08.35-.15.5-.08.15-.18.28-.3.4-.13.13-.23.23-.3.3-.08.08-.15.15-.2.23-.05.08-.08.15-.08.23s0 .15.03.23c.03.08.05.15.08.2.03.05.08.1.13.15.18.15.35.3.55.45.2.15.4.28.6.4zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                Discuter sur WhatsApp
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                Envoyer un e-mail
              </a>
            </div>
           </div>
        </section>
      </main>

      {/* ===== FOOTER MIS À JOUR ===== */}
      <footer className="text-center py-8 border-t border-gray-800">
        <div className="text-gray-500 space-y-2">
            <p>© 2024 - AILogic.dev | Le pont entre l'IA et le code.</p>
            <p>Contact : <a href={`tel:${PHONE_NUMBER_LINK}`} className="hover:text-cyan-400 transition-colors">{PHONE_NUMBER_DISPLAY}</a></p>
        </div>
      </footer>
    </div>
  );
}