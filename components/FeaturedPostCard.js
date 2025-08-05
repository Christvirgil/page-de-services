// components/FeaturedPostCard.js
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

export default function FeaturedPostCard({ post, lang }) {
  if (!post || !post.frontmatter) return null; // S'assure que 'post' et 'frontmatter' existent

  const postDate = new Date(post.frontmatter.date);
  const formattedDate = format(postDate, 'PP', { locale: getLocale(lang) });

  return (
    <div className="bg-gray-800/50 shadow-lg rounded-xl overflow-hidden mb-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
      {/* Nouvelle section pour l'image - Conditionnel si l'image existe */}
      {post.frontmatter.image && (
        <div className="relative w-full h-80 lg:h-96 flex-shrink-0">
          <Image
            src={post.frontmatter.image} // Utilise le chemin de l'image du frontmatter
            alt={post.frontmatter.title} // Utilise le titre comme texte alternatif
            layout="fill" // L'image remplit son conteneur parent
            objectFit="cover" // Assure que l'image couvre la zone sans distorsion
            className="rounded-t-xl" // Arrondit les coins supérieurs de l'image
          />
        </div>
      )}

      <div className="p-6 flex flex-col justify-between flex-grow"> {/* Flex-grow pour prendre l'espace restant */}
        <div>
          <p className="text-cyan-400 text-sm font-semibold">{post.frontmatter.category}</p>
          <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-100">
            {/* Lien enveloppant le titre pour naviguer vers l'article */}
            <Link href={`/${lang}/blog/${post.slug}`} legacyBehavior>
              <a className="hover:text-cyan-300 transition duration-300">{post.frontmatter.title}</a>
            </Link>
          </h2>
          <p className="text-gray-400 mb-4">{post.frontmatter.description}</p>
        </div>

        {/* Section pour la date et le bouton "Lire la suite" */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-gray-500">
            {/* Icône de calendrier (SVG) */}
            <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-400">{formattedDate}</span> {/* Affichage de la date */}
          </div>
          {/* Lien "Lire la suite" */}
          <Link href={`/${lang}/blog/${post.slug}`} legacyBehavior>
            <a className="text-cyan-400 hover:underline text-sm">
              Lire la suite →
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}