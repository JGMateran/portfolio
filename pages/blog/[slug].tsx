import type { GetStaticProps } from 'next'
import type { Post } from 'contentlayer/generated'

import { NextSeo } from 'next-seo'

import { HOME_URL } from '@/lib/constants'

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { BlogLayout } from '@/layouts/BlogLayout'

import { MDXComponents } from '@/lib/MDXComponents'

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

        twitter={{
          handle: '@reburn_dev',
          cardType: 'summary_large_image'
        }}

        openGraph={{
          type: 'article',
          images: [
            {
              url: `${HOME_URL}/api/og?title=${post.title}`,
              width: 1200,
              height: 630
            }
          ]
        }}
      />
      <div className="prose dark:prose-dark w-full mx-auto max-w-full">
        <MDXContent components={MDXComponents} />
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
