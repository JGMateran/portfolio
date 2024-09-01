import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { type Post } from 'content-collections'
import { MDXContent } from '@content-collections/mdx/react'

type AnchorProps = ComponentPropsWithoutRef<'a'>

function Anchor ({
  href,
  ...props
}: AnchorProps) {
  if (typeof href !== 'string') return null

  if (href.startsWith('http')) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    )
  }

  return <Link href={href} {...props} />
}

export const MDXComponents = {
  a: Anchor
}

export function Mdx ({
  code
}: {
  code: Post['mdx']
}) {
  return (
    <MDXContent
      code={code}
      components={MDXComponents}
    />
  )
}
