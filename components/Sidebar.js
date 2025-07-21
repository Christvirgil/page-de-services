import CategoriesList from './CategoriesList';

export default function Sidebar({ categories }) {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
        <h3 className="text-xl font-bold mb-4 text-gray-100">Catégories</h3>
        <CategoriesList categories={categories} />
      </div>
      {/* Vous pouvez ajouter une barre de recherche ici plus tard */}
    </aside>
  );
}
