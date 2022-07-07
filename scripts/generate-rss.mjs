import { writeFileSync } from 'fs'
import RSS from 'rss'
import { allPosts } from '../.contentlayer/generated/index.mjs'

async function generate () {
  const feed = new RSS({
    title: '@reburn_dev | Fronted developer',
    site_url: 'https://reburn.dev',
    feed_url: 'https://reburn.dev/feed.xml'
  })

  allPosts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `https://reburn.dev/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
