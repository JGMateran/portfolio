import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

const experience = [
	{
		id: 0,
		from: 'August, 2017',
		to: 'Present',
		title: 'Frontend web developer at zkreations',
		description:
			'My main work is the creation of tools made in JavaScript that streamline the process of creating software and eliminate repetitive tasks. I have also developed two component libraries (of which I am the main maintainer) that have meant an increase in productivity.',
	},
	{
		id: 1,
		from: 'April, 2015',
		to: 'August, 2017',
		title: 'Freelancer',
		description:
			'During this time my main work was developing websites for brands and individuals. I also created from scratch custom functionalities for existing projects. In addition to creating applications from scratch and maintaining several of them.',
	},
]

export function Experience() {
	return (
		<Container className="mt-16">
			<Heading size="big" className="mb-14 text-center">
				Work experience
			</Heading>
			{experience.map(({ from, to, title, description, id }) => (
				<div key={id} className="mb-14 md:flex">
					<div className="mb-4 pr-8 w-48">
						<Text className="text-xs md:text-right leading-7">
							{from} — {to}
						</Text>
					</div>
					<div className="flex-1">
						<Heading as="h3" className="mb-2" size="small">
							{title}
						</Heading>
						<Text>{description}</Text>
					</div>
				</div>
			))}
		</Container>
	)
}
