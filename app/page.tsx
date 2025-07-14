// app/page.tsx
import Header from '@/components/Header';

// ===================================================================
//  VOS INFORMATIONS PERSONNELLES
// ===================================================================
const EMAIL_ADDRESS = "christvirgil@gmail.com";
const PHONE_NUMBER_DISPLAY = "+241 60 06 14 97"; 
const PHONE_NUMBER_LINK = "+24160061497"; 
const WHATSAPP_NUMBER_RAW = "24160061497"; 
// ===================================================================

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
        {/* Section Héro - Proposition de valeur renforcée */}
        <section id="accueil" className="relative text-center py-24 sm:py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-800 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
              Votre IA crée le design.<br />Je transforme l'ébauche en arme de croissance
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
              Service expert pour transformer vos prototypes IA en backends industriels - 
              aussi flexibles que du sur-mesure, aussi simples qu'une solution clé en main
            </p>
            <a href="#contact" className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Transformer mon prototype IA
            </a>
          </div>
        </section>

        {/* Section Services - Reformulée pour les bénéfices clients */}
        <section id="services" className="py-20 bg-gray-950/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Votre Avantage Concurrentiel</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold">Pourquoi l'IA seule ne suffit pas</p>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Les prototypes IA sont fragiles. Je les transforme en solutions professionnelles
            </p>
            
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M13 10V3L4 14h7v7l9-11h-7z" />
                <h3 className="text-xl font-bold mb-2">Backend Scalable</h3>
                <p className="text-gray-400 text-sm">
                  Votre app ne crashera plus sous charge. Architecture optimisée pour supporter 
                  des milliers d'utilisateurs simultanés
                </p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                <h3 className="text-xl font-bold mb-2">Sécurité Industrielle</h3>
                <p className="text-gray-400 text-sm">
                  Audit et blindage complet contre les failles courantes des générateurs IA 
                  (injections, fuites de données)
                </p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                <h3 className="text-xl font-bold mb-2">Intégrations Métier</h3>
                <p className="text-gray-400 text-sm">
                  Connexion à vos APIs complexes (ERP, paiements) que les outils IA 
                  ne savent pas gérer
                </p>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">
                <Icon path="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                <h3 className="text-xl font-bold mb-2">Maintenance Proactive</h3>
                <p className="text-gray-400 text-sm">
                  Surveillance continue et mises à jour pour une application toujours 
                  performante et sécurisée
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="processus" className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase text-center">Votre Chemin Vers le Succès</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold text-center">De l'ébauche IA à l'application professionnelle</p>
            <div className="mt-16 space-y-16">
              {[
                { number: "01", title: "Audit & Stratégie", text: "Nous analysons votre prototype IA pour identifier les faiblesses techniques et établissons un plan de transformation sur-mesure." },
                { number: "02", title: "Reconstruction Ciblée", text: "Je reconstruis les parties critiques du backend en conservant ce qui fonctionne. Vous suivez l'avancement en temps réel." },
                { number: "03", title: "Tests Industriels", text: "Stress test de l'application et correction des vulnérabilités pour une résistance optimale en conditions réelles." },
                { number: "04", title: "Lancement & Suivi", text: "Livraison de votre application renforcée avec option de monitoring continu et maintenance évolutive." },
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

        <section className="py-20 bg-gray-900">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Solutions Clés en Main</h2>
            <p className="mt-2 text-3xl sm:text-4xl font-bold">Choisissez Votre Pack de Transformation</p>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Rescue Pack</h3>
                <p className="text-gray-300 mb-6">Pour les prototypes IA qui montrent des faiblesses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Audit complet du backend</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Correction de 5 failles critiques</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Optimisation des performances</span></li>
                </ul>
                <div className="text-3xl font-bold mt-6">499€<span className="text-gray-400 text-lg">/mois</span></div>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500 relative">
                <div className="absolute top-0 right-0 bg-cyan-500 text-gray-900 px-4 py-1 font-bold rounded-bl-lg">Populaire</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Full Transform</h3>
                <p className="text-gray-300 mb-6">Reconstruction complète pour applications critiques</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Backend entièrement reconstruit</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Intégration de 3 APIs métier</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Monitoring 24/7 pendant 3 mois</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Garantie de performance</span></li>
                </ul>
                <div className="text-3xl font-bold mt-6">2 499€<span className="text-gray-400 text-lg">/projet</span></div>
              </div>
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Enterprise</h3>
                <p className="text-gray-300 mb-6">Solution complète pour startups ambitieuses</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Backend haute disponibilité</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Support technique prioritaire</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Évolutions mensuelles incluses</span></li>
                  <li className="flex items-start"><span className="text-cyan-400 mr-2">✓</span><span>Architecture multi-cloud</span></li>
                </ul>
                <div className="text-3xl font-bold mt-6">4 999€<span className="text-gray-400 text-lg">/mois</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-950/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Votre prototype IA mérite un backend professionnel</h2>
            <p className="text-gray-300 mb-6 text-lg">Ne laissez pas les limites techniques gâcher votre vision</p>
            <p className="max-w-2xl mx-auto text-cyan-400 italic mb-10">
              "Après l'intervention d'Allogic, notre app générée par IA a tenu la charge du Black Friday"
              <span className="block mt-2 text-white not-italic">- Startup E-commerce</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">Diagnostic Gratuit sur WhatsApp</a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center justify-center gap-3 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">Demander un Devis Personnalisé</a>
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