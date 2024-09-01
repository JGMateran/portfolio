import { allPosts } from 'content-collections'
import { type MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const routes = ['/', '/blog'].map((route) => {
    return {
      url: `https://reburn.dev${route}`,
      lastModified: new Date().toISOString().split('T')[0]
    }
  })

  const posts = allPosts.map((post) => {
    return {
      url: `https://reburn.dev/blog/${post.slug}`,
      lastModified: post.publishedAt
    }
  })

  return [
    ...routes,
    ...posts
  ]
}
