import { type Post } from 'contentlayer/generated'

import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import { Heading } from './Heading'
import { Text } from './Text'

function transformDate (date: string) {
  return format(
    parseISO(date),
    'MMM dd, yyyy'
  )
}

interface ArticleItemProps {
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
      <article className="active:scale-95 dark:hover:bg-gray-800 hover:bg-slate-200 px-6 py-8 -mx-6">
        <div className="md:flex">
          <div className="mb-4 pr-8 w-48">
            <Text className="text-xs md:text-right leading-7">
              {transformDate(publishedAt)} {' — '} {readingTime.text}
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
