import { ReactNode } from 'react'

import {
  Facebook,
  Link2,
  Linkedin,
  Twitter
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
      <div className="selection:bg-blue-600 selection:text-white min-h-screen bg-gray-800 text-white leading-7">
        <Header>
          <Container>
            <Heading size="big" className="mb-4 leading-snug">
              Las crueles desventuras de un desarrollador de software
            </Heading>
            <Text>
              Adipisicing officia deserunt nulla consectetur beatae voluptates? Minus quo odio expedita maiores ab. Consequuntur beatae quo eum deserunt aliquid? Ea voluptatum enim voluptas consequatur recusandae fuga iste Incidunt eaque sed
            </Text>
            <div className="mt-10 text-white">
              <div className="flex space-x-4 items-center">
                <a href="#">
                  <Facebook/>
                </a>
                <a href="#">
                  <Twitter />
                </a>
                <a href="#">
                  <Linkedin />
                </a>
                <a href="#">
                  <Link2 />
                </a>
              </div>
            </div>
          </Container>
        </Header>

        <main className="bg-gray-900 text-white">
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
