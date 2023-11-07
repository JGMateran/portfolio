'use client'

import { useEffect, useState, useRef } from 'react'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { BurgerButton } from '@/components/BurgerButton'
import { Drawer } from './Drawer'

const items = [
  {
    key: 0,
    content: 'Blog',
    href: '/blog'
  },
  {
    key: 1,
    content: 'Curriculum',
    href: '/curriculum-english.pdf'
  }
]

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  const interval = useRef<number | null>(null)

  useEffect(
    () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      if (isOpen) {
        document.body.setAttribute('style', `overflow: hidden; padding-right: ${scrollbarWidth}px`)
      } else {
        interval.current = window.setTimeout(
          () => {
            document.body.setAttribute('style', 'overflow: normal; padding-right: 0;')
          },
          205
        )
      }

      return () => {
        if (interval.current != null) {
          window.clearInterval(interval.current)
          interval.current = null
        }
      }
    },
    [isOpen]
  )

  return (
    <div className="fixed z-30 w-full">
      <Container className="flex items-center h-14 px-6">
        <Link href="/" className="text-xl font-bold dark:text-white">
          reburn.dev
        </Link>

        <div className="flex-1"></div>

        <Drawer open={isOpen} items={items} />

        <BurgerButton
          className="relative z-40 sm:hidden"
          open={isOpen}
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        />
      </Container>
    </div>
  )
}
