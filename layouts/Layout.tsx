import { ReactNode } from 'react'

import {
  ArrowLeft
} from 'react-feather'

import Link from 'next/link'

import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Footer } from '@/components/Footer'
import { Text } from '@/components/Text'

export function Layout ({
  children
}: {
  children: ReactNode
}) {
  return <>
    <div className="selection:bg-blue-600 selection:text-white min-h-screen dark:bg-gray-800 bg-slate-200 dark:text-white leading-7">
      <Header>
        <Container>
          <Heading size="big" className="mb-4 leading-10">
            Latest articles
          </Heading>
          <Text>
            Here you will find a collection of all the articles I have written over time, I hope you enjoy it.
          </Text>

          <div className="flex items-center mt-10">
            <Link href="/">
              <div className="flex items-center">
                <ArrowLeft className="mr-4" />
                <span className="text-sm">
                  Back to home
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </Header>

      <main className="dark:bg-gray-900 dark:text-white min-h-screen bg-white">
        <Container>
          {children}
        </Container>
        <Footer />
      </main>
    </div>
  </>
}
