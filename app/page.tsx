// app/page.tsx
import Header from '@/components/Header'; // Importe le nouveau composant

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header /> {/* Voilà votre menu ! */}

      <main>
        {/* ===== SECTION HÉROS ===== */}
        <section id="accueil" className="text-center py-24 sm:py-32 px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Votre IA crée le design. <br/> Je lui donne vie.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Service de développement backend sur-mesure pour transformer vos prototypes générés par IA en applications web réelles et fonctionnelles.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105"
          >
            Transformer mon design en produit
          </a>
        </section>

        {/* ===== SECTION SERVICES (Nouvelle version) ===== */}
        <section id="services" className="py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vous avez le design. Il vous manque le moteur.</h2>
            <p className="text-lg text-gray-400 mb-12">Je construis le pont entre votre vision créative et une application robuste.</p>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Vous pouvez détailler vos services ici */}
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">API sur-mesure</h3>
                <p className="text-gray-400">Le cerveau de votre application pour gérer toute la logique métier.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Base de Données</h3>
                <p className="text-gray-400">Stockage sécurisé et optimisé pour les données de vos utilisateurs.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Authentification</h3>
                <p className="text-gray-400">Systèmes de connexion et d'inscription simples et sécurisés.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Déploiement Pro</h3>
                <p className="text-gray-400">Une infrastructure automatisée qui grandit avec votre succès.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION PROCESSUS ===== */}
        <section id="processus" className="py-20">
           <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12">De l'idée à la production en 4 étapes</h2>
            {/* Ici vous pouvez détailler les 4 étapes */}
          </div>
        </section>

        {/* ===== SECTION À PROPOS ===== */}
        <section id="a-propos" className="py-20 bg-gray-950">
           <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Votre partenaire technique</h2>
             <p className="text-lg text-gray-400">
               Passionné par l'intersection de l'IA et du développement web, j'aide les créateurs à surmonter l'obstacle technique qui sépare une belle image d'un vrai produit.
             </p>
          </div>
        </section>
        
        {/* ===== SECTION CONTACT ===== */}
        <section id="contact" className="py-20 text-center">
           <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Prêt à donner vie à votre application ?
            </h2>
            <p className="text-gray-300 mb-8">Discutons de la manière dont nous pouvons transformer votre design en une application fonctionnelle que vos utilisateurs adoreront.</p>
            <a
              href="mailto:votre.email@example.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-transform transform hover:scale-105"
            >
              Planifier un appel gratuit
            </a>
           </div>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-800">
        <p className="text-gray-500">© 2024 - Christ Virgil</p>
      </footer>
    </div>
  );
}