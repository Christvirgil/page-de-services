import { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'; // Import depuis lib/posts
import { getCaseStudies } from './etudes-de-cas/page'; // Assurez-vous que getCaseStudies est exporté

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://allogic.dev' // Remplacez par votre domaine réel

  const posts = getPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date,
  }))

  const caseStudies = getCaseStudies().map(study => ({
    url: `${baseUrl}/etudes-de-cas/${study.slug}`,
    lastModified: study.frontmatter.date,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/etudes-de-cas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/audit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/coaching`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/integration-ia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/creation-maintenance-sites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...posts,
    ...caseStudies,
  ]
}