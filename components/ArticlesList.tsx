import { Container } from '@/components/Container'
import { ArticleItem } from '@/components/ArticleItem'

type Articles = {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: {
    text: string
  }
  image: string
}

export function ArticlesList ({
  data
}: {
  data: Articles[]
}) {
  if (data.length === 0) return null

  return (
    <Container size="medium" gap={false}>
      {
        data.map((article, index) => (
          <ArticleItem key={index} {...article} />
        ))
      }
    </Container>
  )
}
