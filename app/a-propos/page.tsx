// Fichier: app/a-propos/page.tsx

import Header from '@/components/Header';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Mon Histoire : De l'Obstacle à l'Expertise
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez le parcours qui m'a forgé en développeur Laravel et expert en résolution de problèmes complexes.
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none mx-auto prose-h2:text-cyan-400 prose-h3:text-purple-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-500">
          <h2>Les Premiers Pas : Un Projet Ambitieux et un Obstacle Inattendu</h2>
          <p>
            Mon aventure dans le développement web a commencé avec un projet ambitieux : la création d'un site de paris sportifs. L'idée était de permettre aux utilisateurs de tester leurs pronostics avec des jetons virtuels, une sorte d'API de paris pour l'entraînement. Le concept était clair, l'enthousiasme au rendez-vous.
          </p>
          <p>
            Cependant, très vite, je me suis heurté à un mur technique qui allait marquer un tournant décisif dans mon apprentissage : l'erreur de <strong>CSRF token mismatch</strong>. Ce problème, lié à la sécurité des formulaires web, était à l'époque un véritable casse-tête pour moi. Il bloquait toute interaction, rendant le site inutilisable. C'était un os sur lequel je suis tombé, et qui m'a forcé à revoir mes connaissances fondamentales en <strong>sécurité web</strong>.
          </p>

          <h2>Laravel : La Révélation et les Défis Quotidien</h2>
          <p>
            Face à cette difficulté, j'ai décidé de plonger dans l'univers de <strong>Laravel</strong>. Ce framework PHP, réputé pour son élégance et sa robustesse, est devenu mon principal outil. J'ai appris à l'utiliser pour construire des <strong>APIs de paris</strong> solides, où les utilisateurs reçoivent automatiquement 1000 jetons à l'inscription pour tester leurs stratégies de pronostics. L'API fonctionne aujourd'hui parfaitement, ne manquant plus que sa mise en ligne.
          </p>
          <p>
            Mon parcours avec Laravel n'a pas été un long fleuve tranquille. J'ai abandonné et relancé le projet à plusieurs reprises, confronté à une multitude de défis : un simple caractère <code>#</code> dans un fichier <code>.env</code> qui bloque une donnée car il est considéré comme un commentaire, une fonction non fermée provoquant des erreurs de parsing, ou encore des problèmes de configuration serveur. Chaque problème était un nouvel apprentissage.
          </p>

          <h2>La Persévérance : Clé de la Résolution Technique</h2>
          <p>
            Ce que j'ai appris de ces expériences, c'est que la <strong>persévérance</strong> et une lecture approfondie de la documentation sont les clés de la <strong>résolution de problèmes techniques</strong>. Chaque obstacle, même le plus frustrant comme l'erreur de CSRF token, est une opportunité de comprendre en profondeur les mécanismes du développement web et de l'<strong>ingénierie logicielle</strong>.
          </p>
          <p>
            Aujourd'hui, ces défis passés sont devenus mes forces. Je suis capable d'anticiper les problèmes, de diagnostiquer rapidement les erreurs et de mettre en place des solutions robustes et durables. Mon expérience avec Laravel et les APIs, forgée dans la résolution de problèmes concrets, est ce que je mets au service de mes clients.
          </p>

          <h2>Prêt à Transformer Vos Défis en Succès ?</h2>
          <p>
            Si vous aussi, vous rencontrez des obstacles techniques, ou si vous avez un projet ambitieux qui nécessite une expertise solide en Laravel et en développement d'API, n'hésitez pas à me contacter. Mon parcours est la preuve que chaque problème a sa solution.
          </p>
          <p className="text-center mt-8">
            <Link href="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20">
              Discutons de votre projet
            </Link>
          </p>
        </article>
      </main>
    </div>
  );
}
