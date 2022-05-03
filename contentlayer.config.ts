import type { ComputedFields } from 'contentlayer/source-files'

import {
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files'

import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
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
      rehypePrism,
      rehypeSlug
    ]
  }
})

export default contentLayerConfig
