import type {
  ReactNode
} from 'react'

import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { MainPhoto } from '@/components/MainPhoto'
import { Heading } from '@/components/Heading'
import { Social } from '@/components/Social'
import { Text } from '@/components/Text'
import { Footer } from '@/components/Footer'
import { Divider } from '@/components/Divider'

export function HomeLayout ({
  children
}: {
  children: ReactNode,
}) {
  return (
    <>
      <div className="selection:bg-blue-600 selection:text-white min-h-screen bg-slate-200 dark:bg-gray-800 text-black dark:text-white leading-7">
        <Header>
          <Container className="flex flex-col md:flex-row md:items-center">
            <div className="md:order-2 flex justify-center mb-10 md:mb-0">
              <MainPhoto />
            </div>
            <div className="flex-1"></div>
            <div className="md:pr-20 text-center md:text-left">
              <Heading size="huge" className="leading-snug mb-4 font-extrabold">
                Hi, I am Greg. <span className="text-slate-500 dark:text-gray-200">I build things for web.</span>
              </Heading>
              <Text>
                I am a front-end web developer specialized in the React and TypeScript ecosystem with more than 5 years of experience building digital products.
              </Text>
              <div className="flex md:justify-start justify-center mt-6">
                <Social />
              </div>
            </div>
          </Container>
        </Header>

        <main className="bg-white dark:bg-gray-900 dark:text-white">
          <Container>
            {children}
          </Container>

          <Footer />
        </main>
      </div>
    </>
  )
}
