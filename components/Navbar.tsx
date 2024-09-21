'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import { BurgerButton } from '@/components/BurgerButton'
import { Container } from '@/components/Container'
import { Anchor } from './Anchor'
import { Button } from './Button'
import { Drawer } from './Drawer'

const items = [
	{
		key: 0,
		content: 'Articles',
		href: '/blog',
	},
	{
		key: 1,
		content: 'Curriculum',
		href: '/curriculum-english.pdf',
	},
]

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
					{items.map((item) => (
						<Anchor key={item.key} href={item.href} className="text-sm">
							{item.content}
						</Anchor>
					))}
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
