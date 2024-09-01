import { GitHub, Linkedin, Twitter } from 'react-feather'

import { Container } from '@/components/Container'
import { DarkmodeButton } from '@/components/DarkmodeButton'
import { Divider } from '@/components/Divider'

export function Footer() {
	return (
		<Container>
			<Divider />
			<div className="flex sm:flex-row flex-col items-center my-14 text-black dark:text-white">
				<div className="flex items-center sm:mb-0 mb-6">
					<span className="mr-4 text-sm text-slate-800 dark:text-gray-100">
						Follow me on
					</span>
					<div className="flex items-center space-x-3">
						<a
							aria-label="LinkedIn"
							href="https://www.linkedin.com/in/reburning"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-5 h-5" />
						</a>
						<a
							aria-label="GitHub"
							href="https://www.github.com/JGMateran"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHub className="w-5 h-5" />
						</a>
						<a
							aria-label="Twitter"
							href="https://www.twitter.com/reburn_dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Twitter className="w-5 h-5" />
						</a>
					</div>
				</div>
				<div className="flex-1" />
				<DarkmodeButton />
			</div>
		</Container>
	)
}
