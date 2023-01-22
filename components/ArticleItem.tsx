import type { Post } from 'contentlayer/generated'

import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import { Heading } from './Heading'
import { Text } from './Text'

function formatDate (date: string) {
  return format(
    parseISO(date),
    'MMM dd, yyyy'
  )
}

type ArticleItemProps = {
  data: Post
}

export function ArticleItem ({
  data: {
    description,
    publishedAt,
    readingTime,
    title,
    slug
  }
}: ArticleItemProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article>
        <div className="mb-14 md:flex">
          <div className="mb-4 pr-8 w-48">
            <Text className="text-xs md:text-right leading-7">
              {formatDate(publishedAt)} {' — '} {readingTime.text}
            </Text>
          </div>
          <div className="flex-1">
            <Heading as="h3" className="mb-2" size="small">
              {title}
            </Heading>
            <Text>{description}</Text>
          </div>
        </div>
      </article>
    </Link>
  )
}
