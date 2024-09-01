import type { Post } from 'content-collections'

import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import { Heading } from './Heading'
import { Text } from './Text'

function transformDate(date: string) {
	return format(parseISO(date), 'MMM dd, yyyy')
}

export function ArticleItem({
	data,
}: {
	data: Post
}) {
	return (
		<Link href={`/blog/${data.slug}`}>
			<article className="active:scale-95 dark:hover:bg-gray-800 hover:bg-slate-200 px-6 py-8 -mx-6">
				<div className="md:flex">
					<div className="mb-4 pr-8 w-48">
						<Text className="text-xs md:text-right leading-7">
							{transformDate(data.publishedAt)} {' — '} {data.readingTimeText}
						</Text>
					</div>
					<div className="flex-1">
						<Heading as="h3" className="mb-2" size="small">
							{data.title}
						</Heading>
						<Text>{data.description}</Text>
					</div>
				</div>
			</article>
		</Link>
	)
}
