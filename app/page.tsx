import Header from '@/components/Header';

// ===================================================================
//  VOS INFORMATIONS PERSONNELLES
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97"; 
const PHONE_NUMBER_LINK = "+24160061497"; 
const WHATSAPP_NUMBER_RAW = "24160061497"; 
// ===================================================================

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        {/* Section Héro - Proposition de valeur renforcée */}
        <section id="accueil" className="relative text-center py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              Développeur Laravel & IA<br/>J'automatise vos projets, je booste votre code
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Services, coaching et formations pour transformer vos idées en applications robustes et performantes,
              en intégrant la puissance de l'Intelligence Artificielle.
            </p>
            <a href="#services" className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Découvrir mes services
            </a>
          </div>
        </section>

        {/* =================================================================== */}
        {/* MODIFICATION MAJEURE ICI : NOUVELLE SECTION DE SERVICES ET PRODUITS */}
        {/* =================================================================== */}
        <section id="services" className="py-20 bg-gray-950/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Comment je peux vous aider ?</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold">Des solutions concrètes pour vos projets Laravel & IA</p>
            
            <div className="mt-12 grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
              
              {/* Offre 1: Audit */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Audit de Performance & Sécurité</h3>
                <p className="text-gray-300 mb-6 flex-grow">Votre application Laravel est lente ou vous avez des doutes sur sa sécurité ? Je l'analyse en profondeur et vous fournis un rapport d'actions claires.</p>
                <div className="text-4xl font-bold mt-auto pt-4">299€</div>
                <a href="/services/audit" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  En savoir plus
                </a>
              </div>

              {/* Offre 2: Coaching (Offre principale à pousser) */}
              <div className="bg-gray-800/50 p-8 rounded-xl border-2 border-cyan-500 relative flex flex-col">
                <div className="absolute top-0 right-4 -mt-4 bg-cyan-500 text-gray-900 px-4 py-1 font-bold rounded-full text-sm">Best-seller</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Session Coaching & Dépannage</h3>
                <p className="text-gray-300 mb-6 flex-grow">Bloqué sur un problème technique ? Besoin d'un avis d'expert sur votre architecture ? 1h de visio pour résoudre votre problème ensemble.</p>
                <div className="text-4xl font-bold mt-auto pt-4">75€<span className="text-gray-400 text-lg">/heure</span></div>
                <a href="/services/coaching" className="mt-6 block text-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  En savoir plus
                </a>
              </div>

              {/* Offre 3: Intégration */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Intégration d'API IA</h3>
                <p className="text-gray-300 mb-6 flex-grow">Connectez la puissance de ChatGPT (ou autre IA) à votre application Laravel. Idéal pour chatbots, génération de contenu, etc.</p>
                <div className="text-4xl font-bold mt-auto pt-4">Sur Devis</div>
                <a href="/services/integration-ia" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  En savoir plus
                </a>
              </div>

              {/* Nouvelle Offre : Création & Maintenance de Sites Web */}
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Création & Maintenance de Sites Web</h3>
                <p className="text-gray-300 mb-6 flex-grow">Besoin d'un site sur mesure avec inscription, ou de la maintenance pour votre site existant (même conçu par IA) ?</p>
                <div className="text-4xl font-bold mt-auto pt-4">Sur Devis</div>
                <a href="/services/creation-maintenance-sites" className="mt-6 block text-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  En savoir plus
                </a>
              </div>

            </div>
          </div>
        </section>
        {/* =================================================================== */}
        {/* FIN DE LA MODIFICATION MAJEURE                                       */}
        {/* =================================================================== */}

        <section id="processus" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">Votre Chemin Vers le Succès</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">Un processus simple et transparent</p>
            <div className="mt-16 space-y-16">
              {[
                { number: "01", title: "Contact & Analyse", text: "Nous discutons de votre besoin (coaching, audit, projet...). Je vous pose les bonnes questions pour comprendre parfaitement votre objectif." },
                { number: "02", title: "Proposition & Plan d'Action", text: "Vous recevez une proposition claire et chiffrée. Pour les projets, nous définissons ensemble les étapes clés." },
                { number: "03", title: "Réalisation & Communication", text: "Je réalise la prestation convenue (coaching, audit, développement). Vous êtes tenu informé en continu de l'avancement." },
                { number: "04", title: "Livraison & Suivi", text: "Je vous livre le travail final (rapport d'audit, code fonctionnel...). Je reste disponible pour m'assurer que tout fonctionne parfaitement." },
              ].map((step, i) => (
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

        <section id="contact" className="py-20 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à passer à la vitesse supérieure ?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Contactez-moi pour discuter de votre projet, sans engagement.
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