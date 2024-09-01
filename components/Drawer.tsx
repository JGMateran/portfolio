import clsx from 'clsx'

import { Anchor } from '@/components/Anchor'
import { Button } from './Button'

interface DrawerItem {
	key: number
	content: string
	href: string
}

interface DrawerProps {
	open: boolean
	items: DrawerItem[]
}

export function Drawer({ open, items }: DrawerProps) {
	return (
		<div
			className={clsx({
				'invisible sm:visible': !open,
				visible: open,
			})}
		>
			<div
				aria-hidden="true"
				className={clsx('fixed inset-0 duration-200 sm:hidden', {
					'visible bg-gray-900/90': open,
					'invisible bg-transparent': !open,
				})}
			/>
			<div className="flex text-xl fixed inset-0 flex-col p-10 justify-center items-center space-y-6 font-bold sm:relative sm:text-sm sm:font-normal sm:justify-start sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:p-0">
				{items.map((item) => (
					<Anchor
						key={item.key}
						href={item.href}
						className={clsx(
							'duration-200 text-white sm:dark:text-white sm:text-black',
							{
								'translate-x-0 sm:opacity-100 sm:translate-0': open,
								'opacity-0 -translate-y-2 sm:opacity-100 sm:translate-y-0':
									!open,
							},
						)}
					>
						{item.content}
					</Anchor>
				))}
				<Button as="a" href="#contact" className="hidden sm:block">
					Contact me
				</Button>
			</div>
		</div>
	)
}
