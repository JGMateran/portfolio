import Image from 'next/image'
import Link from 'next/link'

import { format, parseISO } from 'date-fns'

import { Box } from '@/components/Box'

function formatDate (date: string) {
  return format(
    parseISO(date),
    'MMM dd, yyyy'
  )
}

type ArticleProps = {
  slug: string,
  title: string,
  description: string,
  publishedAt: string,
  image: string,
  readingTime: {
    text: string
  }
}

export function ArticleItem (props: ArticleProps) {
  return (
    <Link href={`/blog/${props.slug}`} className="dark:bg-gray-800 bg-slate-100 border border-dotted dark:border-gray-600 border-slate-400 rounded-md overflow-hidden focus-visible:scale-105 hover:scale-105 duration-100">
      <article>
        <div className="relative w-full overflow-hidden pt-[100%]">
          <Image
            src={props.image}
            width="573"
            height="573"
            alt={props.title}
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold line-clamp-2 text-xl">
            {props.title}
          </h3>
          <div className="text-xs my-3 dark:text-gray-100 text-slate-500">
            <span>{formatDate(props.publishedAt)}</span>
            {' — '}
            <span>{props.readingTime.text}</span>
          </div>
          <p className="line-clamp-3 text-sm leading-6 dark:text-gray-100 text-slate-700">
            {props.description}
          </p>
        </div>
      </article>
    </Link>
  )
}
