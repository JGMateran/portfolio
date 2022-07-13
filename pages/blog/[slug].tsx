import type { GetStaticProps } from 'next'
import type { Post } from 'contentlayer/generated'

import { NextSeo } from 'next-seo'

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { BlogLayout } from '@/layouts/BlogLayout'

import { HOME_URL } from '@/lib/constants'

const components = {}

export default function PostPage ({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      url={`${HOME_URL}/blog/${post.slug}`}
    >
      <NextSeo
        title={post.title}
        description={post.description}
      />
      <div className="prose dark:prose-dark w-full mx-auto max-w-full">
        <MDXContent components={components} />
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
