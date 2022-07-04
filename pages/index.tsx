import {
  useEffect
} from 'react'

import { GetStaticProps } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import { Skills } from '@/components/Skills'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { HomeLayout } from '@/layouts/HomeLayout'
import { LatestArticles } from '@/components/LatestArticles'
import { Projects } from '@/components/Projects'

import { NextSeo } from 'next-seo'

function sortByPostDate (a: Post, b: Post) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
}

type HomeProps = {
  posts: Post[]
}

export default function Home ({ posts }: HomeProps) {
  useEffect(
    () => {
      console.log(posts)
    },
    [posts]
  )

  return (
    <HomeLayout>
      <NextSeo
        title="Next SEO"
        description="The Next-gen Open Graph and Twitter Card SEO package"
      />

      <Container className="text-center" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-4">
          Experience
        </Heading>
        <Text>
          Dolor minus molestias quam mollitia iusto totam. Eum doloribus velit deleniti quas explicabo. Minima ea delectus praesentium maiores itaque. Distinctio non expedita ab beatae ipsam consequatur Alias eligendi nulla optio?
        </Text>
      </Container>

      <Divider />

      <Skills />
      <Projects />

      <LatestArticles articles={posts} />
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps = (context) => {
  const posts = allPosts.sort(sortByPostDate).slice(0, 3)

  return {
    props: {
      posts
    }
  }
}
