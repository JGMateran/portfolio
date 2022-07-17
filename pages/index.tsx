import { GetStaticProps } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import { NextSeo } from 'next-seo'

import { HOME_URL } from '@/lib/constants'

import { Skills } from '@/components/Skills'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { HomeLayout } from '@/layouts/HomeLayout'
import { Projects } from '@/components/Projects'
import { Articles } from '@/components/Articles'

function sortByPostDate (a: Post, b: Post) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
}

type HomeProps = {
  posts: Post[]
}

export default function Home ({ posts }: HomeProps) {
  return (
    <HomeLayout>
      <NextSeo
        title="José Gregorio Materán | Frontend web developer"
        description="I am a front-end web developer specialized in the React and TypeScript ecosystem with more than 5 years of experience building digital products."
        twitter = {{
          handle: '@reburn_dev',
          cardType: 'summary_large_image'
        }}
        openGraph={{
          images: [
            {
              url: `${HOME_URL}/images/website.png`,
              width: 1200,
              height: 630
            }
          ]
        }}
      />

      <Container className="text-center" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-4">
          Experience
        </Heading>
        <Text className="mb-4">
          Although I am currently focused on the React and TypeScript ecosystem I have done a bit of everything, I have created libraries to automate tedious processes and I have also been developing complex systems that are maintained for a long time.
        </Text>
        <Text>
          I enjoy the process of transforming an idea into a product and iterating on it, and I want to believe that by doing so I am making every day a better place for everyone.
        </Text>
      </Container>

      <Skills />

      <Projects />

      <Articles data={posts} />
    </HomeLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort(sortByPostDate).slice(0, 3)

  return {
    props: {
      posts
    }
  }
}
