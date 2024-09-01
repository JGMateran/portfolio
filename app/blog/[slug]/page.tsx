import env from '@/lib/env.client'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { allPosts } from 'content-collections'
import { ArrowLeft, Facebook, Linkedin, Twitter } from 'react-feather'

import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Mdx } from '@/components/mdx'

interface Context {
	params: {
		slug: string
	}
}

export async function generateMetadata({
	params,
}: Context): Promise<Metadata | undefined> {
	const post = allPosts.find((post) => post.slug === params.slug)

	if (post == null) {
		return
	}

	const { title, description } = post

	const ogImage = new URL(`${env.NEXT_PUBLIC_HOME_URL}/api/og`)
	ogImage.searchParams.set('title', title)

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			title,
			description,
			images: [ogImage],
		},
	}
}

function shareOnFacebookUrl(url: string) {
	const shareUrl = new URL('https://www.facebook.com/sharer.php')

	shareUrl.searchParams.set('u', url)

	return shareUrl.toString()
}

function shareOnTwitterUrl(url: string, title: string) {
	const shareUrl = new URL('https://twitter.com/intent/tweet')

	shareUrl.searchParams.set('url', url)
	shareUrl.searchParams.set('title', title)

	return shareUrl.toString()
}

function shareOnLinkedinUrl(url: string) {
	const shareUrl = new URL('https://www.linkedin.com/shareArticle')

	shareUrl.searchParams.set('url', url)

	return shareUrl.toString()
}

function HeaderWithShareButtons({
	title,
	url,
	description,
}: {
	title: string
	url: string
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
					<Link href="/blog" className="flex items-center">
						<ArrowLeft className="mr-4" />
						<span className="text-sm">Back to posts</span>
					</Link>

					<div className="flex-1" />

					<div className="flex items-center">
						<span className="mr-4 text-sm">Share on</span>
						<div className="flex space-x-3 items-center">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={shareOnFacebookUrl(url)}
							>
								<Facebook className="w-5 h-5" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={shareOnTwitterUrl(url, title)}
							>
								<Twitter className="w-5 h-5" />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={shareOnLinkedinUrl(url)}
							>
								<Linkedin className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default function SinglePostRoute({ params }: Context) {
	const url = `${env.NEXT_PUBLIC_HOME_URL}/blog/${params.slug}`
	const post = allPosts.find((post) => post.slug === params.slug)

	if (post == null) {
		notFound()
	}

	return (
		<>
			<HeaderWithShareButtons
				title={post.title}
				description={post.description}
				url={url}
			/>

			<div className="h-14 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-10" />

			<Container>
				<div className="prose dark:prose-dark w-full mx-auto max-w-full">
					<Mdx code={post.mdx} />
				</div>
			</Container>
		</>
	)
}
