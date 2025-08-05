import Link from 'next/link';

// MODIFIÉ : On accepte "lang" en plus de "categories"
export default function CategoriesList({ categories, lang }) {
  return (
    <ul>
      {categories.map(category => (
        <li key={category} className="mb-2">
          {/* MODIFIÉ : Le lien inclut maintenant la langue */}
          <Link href={`/${lang}/blog/categorie/${category.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}