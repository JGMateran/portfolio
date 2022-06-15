import { ReactNode } from 'react'

import {
  Facebook,
  Linkedin,
  Twitter,
  ArrowLeft
} from 'react-feather'

import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Divider } from '@/components/Divider'
import { Footer } from '@/components/Footer'
import { Text } from '@/components/Text'

export function BlogLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <div className="selection:bg-blue-600 selection:text-white min-h-screen dark:bg-gray-800 bg-slate-200 dark:text-white leading-7">
        <Header>
          <Container>
            <Heading size="big" className="mb-4 leading-10">
              Las crueles desventuras de un desarrollador de software
            </Heading>
            <Text>
              Adipisicing officia deserunt nulla consectetur beatae voluptates? Minus quo odio expedita maiores ab. Consequuntur beatae quo eum deserunt aliquid? Ea voluptatum enim voluptas consequatur recusandae fuga iste Incidunt eaque sed
            </Text>

            <div className="flex items-center mt-10">
              <a href="#" className="flex items-center">
                <ArrowLeft className="mr-4" />
                <span className="text-sm">
                  Volver al inicio
                </span>
              </a>

              <div className="flex-1"></div>

              <div className="flex items-center">
                <span className="mr-4 text-sm">
                  Compartir en
                </span>
                <div className="flex space-x-3 items-center">
                  <a href="#">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Header>

        <main className="dark:bg-gray-900 dark:text-white min-h-screen bg-white">
          <Container>
            {children}

            <Divider />
            <Footer />
          </Container>
        </main>
      </div>
    </>
  )
}
