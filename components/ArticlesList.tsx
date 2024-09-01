import { ArticleItem } from '@/components/ArticleItem'
import { Container } from '@/components/Container'
import type { Post } from 'content-collections'

export function ArticlesList({
	data,
}: {
	data: Post[]
}) {
	if (data.length === 0) {
		return <h2 className="text-2xl font-bold">No articles yet</h2>
	}

	return (
		<Container size="medium" gap={false}>
			{data.map((article) => (
				<ArticleItem key={article._meta.path} data={article} />
			))}
		</Container>
	)
}
