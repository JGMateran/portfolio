import { makeSource } from 'contentlayer/source-files'

import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { Blog } from './data/definitions/blog'

export default makeSource({
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
