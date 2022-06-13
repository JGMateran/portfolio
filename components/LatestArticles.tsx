import type { Post } from 'contentlayer/generated'

import Link from 'next/link'

import { Article } from '@/components/Article'
import { Divider } from '@/components/Divider'

type LatestArticlesProps = {
  articles: Post[]
}

export function LatestArticles ({
  articles
}: LatestArticlesProps) {
  return (
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
      <Divider />
    </div>
  )
}
