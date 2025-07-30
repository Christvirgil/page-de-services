// Fichier: app/services/audit/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';

export default function AuditPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Audit de Performance & Sécurité
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Votre application Laravel est lente ? Vous avez des doutes sur sa sécurité ? Obtenez un rapport d'actions claires pour l'optimiser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Pour qui est-ce ?</h2>
            <p className="text-gray-400 mb-6">Cet audit est idéal pour les fondateurs de SaaS, les chefs de projet ou les développeurs qui font face à :</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Des temps de chargement lents qui frustrent les utilisateurs.</li>
                <li>Des doutes sur la robustesse et la sécurité de leur code.</li>
                <li>Le besoin d'un plan d'action clair avant d'investir dans de nouvelles fonctionnalités.</li>
              </ul>
            <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-400">Mon processus est simple et transparent. Je vous livre un rapport complet sous 7 jours.</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Prestation d'Audit</h3>
            <div className="text-5xl font-bold mb-6">299€</div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Analyse des requêtes N+1</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Vérification des index de BDD</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Audit des failles de sécurité OWASP Top 10</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Rapport PDF avec plan d'action priorisé</li>
            </ul>
            <a 
  href="https://www.paypal.com/ncp/payment/9ZLAGAW6VU4NU"
  target="_blank" 
  rel="noopener noreferrer" 
  className="block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
>
  Commander l'Audit (299€)
</a>
          </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Ils ont résolu leurs problèmes de performance</h2>
            <div className="max-w-2xl mx-auto">
                <Link href="/etudes-de-cas/sauvetage-app-laravel-lente" className="block group">
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-cyan-500 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                        Sauvetage d'une App Laravel Lente : Temps de Réponse Divisé par 10
                        </h3>
                        <p className="text-gray-400 mt-2">Découvrez comment un audit a permis d'identifier et de corriger des goulots d'étranglement critiques.</p>
                        <p className="text-cyan-400 font-semibold mt-4">Lire l'étude de cas →</p>
                    </div>
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
