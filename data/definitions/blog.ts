import { defineDocumentType } from 'contentlayer/source-files'
import type { ComputedFields } from 'contentlayer/source-files'

import readingTime from 'reading-time'

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

export const Blog = defineDocumentType(() => ({
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
    },
    image: {
      type: 'string',
      required: true
    }
  },
  computedFields
}))
