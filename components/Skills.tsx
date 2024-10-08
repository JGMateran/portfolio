'use client'

import { CSSIcon } from '@/components/Icon/CSSIcon'
import { FirebaseIcon } from '@/components/Icon/FirebaseIcon'
import { GitIcon } from '@/components/Icon/GitIcon'
import { HTMLIcon } from '@/components/Icon/HTMLIcon'
import { JavaScriptIcon } from '@/components/Icon/JavaScriptIcon'
import { JestIcon } from '@/components/Icon/JestIcon'
import { NextJsIcon } from '@/components/Icon/NextJsIcon'
import { NodeJsIcon } from '@/components/Icon/NodeJsIcon'
import { PlaywrightIcon } from '@/components/Icon/Playwright'
import { ReactIcon } from '@/components/Icon/ReactIcon'
import { ReactTestingLibrary } from '@/components/Icon/ReactTestingLibraryIcon'
import { SupabaseIcon } from '@/components/Icon/SupabaseIcon'
import { SvelteIcon } from '@/components/Icon/SvelteIcon'
import { TailwindCSSIcon } from '@/components/Icon/TailwindCSSIcon'
import { TypeScriptIcon } from '@/components/Icon/TypeScriptIcon'
import { ViteIcon } from '@/components/Icon/ViteIcon'
import { VitestIcon } from '@/components/Icon/VitestIcon'
import { VueIcon } from '@/components/Icon/VueIcon'

import { Button } from '@/components/Button'
import { useState } from 'react'

import { Container } from '@/components/Container'

import { Divider } from '@/components/Divider'

const allSkills = [
	{
		name: 'HTML',
		icon: HTMLIcon,
	},
	{
		name: 'CSS',
		icon: CSSIcon,
	},
	{
		name: 'JavaScript',
		icon: JavaScriptIcon,
	},
	{
		name: 'TypeScript',
		icon: TypeScriptIcon,
	},
	{
		name: 'React',
		icon: ReactIcon,
	},
	{
		name: 'Vue',
		icon: VueIcon,
	},
	{
		name: 'Svelte',
		icon: SvelteIcon,
	},
	{
		name: 'TailwindCSS',
		icon: TailwindCSSIcon,
	},
	{
		name: 'Next.js',
		icon: NextJsIcon,
	},
	{
		name: 'Vite',
		icon: ViteIcon,
	},
	{
		name: 'Firebase',
		icon: FirebaseIcon,
	},
	{
		name: 'Supabase',
		icon: SupabaseIcon,
	},
	{
		name: 'Vitest',
		icon: VitestIcon,
	},
	{
		name: 'Jest',
		icon: JestIcon,
	},
	{
		name: 'Testing Library',
		icon: ReactTestingLibrary,
	},
	{
		name: 'Playwright',
		icon: PlaywrightIcon,
	},
	{
		name: 'Node.js',
		icon: NodeJsIcon,
	},
	{
		name: 'Git',
		icon: GitIcon,
	},
]

export function Skills() {
	const [skills, setSkills] = useState(() => allSkills.slice(0, 18))

	const handleShow = () => {
		setSkills(allSkills)
	}

	return (
		<Container>
			<Divider />

			<h2 className="text-3xl font-bold mb-2 text-center">Technologies</h2>
			<div className="mb-14 text-xl dark:text-gray-100 text-gray-500 text-center">
				I have worked with
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
				{skills.map(({ name, icon: Icon }) => (
					<div
						key={name}
						className="px-2 bg-slate-100 dark:bg-gray-800 py-6 text-center border border-dotted border-slate-400 dark:border-gray-600 rounded-lg"
					>
						<div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
							<Icon />
						</div>
						<p className="text-sm font-semibold truncate">{name}</p>
					</div>
				))}
			</div>
			<div className="text-lg font-semibold text-slate-400 text-center my-8">
				{skills.length < allSkills.length && (
					<Button onClick={handleShow}>Y muchos mas</Button>
				)}
			</div>
		</Container>
	)
}
