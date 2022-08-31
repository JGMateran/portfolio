import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

const experience = [
  {
    from: 'August, 2017',
    to: 'Present',
    title: 'Frontend web developer at zkreations',
    description: 'I worked primarily on creating and maintaining two JavaScript libraries that facilitated the product creation process. As team leader I encouraged the change of the methodology to an agile environment which optimized the development process.'
  },
  {
    from: 'April, 2015',
    to: 'August, 2017',
    title: 'Freelancer',
    description: 'My main works consist in layout and modification of websites, as well as creating custom functionalities and also creating applications from scratch.'
  }
]

export function Experience () {
  return (
    <Container gap={false}>
      <Heading size="big" as="h3" className="mb-14 text-center">
        Work experience
      </Heading>
      {
        experience.map(({ from, to, title, description }, index) => (
          <div key={index} className="mb-14 md:flex">
            <div className="mb-4 pr-8 w-48">
              <Text className="text-xs md:text-right leading-7">{from} — {to}</Text>
            </div>
            <div className="flex-1">
              <Heading as="h2" className="mb-2" size="small">{title}</Heading>
              <Text>{description}</Text>
            </div>
          </div>
        ))
      }
    </Container>
  )
}
