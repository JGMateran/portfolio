import Link from 'next/link'

import { useState } from 'react'

import { Container } from '@/components/Container'
import { DarkmodeButton } from '@/components/DarkmodeButton'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { BurgerButton } from '@/components/BurgerButton'

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="sticky top-0 z-30">
      <Container className="flex items-center h-14 px-6">
        <h2 className="text-xl font-bold flex-1 text-white">
          <Link href="/">
            reburn.dev
          </Link>
        </h2>
        <div className="flex items-center text-sm space-x-4 text-slate-300">
          <Anchor className="text-blue-600">Blog</Anchor>
          <Anchor>Projects</Anchor>
          <Anchor>Contact me</Anchor>
          <BurgerButton
            open={isOpen}
            onClick={handleClick}
          />
        </div>
      </Container>
    </div>
  )
}
