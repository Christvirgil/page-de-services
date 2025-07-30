import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="bg-gray-800/50 shadow-md rounded-xl overflow-hidden h-full border border-gray-700 hover:border-cyan-500 transition-all duration-300 transform hover:-translate-y-1">
      {/* Vous pouvez ajouter une image ici plus tard */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <p className="text-cyan-400 text-sm font-semibold">{post.frontmatter.category}</p>
          <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-100">
            <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </h3>
        </div>
        <Link href={`/blog/${post.slug}`} className="text-cyan-400 hover:underline text-sm mt-4 self-start">
          Lire la suite
        </Link>
      </div>
    </div>
  );
}
