// components/CategoryFilter.js
'use client'; // Indique que c'est un client component

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'; // Pour lire et modifier les paramètres d'URL

export default function CategoryFilter({ categories, lang }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get('category') || 'All'; // Récupère la catégorie actuelle de l'URL, ou 'All' par défaut

  const handleCategoryClick = (category) => {
    const params = new URLSearchParams(searchParams.toString()); // Crée une copie des paramètres actuels

    if (category === 'All') {
      params.delete('category'); // Si "All", supprime le paramètre de catégorie
    } else {
      params.set('category', category); // Sinon, définit le paramètre de catégorie
    }

    // Navigue vers la nouvelle URL, en gardant les autres paramètres si il y en a
    router.push(`/${lang}/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8 px-4">
      {/* Bouton "All" */}
      <button
        onClick={() => handleCategoryClick('All')}
        className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
          currentCategory === 'All'
            ? 'bg-cyan-600 text-white shadow-lg'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
        }`}
      >
        All
      </button>

      {/* Boutons pour chaque catégorie unique */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
            currentCategory === category
              ? 'bg-cyan-600 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}