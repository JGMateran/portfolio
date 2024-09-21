'use client'

import { useState } from 'react'

import Link from 'next/link'

import { BurgerButton } from '@/components/BurgerButton'
import { Container } from '@/components/Container'
import { Anchor } from './Anchor'
import { Button } from './Button'
import { Drawer } from './Drawer'

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="h-14 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 fixed top-0 w-full z-10">
			<Container className="flex items-center h-14 px-6">
				<Link href="/" className="text-xl font-bold dark:text-white">
					reburn.dev
				</Link>

				<div className="flex-1" />

				<div className="sm:flex hidden items-center gap-x-4 font-bold">
					<Anchor href="/blog" className="text-sm">
						Articles
					</Anchor>
					<Anchor
						href="/curriculum-english.pdf"
						className="text-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						Curriculum
					</Anchor>
					<Button as="a" href="#contact">
						Contactame
					</Button>
				</div>

				<Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

				<BurgerButton
					className="relative z-40 sm:hidden"
					open={isOpen}
					onClick={() => {
						setIsOpen((prev) => !prev)
					}}
				/>
			</Container>
		</div>
	)
}
