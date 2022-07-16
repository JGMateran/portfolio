import type { GetStaticProps } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import { Layout } from '@/layouts/Layout'
import { ArticlesList } from '@/components/ArticlesList'

function sortByPostDate (a: Post, b: Post) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
}

export const getStaticProps: GetStaticProps = (context) => {
  const posts = allPosts.sort(sortByPostDate)

  return {
    props: {
      posts
    }
  }
}

export default function BlogPage ({
  posts
}: {
  posts: Post[]
}) {
  return (
    <Layout>
      {
        posts.length === 0
          ? <h2 className="text-2xl font-bold">No articles yet</h2>
          : <ArticlesList data={posts} />
      }
    </Layout>
  )
}
