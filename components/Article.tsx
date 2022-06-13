import Link from 'next/link'

import { ExternalLink } from 'react-feather'

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
        <a className="hover:scale-105 duration-150 block focus:outline-none focus-visible:ring-2 p-10 -mx-6 border bg-slate-200 dark:bg-gray-800 rounded-lg border-slate-400 border-dotted dark:border-gray-600">
          <div className="flex md:justify-start items-center justify-between mb-6 text-sm text-slate-400">
            <div className="md:w-36">
              <Text>
                {formatDate(date)}
              </Text>
            </div>
            <div className="flex items-center space-x-4 md:flex-1">
              <Text className="flex-1">
                {read}
              </Text>
              <button tabIndex={-1} className="text-black dark:text-white">
                <ExternalLink className="w-5 h-5" />
              </button>
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
              <Button tabIndex={-1}>
                Read more
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
