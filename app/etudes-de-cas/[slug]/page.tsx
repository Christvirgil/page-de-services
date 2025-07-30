// Fichier: app/etudes-de-cas/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Header from '@/components/Header';

const caseStudiesDir = path.join(process.cwd(), 'content/etudes-de-cas');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(caseStudiesDir);
  return filenames.map(filename => ({ slug: filename.replace('.mdx', '') }));
}

async function getCaseStudy(slug: string) {
  const fullPath = path.join(caseStudiesDir, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);
  return { frontmatter, content };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getCaseStudy(params.slug);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="max-w-4xl mx-auto py-16 sm:py-24 px-4">
        <article>
          <header className="text-center mb-16">
            <p className="text-base font-semibold text-cyan-400">{frontmatter.client}</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-100 leading-tight">
              {frontmatter.title}
            </h1>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12 bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <div>
              <h3 className="font-bold text-lg text-gray-400">Problème</h3>
              <p className="mt-1 text-gray-300">{frontmatter.problem}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-400">Solution</h3>
              <p className="mt-1 text-gray-300">{frontmatter.solution}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-400">Résultat</h3>
              <p className="mt-1 text-cyan-400 font-semibold">{frontmatter.result}</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none mx-auto prose-h2:text-cyan-400 prose-a:text-cyan-400 hover:prose-a:text-cyan-500">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    </div>
  );
}
