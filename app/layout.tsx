import type { ReactNode } from 'react'
import '@/styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	metadataBase: new URL('https://www.reburn.dev'),
	icons: {
		icon: './favicon.svg',
	},
	twitter: {
		creator: '@reburn_dev',
		card: 'summary_large_image',
	},
}

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={clsx(
					inter.className,
					'dark:bg-gray-900 dark:text-white bg-white',
				)}
			>
				<Navbar />

				<Providers>
					{children}
					<ContactForm />
					<Footer />
				</Providers>

				<Analytics />
				<SpeedInsights />

				<Script
					src="https://analytics.ahrefs.com/analytics.js"
					data-key="YuretoU6qf7vDXDQJB2ngw"
					async
				/>
			</body>
		</html>
	)
}
