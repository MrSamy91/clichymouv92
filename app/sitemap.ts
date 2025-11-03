import { MetadataRoute } from 'next'
import { adherents } from '@/lib/list-of-adherants'
import { bureauMembers } from '@/lib/list-of-bureau'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NODE_ENV === 'production'
    ? 'https://clichymouv.fr'
    : 'http://localhost:3000'

  // Pages statiques principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bureau`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/adherants`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partenaires`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  ]

  // Pages individuelles des adhérents (150+)
  // Priorité élevée car chaque page est unique et importante pour le SEO local
  const adherantsPages: MetadataRoute.Sitemap = adherents.map((adherent) => ({
    url: `${baseUrl}/adherants/${adherent.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Pages individuelles des membres du bureau
  // Priorité élevée car ce sont les représentants de l'association
  const bureauPages: MetadataRoute.Sitemap = bureauMembers.map((member) => ({
    url: `${baseUrl}/bureau/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Combiner toutes les pages
  return [...staticPages, ...adherantsPages, ...bureauPages]
}

// Configuration pour la régénération statique incrémentale
export const revalidate = 3600 // Revalide toutes les heures