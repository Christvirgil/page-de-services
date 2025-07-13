// app/page.tsx

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">

      {/* ===== SECTION HÉROS ===== */}
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-cyan-400">
          De GitHub à Vercel, sans effort.
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Je gère votre backend, base de données et déploiements.
          <br />
          Concentrez-vous sur votre code, je m'occupe du reste.
        </p>
        <a 
          href="#services" 
          className="mt-8 inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Découvrir mes services
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-4">

        {/* ===== SECTION SERVICES ===== */}
        <section id="services" className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Une infrastructure moderne et automatisée
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Backend & API</h3>
              <p className="text-gray-400">Déploiement et scaling de vos API Node.js, Python, etc. sur des plateformes performantes.</p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Base de Données</h3>
              <p className="text-gray-400">Configuration, sécurisation et sauvegarde de vos bases de données (PostgreSQL, MongoDB).</p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">CI/CD sur GitHub</h3>
              <p className="text-gray-400">Automatisation des tests et des déploiements avec GitHub Actions vers Vercel et autres.</p>
            </div>
          </div>
        </section>

        {/* ===== SECTION CONTACT ===== */}
        <section id="contact" className="py-16 text-center">
           <h2 className="text-4xl font-bold text-center mb-4">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-gray-300 mb-8">Contactez-moi pour discuter de vos besoins et obtenir un devis gratuit.</p>
          <a 
            href="mailto:christvirgil34@gmail.com"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Envoyer un email
          </a>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-gray-500">© 2025 - Gestion des backend</p>
      </footer>

    </div>
  )
}