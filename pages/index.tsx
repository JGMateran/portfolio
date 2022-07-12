import { GetStaticProps } from 'next'

import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import Link from 'next/link'

import { Skills } from '@/components/Skills'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { HomeLayout } from '@/layouts/HomeLayout'
import { Articles } from '@/components/Articles'
import { Projects } from '@/components/Projects'

import { NextSeo } from 'next-seo'

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
        title="José Gregorio Materán"
        description="I am a front-end web developer specialized in the React and TypeScript ecosystem with more than 5 years of experience building digital products."
      />

      <Container className="text-center" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-4">
          About me
        </Heading>
        <Text className="mb-4">
          Although I am currently focused on the React and TypeScript ecosystem I have done a bit of everything, I have created libraries to automate tedious processes and I have also been developing complex systems that are maintained for a long time.
        </Text>
        <Text>
          I enjoy the process of transforming an idea into a product and iterating on it, and I want to believe that by doing so I am making every day a better place for everyone.
        </Text>
      </Container>

      <Divider />
      <Skills />

      <Projects />

      {
        posts.length > 0 && (
          <>
            <Divider />
            <Articles data={posts} />
            <div className="my-14 text-center">
              <Link href="/blog">
                <a href="#">
                  Ver todos los articulos
                </a>
              </Link>
            </div>
          </>
        )
      }

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
