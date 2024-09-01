'use client'

import { Moon, Sun } from 'react-feather'

import { useTheme } from 'next-themes'

function DarkModeSwitch({
	onClick,
}: {
	onClick?: () => void
}) {
	return (
		<button
			type="button"
			aria-label="Toggle darkmode"
			onClick={onClick}
			className="dark:bg-blue-500 bg-slate-500 dark:shadow-lg dark:shadow-blue-600/30 w-10 h-6 p-1 rounded-full duration-150 hover:cursor-pointer"
		>
			<div className="dark:translate-x-full w-4 h-4 bg-white rounded-full duration-150" />
		</button>
	)
}

export function DarkmodeButton() {
	const { theme, setTheme } = useTheme()

	const handleClick = () => {
		console.log('click')
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className="flex items-center space-x-4">
			<Sun />
			<DarkModeSwitch onClick={handleClick} />
			<Moon />
		</div>
	)
}
