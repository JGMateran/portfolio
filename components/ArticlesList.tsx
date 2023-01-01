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
    <Container size="small" gap={false}>
      <div className="grid pt-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {
          data.map((article) => (
            <ArticleItem key={article.slug} {...article} />
          ))
        }
      </div>
    </Container>
  )
}
