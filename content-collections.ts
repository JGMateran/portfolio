import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import removeMarkdown from 'remove-markdown'
import readingTime from 'reading-time'

import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

const posts = defineCollection({
  name: 'posts',
  directory: 'data',
  include: 'blog/*.mdx',
  schema: (z) => ({
    title: z.string(),
    publishedAt: z.string(),
    description: z.string()
  }),
  transform: async (doc, context) => {
    const mdx = await compileMDX(context, doc, {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'one-dark-pro'
          }
        ]
      ]
    })
    const raw = removeMarkdown(doc.content)

    return {
      ...doc,
      mdx,
      slug: doc._meta.fileName.replace(/\.mdx$/, ''),
      raw,
      readingTimeText: readingTime(raw).text
    }
  }
})

export default defineConfig({
  collections: [posts]
})
