// Fichier: app/services/integration-ia/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';

export default function IntegrationIAPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Intégration d'API IA
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Connectez la puissance de ChatGPT, Mistral ou d'autres modèles d'IA à votre application Laravel pour créer des fonctionnalités intelligentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Pour qui est-ce ?</h2>
            <p className="text-gray-400 mb-6">Ce service est destiné aux entreprises qui veulent innover en intégrant l'IA pour :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Créer des chatbots et assistants intelligents.</li>
                <li>Générer automatiquement du contenu (descriptions, articles).</li>
                <li>Analyser et catégoriser des données non structurées.</li>
                <li>Créer des fonctionnalités de recherche sémantique.</li>
              </ul>
            <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-400">Nous définissons ensemble vos objectifs, je vous conseille sur le meilleur modèle d'IA à utiliser, et je développe l'intégration de A à Z dans votre application Laravel.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Projet sur Mesure</h3>
            <div className="text-5xl font-bold mb-6">Sur Devis</div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Conseil sur le choix du modèle d'IA</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Développement de l'intégration API</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Optimisation des prompts</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Code testé et documenté</li>
            </ul>
            <Link href="/contact" className="block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Obtenir un devis
            </Link>
          </div>
        </div>

        {/* On peut ajouter une étude de cas ici plus tard quand il y en aura une sur l'IA */}

      </main>
    </div>
  );
}
