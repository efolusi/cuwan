import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/copy'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/en', '/id', '/en/privacy', '/id/privacy', '/en/terms', '/id/terms']
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))
}
