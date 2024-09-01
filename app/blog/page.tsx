import { allPosts } from 'content-collections'
import Link from 'next/link'

import { ArticlesList } from '@/components/ArticlesList'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import type { Metadata } from 'next'
import { ArrowLeft } from 'react-feather'

function Header({
	title,
	description,
}: {
	title: string
	description: string
}) {
	return (
		<div className="selection:bg-blue-600 selection:text-white dark:bg-gray-800 bg-slate-200 dark:text-white leading-7 py-14">
			<div className="h-14 bg-slate-200 dark:bg-gray-800 sticky top-0 z-10" />

			<Container>
				<Heading size="big" className="mb-4 leading-10">
					{title}
				</Heading>

				<Text>{description}</Text>

				<div className="flex items-center mt-10">
					<Link href="/" className="flex items-center">
						<ArrowLeft className="mr-4" />
						<span className="text-sm">Back to home</span>
					</Link>
				</div>
			</Container>
		</div>
	)
}

export const metadata: Metadata = {
	title: "The Reburn's Blog",
}

export default function BlogRoute() {
	const posts = allPosts.sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	)

	return (
		<>
			<Header
				title="Latest articles"
				description="Here you will find a collection of all the articles I have written over time, I hope you enjoy it."
			/>

			<div className="h-14 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-10" />

			<Container>
				<ArticlesList data={posts} />
			</Container>
		</>
	)
}
