// Fichier: app/services/creation-maintenance-sites/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';

export default function WebServicesPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-5xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Création & Maintenance de Sites Web
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Du site vitrine au portail complexe avec inscription, je conçois et maintiens des solutions web robustes et performantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Mes Services</h2>
            <p className="text-gray-400 mb-6">Je vous accompagne sur plusieurs aspects de vos projets web :</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li><strong>Création de sites sur mesure :</strong> Sites vitrines, blogs, plateformes avec système d'inscription et gestion d'utilisateurs.</li>
              <li><strong>Développement de fonctionnalités spécifiques :</strong> Intégration d'APIs, modules personnalisés, bases de données complexes.</li>
              <li><strong>Intégration d'IA à votre site :</strong> Ajoutez des fonctionnalités intelligentes comme des chatbots, la génération de contenu, l'analyse de données ou la recherche sémantique.</li>
              <li><strong>Maintenance et évolution :</strong> Mises à jour, corrections de bugs, ajout de nouvelles fonctionnalités pour assurer la pérennité de votre site.</li>
              <li><strong>Maintenance de sites conçus par IA :</strong> Votre site a été généré par une IA et vous avez besoin d'un expert pour le maintenir, l'améliorer ou le déboguer ? Je suis là pour ça.</li>
            </ul>
            <h2 className="text-3xl font-bold text-gray-100 mt-10 mb-4">Pour qui est-ce ?</h2>
            <p className="text-gray-400">Ce service est idéal pour les entrepreneurs, les petites et moyennes entreprises, ou toute personne ayant besoin d'une présence web professionnelle et fonctionnelle, avec un accent particulier sur les sites nécessitant des interactions utilisateurs (inscription, gestion de compte, etc.).</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Votre Projet, Votre Devis</h3>
            <div className="text-5xl font-bold mb-6">Sur Devis</div>
            <p className="text-gray-400 mb-4">Le coût de votre projet dépendra de sa complexité, des fonctionnalités spécifiques (système d'inscription, intégrations, IA), du volume de contenu et des délais.</p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Analyse approfondie de vos besoins</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Conception et développement sur mesure</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Code optimisé et sécurisé</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Support et maintenance post-lancement</li>
            </ul>
            <Link href="/contact" className="block text-center w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Obtenir un devis
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
