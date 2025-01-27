import { Container } from '@/components/Container'
import { Experience } from '@/components/Experience'
import { Heading } from '@/components/Heading'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import env from '@/lib/env.client'
import type { Metadata } from 'next'
import Image from 'next/image'

const title = 'José Gregorio Materán | Frontend web developer'
const description =
	'I am a front-end web developer specialized in the React and TypeScript ecosystem with more than 5 years of experience building digital products.'

export const metadata: Metadata = {
	title,
	description,
	twitter: {
		title,
		creator: '@reburn_dev',
		card: 'summary_large_image',
	},
	openGraph: {
		title,
		description,
		images: `${env.NEXT_PUBLIC_HOME_URL}/images/website.png`,
	},
}

function Cover() {
	return (
		<div className="selection:bg-blue-600 selection:text-white pb-16 pt-32 bg-slate-200 dark:bg-gray-800 text-black dark:text-white leading-7">
			<Container className="flex flex-col md:flex-row md:items-center">
				<div className="md:order-2 flex justify-center mb-10 md:mb-0">
					<div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden">
						<Image
							src="/images/foto.webp"
							width="240"
							height="240"
							alt="José Gregorio Materán"
							priority
						/>
					</div>
				</div>
				<div className="flex-1" />
				<div className="md:pr-20 text-center md:text-left">
					<Heading size="huge" className="leading-snug mb-4 font-extrabold">
						Hi, I am Greg.{' '}
						<span className="text-slate-500 dark:text-gray-200">
							I build things for web.
						</span>
					</Heading>
					<Text>
						I am a front-end web developer specialized in the React and
						TypeScript ecosystem with more than 5 years of experience building
						digital products.
					</Text>
					<div className="flex md:justify-start justify-center mt-6">
						<Social />
					</div>
				</div>
			</Container>
		</div>
	)
}

export default function HomeRoute() {
	return (
		<main>
			<Cover />
			<Experience />
			<Skills />
			<Projects />
		</main>
	)
}
