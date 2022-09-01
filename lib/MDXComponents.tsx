import type { ComponentPropsWithoutRef } from 'react'
import Link from 'next/link'

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href: string
}

function Anchor ({
  href,
  ...props
}: AnchorProps) {
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

  return (
    <Link href={href} passHref>
      <a {...props} />
    </Link>
  )
}

export const MDXComponents = {
  a: Anchor
}
