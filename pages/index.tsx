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
import { ContactForm } from '@/components/ContactForm'
import { HomeLayout } from '@/layouts/HomeLayout'
import { LatestArticles } from '@/components/LatestArticles'

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

      <Container className="text-center mb-8 my-14" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-2">
          Technologies
        </Heading>
        <Heading as="h4" size="small" className="text-slate-400">
          that I know
        </Heading>
      </Container>

      <Skills />

      <Divider />

      <Container className="text-center mb-8" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-2">
          Latest articles (in spanish)
        </Heading>
        <Heading as="h4" size="small" className="text-slate-400">
          Prepared especially for you.
        </Heading>
      </Container>

      <LatestArticles articles={posts} />

      <ContactForm />
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