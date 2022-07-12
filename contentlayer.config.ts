import type { ComputedFields } from 'contentlayer/source-files'

import {
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files'

import readingTime from 'reading-time'

import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw)
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
}

const Blog = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    }
  },
  computedFields
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [
      remarkGfm
    ],
    rehypePlugins: [
      [rehypePrism, {
        showLineNumbers: true
      }],
      rehypeSlug
    ]
  }
})

export default contentLayerConfig
