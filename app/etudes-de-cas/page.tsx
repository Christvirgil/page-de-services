// Fichier : app/etudes-de-cas/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '@/components/Header';

export function getCaseStudies() {
  const caseStudiesDir = path.join(process.cwd(), 'content/etudes-de-cas');
  const filenames = fs.readdirSync(caseStudiesDir);

  const studies = filenames.map(filename => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(caseStudiesDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter,
    };
  });

  return studies.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}

export default function CaseStudiesIndex() {
  const studies = getCaseStudies();

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Études de Cas
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Découvrez comment j'ai résolu des problèmes concrets pour mes clients.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {studies.map(study => (
            <Link key={study.slug} href={`/etudes-de-cas/${study.slug}`} className="block group">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-cyan-500 transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {study.frontmatter.title}
                </h2>
                <p className="text-gray-400 mt-2">{study.frontmatter.problem}</p>
                <p className="text-cyan-400 font-semibold mt-4">Voir le cas d'étude →</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
