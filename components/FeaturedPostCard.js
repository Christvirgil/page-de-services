import Link from 'next/link';

export default function FeaturedPostCard({ post }) {
  return (
    <div className="bg-gray-800/50 shadow-lg rounded-xl overflow-hidden mb-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
      {/* Vous pouvez ajouter une image ici plus tard */}
      <div className="p-6">
        <p className="text-cyan-400 text-sm font-semibold">{post.frontmatter.category}</p>
        <h2 className="text-3xl font-bold mt-2 mb-4 text-gray-100">
          <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
        </h2>
        <p className="text-gray-400 mb-4">{post.frontmatter.description}</p>
        <Link href={`/blog/${post.slug}`} className="text-cyan-400 hover:underline">
          Lire la suite
        </Link>
      </div>
    </div>
  );
}
