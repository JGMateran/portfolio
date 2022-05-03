import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'

type ArticleProps = {
  title: string,
  description: string,
  date: string,
  read: number
}

export function Article ({
  title,
  description,
  date,
  read
}: ArticleProps) {
  return (
    <a href="#" className="block focus:outline-none focus-visible:ring-2 py-10 px-6 -mx-6 border-b border-dotted border-slate-700">
      <div className="flex md:justify-start items-center justify-between mb-4 text-sm text-slate-400">
        <div className="md:w-36">
          {date}
        </div>
        <div>
          {read} minutes de lectura
        </div>
      </div>
      <div className="md:pl-36">
        <Heading className="mb-2">
          {title}
        </Heading>
        <Text>
          {description}
        </Text>
        <div className="mt-8">
          <Button>
            Read more
          </Button>
        </div>
      </div>
    </a>
  )
}
