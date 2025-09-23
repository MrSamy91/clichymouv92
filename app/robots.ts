import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://clichymouv.fr' 
    : 'http://localhost:3000'

  // En production, autoriser l'indexation complète
  // En développement/staging, bloquer l'indexation
  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/bureau',
          '/adherants',
          '/partners',
          '/projets',
          '/contact',
        ],
        disallow: [
          '/admin/',
          '/api/',
          '/private/',
          '/draft/',
          '/*?*', // Bloquer les URLs avec paramètres pour éviter les doublons
          '/search*', // Bloquer les pages de résultats de recherche
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}