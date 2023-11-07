import type { GetStaticProps } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import { Layout } from '@/layouts/Layout'
import { ArticlesList } from '@/components/ArticlesList'
import { NextSeo } from 'next-seo'

export default function BlogPage ({
  posts
}: {
  posts: Post[]
}) {
  return (
    <Layout>
      <NextSeo
        title="The Reburn's Blog"
      />
      {
        posts.length === 0
          ? <h2 className="text-2xl font-bold">No articles yet</h2>
          : <ArticlesList data={posts} />
      }
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return {
    props: {
      posts
    }
  }
}
