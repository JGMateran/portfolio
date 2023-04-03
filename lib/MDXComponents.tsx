import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

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
