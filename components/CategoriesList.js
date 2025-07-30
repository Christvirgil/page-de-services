import Link from 'next/link';

export default function CategoriesList({ categories }) {
  return (
    <ul>
      {categories.map(category => (
        <li key={category} className="mb-2">
          <Link href={`/blog/categorie/${category.toLowerCase()}`} className="text-gray-400 hover:text-cyan-400">
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
