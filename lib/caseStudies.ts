// Fichier: lib/caseStudies.ts (Version Finale Complète et Bilingue)

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface CaseStudy {
  slug: string;
  frontmatter: { [key: string]: any };
  content: string; // On ajoute le contenu ici
}

const contentDir = path.join(process.cwd(), 'content/etudes-de-cas');

// Fonction qui récupère TOUS les slugs pour TOUTES les langues
export function getAllCaseStudySlugs() {
  const languages = ['fr', 'en'];
  const allSlugs: { lang: string; slug: string }[] = [];

  languages.forEach(lang => {
    const langDir = path.join(contentDir, lang);
    if (fs.existsSync(langDir)) {
      const filenames = fs.readdirSync(langDir);
      filenames.forEach(filename => {
        if (filename.endsWith('.mdx')) {
          allSlugs.push({
            lang: lang,
            slug: filename.replace('.mdx', ''),
          });
        }
      });
    }
  });
  return allSlugs;
}

// Fonction qui récupère UNE étude de cas par slug et langue
export function getCaseStudyBySlug(slug: string, lang: 'fr' | 'en'): CaseStudy {
  const fullPath = path.join(contentDir, lang, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    frontmatter,
    content,
  };
}

// Ancienne fonction mise à jour pour la page de liste
export function getCaseStudies(lang: 'fr' | 'en') {
  const langDir = path.join(contentDir, lang);
  if (!fs.existsSync(langDir)) return [];

  const filenames = fs.readdirSync(langDir);
  const studies = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const slug = filename.replace('.mdx', '');
      const fullPath = path.join(langDir, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter } = matter(fileContents);
      return { slug, frontmatter };
    });

  return studies.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}