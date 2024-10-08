import { GitHub, Linkedin, Twitter } from 'react-feather'

export function Social() {
	return (
		<div className="flex items-center space-x-2">
			<a
				aria-label="LinkedIn"
				href="https://www.linkedin.com/in/reburning"
				target="_blank"
				rel="noopener noreferrer"
				className="p-2"
			>
				<Linkedin />
			</a>
			<a
				aria-label="GitHub"
				href="https://www.github.com/JGMateran"
				target="_blank"
				rel="noopener noreferrer"
				className="p-2"
			>
				<GitHub />
			</a>
			<a
				aria-label="Twitter"
				href="https://www.twitter.com/reburn_dev"
				target="_blank"
				rel="noopener noreferrer"
				className="p-2"
			>
				<Twitter />
			</a>
		</div>
	)
}
