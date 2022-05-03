import type { GetStaticProps } from 'next'
import type { Post } from 'contentlayer/generated'

import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { Container } from '@/components/Container'

const components = {}

export default function PostPage ({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="min-h-screen bg-white">
      <Container className="py-10" size="small">
        <div className="prose w-full mx-auto max-w-full">
          <h2>{post.title}</h2>
          <MDXContent components={components} />
        </div>
      </Container>
    </div>
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
