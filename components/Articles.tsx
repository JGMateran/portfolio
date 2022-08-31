import Link from 'next/link'

import { Divider } from '@/components/Divider'
import { ArticlesList } from '@/components/ArticlesList'

export function Articles ({ data }: any) {
  return (
    <>
      {
        data.length > 0 && (
          <>
            <Divider />
            <h2 className="text-3xl font-bold mb-2 text-center">
              Latest articles
            </h2>
            <h4 className="mb-10 text-xl dark:text-gray-100 text-gray-500 text-center">
              Prepared especially for you
            </h4>
            <ArticlesList data={data} />
            <div className="my-14 text-center">
              <Link href="/blog">
                <a>
                  See all articles
                </a>
              </Link>
            </div>
          </>
        )
      }
    </>
  )
}
