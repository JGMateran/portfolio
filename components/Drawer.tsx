import Link from 'next/link'
import { BookOpen, MessageSquare } from 'react-feather'
import { Drawer as Vaul } from 'vaul'

interface DrawerItem {
	key: number
	content: string
	href: string
}

interface DrawerProps {
	isOpen: boolean
	setIsOpen: (open: boolean) => void
	items: DrawerItem[]
}

export function Drawer({ isOpen, items, setIsOpen }: DrawerProps) {
	return (
		<Vaul.Root open={isOpen} onOpenChange={setIsOpen} direction="left">
			<Vaul.Portal>
				<Vaul.Overlay className="fixed inset-0 bg-black/50 z-10 sm:hidden" />
				<Vaul.Content
					className="p-6 fixed top-0 left-0 h-full w-full max-w-xs bg-gray-900 text-white z-10 sm:hidden"
					aria-describedby="This menu contains links to the main sections of our website, as well as links to our social media profiles. Use the links to navigate the site or connect with us on social media."
				>
					<h2 className="text-xl font-bold dark:text-white">reburn.dev</h2>
					<ul className="my-4">
						<Link
							className="p-3 flex items-center text-sm hover:bg-gray-700"
							href="/blog"
							onClick={() => {
								setIsOpen(false)
							}}
						>
							<BookOpen className="size-16" />
							<span className="ml-4 font-bold">Artículos</span>
						</Link>
						<Link
							className="p-3 flex items-center text-sm hover:bg-gray-700"
							onClick={() => {
								setIsOpen(false)
							}}
							href="#contact"
						>
							<MessageSquare className="h-5 w-5" />
							<span className="ml-4 font-bold">Contacto</span>
						</Link>
					</ul>
				</Vaul.Content>
			</Vaul.Portal>
		</Vaul.Root>
	)
}
