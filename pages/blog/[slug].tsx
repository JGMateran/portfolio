import type { GetStaticProps } from 'next'
import type { Post } from 'contentlayer/generated'

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { BlogLayout } from '@/layouts/BlogLayout'

const components = {}

export default function PostPage ({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <BlogLayout>
      <div className="min-h-screen">
        <div className="prose dark:prose-dark w-full mx-auto max-w-full">
          <h2>{post.title}</h2>
          <MDXContent components={components} />
        </div>
      </div>
    </BlogLayout>
  )
}

export const getStaticPaths = () => {
  const paths = allPosts.map((blog) => ({
    params: {
      slug: blog.slug
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const post = allPosts.find((post) => post.slug === context.params?.slug)

  return {
    props: {
      post
    }
  }
}
