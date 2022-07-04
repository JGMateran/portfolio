import type { Post } from 'contentlayer/generated'

import Link from 'next/link'

import { Article } from '@/components/Article'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'

type LatestArticlesProps = {
  articles: Post[]
}

export function LatestArticles ({
  articles
}: LatestArticlesProps) {
  return (
    <>
      <Container className="text-center mb-8" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-2">
          Latest articles (in spanish)
        </Heading>
        <Heading as="h4" size="small" className="text-slate-500 dark:text-gray-400">
          Prepared especially for you.
        </Heading>
      </Container>

      <div className="LastestArticles">
        {
          articles.map((article) => (
            <Article
              key={article.slug}
              slug={article.slug}
              title={article.title}
              description="Elit maiores minus corporis sed magnam. Laboriosam ipsa mollitia inventore in placeat Dignissimos accusantium vitae harum officia velit ipsa Porro suscipit laudantium repellat distinctio culpa! Fugit facilis omnis nihil asperiores"
              read={article.readingTime.text}
              date={article.publishedAt}
            />
          ))
        }
        <div className="flex items-center justify-center my-10">
          <Link href="/blog">
            <a className="font-semibold">
              Ver todos los articulos
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
