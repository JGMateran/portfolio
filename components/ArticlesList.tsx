import { Container } from '@/components/Container'
import { ArticleItem } from '@/components/ArticleItem'
import { type Post } from 'contentlayer/generated'

export function ArticlesList ({
  data
}: {
  data: Post[]
}) {
  if (data.length === 0) {
    return (
      <h2 className="text-2xl font-bold">
        No articles yet
      </h2>
    )
  }

  return (
    <Container size="medium" gap={false}>
      {
        data.map((article, index) => (
          <ArticleItem key={index} data={article} />
        ))
      }
    </Container>
  )
}
