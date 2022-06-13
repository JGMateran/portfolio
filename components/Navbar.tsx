import Link from 'next/link'

import { Container } from '@/components/Container'
import { Anchor } from '@/components/Anchor'

export function Navbar () {
  return (
    <div className="sticky top-0 z-30">
      <Container className="flex items-center h-14 px-6">
        <h2 className="text-xl font-bold flex-1 dark:text-white">
          <Link href="/">
            reburn.dev
          </Link>
        </h2>
        <div className="flex items-center text-sm space-x-4 dark:text-gray-300 text-black">
          <Anchor href="/blog">Blog</Anchor>
          <Anchor href="/projects">Projects</Anchor>
          <Anchor href="/#contact">Contact me</Anchor>
        </div>
      </Container>
    </div>
  )
}
