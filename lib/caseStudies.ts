import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Définition de l'interface pour une étude de cas
export interface CaseStudy {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    client: string;
    problem: string;
    solution: string;
    result: string;
    [key: string]: any; // Permet d'autres propriétés si nécessaire
  };
}

// Cette fonction lit tous les fichiers .mdx dans le dossier content/etudes-de-cas
export function getCaseStudies(): CaseStudy[] {
  const caseStudiesDir = path.join(process.cwd(), 'content/etudes-de-cas');
  const filenames = fs.readdirSync(caseStudiesDir);

  const studies = filenames.map(filename => {
    const slug = filename.replace('.mdx', '');
    const fullPath = path.join(caseStudiesDir, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter: frontmatter as CaseStudy['frontmatter'], // Assurer le type
    };
  });

  // Trie les études de cas par date, la plus récente en premier
  return studies.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date).getTime();
    const dateB = new Date(b.frontmatter.date).getTime();
    return dateB - dateA;
  });
}
