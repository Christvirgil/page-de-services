// components/PostCard.js
import Link from 'next/link';
import Image from 'next/image'; // Importe le composant Image de Next.js
import { format } from 'date-fns'; // Pour formater les dates
import { fr, enUS } from 'date-fns/locale'; // Importe les locales nécessaires

// Fonction utilitaire pour obtenir la locale de date-fns
const getLocale = (lang) => {
  if (lang === 'fr') return fr;
  if (lang === 'en') return enUS;
  return enUS; // Fallback par défaut
};

export default function PostCard({ post, lang }) {
  if (!post || !post.frontmatter) return null; // S'assure que 'post' et 'frontmatter' existent

  const postDate = new Date(post.frontmatter.date);
  const formattedDate = format(postDate, 'PP', { locale: getLocale(lang) });

  return (
    <div className="bg-gray-800/50 shadow-md rounded-xl overflow-hidden h-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
      {/* Nouvelle section pour l'image - Conditionnel si l'image existe */}
      {post.frontmatter.image && (
        <div className="relative w-full h-48 flex-shrink-0">
          <Image
            src={post.frontmatter.image} // Utilise le chemin de l'image du frontmatter
            alt={post.frontmatter.title} // Utilise le titre comme texte alternatif
            layout="fill" // L'image remplit son conteneur parent
            objectFit="cover" // Assure que l'image couvre la zone sans distorsion
            className="rounded-t-xl" // Arrondit les coins supérieurs de l'image
          />
        </div>
      )}

      <div className="p-4 flex flex-col justify-between flex-grow"> {/* P-4 pour l'espacement, flex-grow pour remplir */}
        <div>
          <p className="text-cyan-400 text-xs font-semibold">{post.frontmatter.category}</p>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-100 line-clamp-2">
            {/* Lien enveloppant le titre pour naviguer vers l'article */}
            <Link href={`/${lang}/blog/${post.slug}`} legacyBehavior>
              <a className="hover:text-cyan-300 transition duration-300">{post.frontmatter.title}</a>
            </Link>
          </h3>
          {/* Description ajoutée pour une meilleure prévisualisation */}
          <p className="text-gray-400 text-sm line-clamp-3 mb-4">{post.frontmatter.description}</p>
        </div>

        {/* Section pour la date et le bouton "Lire la suite" */}
        <div className="flex items-center justify-between mt-auto"> {/* mt-auto pour pousser vers le bas */}
          <div className="flex items-center text-xs text-gray-500">
            {/* Icône de calendrier (SVG) */}
            <svg className="w-3 h-3 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-400">{formattedDate}</span> {/* Affichage de la date */}
          </div>
          {/* Lien "Lire la suite" */}
          <Link href={`/${lang}/blog/${post.slug}`} legacyBehavior>
            <a className="text-cyan-400 hover:underline text-xs">
              Lire la suite →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}