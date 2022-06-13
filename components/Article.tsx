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
    <article className="px-6 mb-8">
      <Link href={`/blog/${slug}`}>
        <a className="block focus:outline-none focus-visible:ring-2 p-10 -mx-6 border bg-slate-200 dark:bg-gray-800 rounded-lg border-slate-400 border-dotted dark:border-gray-600">
          <div className="flex md:justify-start items-center justify-between mb-6 text-sm text-slate-400">
            <div className="md:w-36">
              <Text>
                {formatDate(date)}
              </Text>
            </div>
            <div>
              <Text>
                {read}
              </Text>
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
              <Button tabIndex="-1">
                Read more
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
