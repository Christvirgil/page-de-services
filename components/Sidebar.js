import CategoriesList from './CategoriesList';
// MODIFIÉ : On importe les dictionnaires
import { fr } from '../dictionaries/fr.js';
import { en } from '../dictionaries/en.js';

// MODIFIÉ : On accepte "lang"
export default function Sidebar({ categories, lang }) {
  // MODIFIÉ : On choisit la bonne traduction
  const t = lang === 'en' ? en : fr;

  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-bold mb-4 text-gray-100">
          {t.sidebar_categories_title}
        </h3>
        {/* MODIFIÉ : On passe la "lang" au composant enfant */}
        <CategoriesList categories={categories} lang={lang} />
      </div>
    </aside>
  );
}