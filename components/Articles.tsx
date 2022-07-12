import { Container } from '@/components/Container'
import { Box } from '@/components/Box'

import { format, parseISO } from 'date-fns'

import Link from 'next/link'

function formatDate (date: string) {
  return format(
    parseISO(date),
    'MMM dd, yyyy'
  )
}

type iArticle = {
  slug: string,
  title: string,
  description: string,
  publishedAt: string,
  readingTime: {
    text: string
  }
}

function Article (props: iArticle) {
  return (
    <Box className="hover:scale-105 duration-150">
      <Link href={`/blog/${props.slug}`}>
        <a>
          <div className="bg-gray-700 after:pt-[56.25%] after:block"></div>
          <div className="p-6">
            <h2 className="font-bold line-clamp-2 text-xl">
              {props.title}
            </h2>
            <div className="text-xs my-3 dark:text-gray-100 text-slate-500">
              <span>{formatDate(props.publishedAt)}</span>
              {' — '}
              <span>{props.readingTime.text}</span>
            </div>
            <p className="line-clamp-3 text-sm leading-6 dark:text-gray-100 text-slate-700">
              {props.description}
            </p>
          </div>
        </a>
      </Link>
    </Box>
  )
}

export function Articles ({
  data
}: {
  data: iArticle[]
}) {
  if (data.length === 0) return null

  return (
    <Container size="small" gap={false}>
      <h2 className="text-3xl font-bold mb-2 text-center">
        Latest articles
      </h2>
      <h4 className="mb-14 text-xl text-gray-100 text-center">
        Prepared especially for you
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
        {
          data.map((article) => (
            <Article key={article.slug} {...article} />
          ))
        }
      </div>
    </Container>
  )
}
