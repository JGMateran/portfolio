import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'
import { type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

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
  code: Post['body']['code']
}) {
  const MDXContent = useMDXComponent(code)

  return (
    <MDXContent
      components={MDXComponents}
    />
  )
}
