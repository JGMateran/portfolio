import { Container } from '@/components/Container'
import { ArticleItem } from '@/components/ArticleItem'
import { Post } from 'contentlayer/generated'

export function ArticlesList ({
  data
}: {
  data: Post[]
}) {
  if (data.length === 0) return null

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
