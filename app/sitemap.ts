// Fichier: app/sitemap.ts (Version Complète et Internationalisée - Corrigée des Erreurs de Type)

import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/posts'; // Assure-toi que ce chemin est correct
import { getCaseStudies } from '@/lib/caseStudies'; // Assure-toi que ce chemin est correct

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://page-de-services.vercel.app'; // REMPLACE PAR TON DOMAINE RÉEL (ex: 'https://allogic.dev')

  // *** CORRECTION 1 & 2 : Type strict pour le tableau de langues ***
  const languages: ('fr' | 'en')[] = ['fr', 'en'];

  // *** CORRECTION 3 : Fonction d'aide pour créer des entrées statiques avec les bons types de changeFrequency ***
  const createStaticEntry = (
    url: string, 
    lastModified: Date, 
    changeFrequency: 'monthly' | 'daily' | 'weekly' | 'always' | 'hourly' | 'yearly' | 'never', // Type strict ici
    priority: number
  ) => ({
      url,
      lastModified,
      changeFrequency,
      priority,
  });

  let dynamicContentEntries: MetadataRoute.Sitemap = [];

  // Génère les URLs pour les articles de blog et études de cas pour CHAQUE langue
  languages.forEach(lang => {
    // Articles de blog
    const posts = getPosts(lang).map(post => ({ // 'lang' est maintenant du bon type grâce à 'languages'
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: post.frontmatter.date,
    }));
    dynamicContentEntries = dynamicContentEntries.concat(posts);

    // Études de cas
    const caseStudies = getCaseStudies(lang).map(study => ({ // 'lang' est maintenant du bon type
      url: `${baseUrl}/${lang}/etudes-de-cas/${study.slug}`,
      lastModified: study.frontmatter.date,
    }));
    dynamicContentEntries = dynamicContentEntries.concat(caseStudies);
  });

  // Génère les URLs pour les pages statiques pour CHAQUE langue en utilisant la fonction d'aide
  const staticPagesEntries: MetadataRoute.Sitemap = [
    // Homepage
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}`, new Date(), "daily", 1)),
    // Services Index Page (si tu as une page index /services)
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/services`, new Date(), "monthly", 0.8)),
    // About Page
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/a-propos`, new Date(), "monthly", 0.8)),
    // Contact Page
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/contact`, new Date(), "monthly", 0.8)),
    // FAQ Page
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/faq`, new Date(), "monthly", 0.8)),
    // Blog Index Page
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/blog`, new Date(), "weekly", 0.9)),
    // Case Studies Index Page
    ...languages.map(lang => createStaticEntry(`${baseUrl}/${lang}/etudes-de-cas`, new Date(), "weekly", 0.9)),
    // Individual Service Pages (utilisant flatMap pour plus de concision)
    ...languages.flatMap(lang => [
      createStaticEntry(`${baseUrl}/${lang}/services/audit`, new Date(), "monthly", 0.7),
      createStaticEntry(`${baseUrl}/${lang}/services/coaching`, new Date(), "monthly", 0.7),
      createStaticEntry(`${baseUrl}/${lang}/services/integration-ia`, new Date(), "monthly", 0.7),
      createStaticEntry(`${baseUrl}/${lang}/services/creation-maintenance-sites`, new Date(), "monthly", 0.7),
    ]),
  ];

  // Retourne toutes les entrées combinées
  return [...staticPagesEntries, ...dynamicContentEntries];
}