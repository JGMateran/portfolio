import Link from 'next/link'

import { format, parseISO } from 'date-fns'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

type ArticleProps = {
  title: string,
  description: string,
  date: string,
  read: string,
  slug: string
}

function formatDate (date: string) {
  return format(
    parseISO(date),
    'MMM dd, yyyy'
  )
}

export function Article ({
  title,
  description,
  date,
  read,
  slug
}: ArticleProps) {
  return (
    <article>
      <Link href={`/blog/${slug}`}>
        <a className="block focus:outline-none focus-visible:ring-2 py-10 px-6 -mx-6 border-b border-dotted border-slate-700">
          <div className="flex md:justify-start items-center justify-between mb-6 text-sm text-slate-400">
            <div className="md:w-36">
              {formatDate(date)}
            </div>
            <div>
              {read}
            </div>
          </div>
          <div className="md:pl-36">
            <Heading className="mb-2">
              {title}
            </Heading>
            <Text>
              {description}
            </Text>
            <div className="mt-8">
              <Button>
                Read more
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
