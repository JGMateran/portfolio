import { allPosts } from 'content-collections'
import Link from 'next/link'

import type { Metadata } from 'next'

import { ArticleItem } from '@/components/ArticleItem'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { ArrowLeft } from 'react-feather'

export const metadata: Metadata = {
	title: "The Reburn's Blog",
}

export default function BlogRoute() {
	const posts = allPosts.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	)

	return (
		<main>
			<div className="selection:bg-blue-600 selection:text-white dark:bg-gray-800 bg-slate-200 dark:text-white leading-7 pt-32 pb-16">
				<Container>
					<Heading size="big" className="mb-4 leading-10">
						Latest articles
					</Heading>

					<Text>
						Here you will find a collection of all the articles I have written
						over time, I hope you enjoy it.
					</Text>

					<div className="flex items-center mt-10">
						<Link href="/" className="flex items-center">
							<ArrowLeft className="mr-4" />
							<span className="text-sm">Back to home</span>
						</Link>
					</div>
				</Container>
			</div>

			<Container size="medium" className="mt-16">
				{posts.map((article) => (
					<ArticleItem key={article._meta.path} data={article} />
				))}
			</Container>
		</main>
	)
}
