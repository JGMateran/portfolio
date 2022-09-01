import { useState } from 'react'

import Link from 'next/link'

import { Container } from '@/components/Container'
import { Anchor } from '@/components/Anchor'
import { Button } from '@/components/Button'
import { BurgerButton } from '@/components/BurgerButton'

import clsx from 'clsx'

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

function Drawer ({ open }: { open: boolean }) {
  return (
    <div className={clsx(
      {
        'invisible sm:visible': !open,
        visible: open
      }
    )}>
      <div
        aria-hidden="true"
        className={clsx(
          'fixed inset-0 duration-200 sm:hidden',
          {
            'visible bg-gray-900/90': open,
            'invisible bg-translate': !open
          }
        )}
      />
      <div className="flex text-xl fixed inset-0 flex-col p-10 justify-center items-center space-y-6 font-bold sm:relative sm:text-sm sm:font-normal sm:justify-start sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:p-0">
        {
          items.map((item, index) => (
            <Anchor
              key={item.key}
              href={item.href}
              className={clsx(
                'duration-200 text-white',
                {
                  'translate-x-0 sm:opacity-100 sm:translate-0': open,
                  'opacity-0 -translate-x-4 sm:opacity-100 sm:translate-0': !open
                }
              )}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {item.content}
            </Anchor>
          ))
        }
        <Button
          as="a"
          href="#contact"
          className="hidden sm:block"
        >
          Contact me
        </Button>
      </div>
    </div>
  )
}

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-30">
      <Container className="flex items-center h-14 px-6">
        <h2 className="text-xl font-bold flex-1 dark:text-white">
          <Link href="/">
            reburn.dev
          </Link>
        </h2>
        {/* <div className="flex items-center text-sm space-x-4 dark:text-gray-300 text-black" /> */}
        <Drawer open={isOpen} />
        <BurgerButton
          className="relative z-40 sm:hidden"
          open={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </Container>
    </div>
  )
}
