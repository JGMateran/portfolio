import type {
  ReactNode
} from 'react'

import { Navbar } from '@/components/Navbar'
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
      <div className="selection:bg-blue-600 selection:text-white min-h-screen bg-gray-800 text-white leading-7">
        <Navbar />

        <Header>
          <Container className="flex flex-col md:flex-row md:items-center">
            <div className="md:order-2 flex justify-center mb-10 md:mb-0">
              <MainPhoto />
            </div>
            <div className="flex-1"></div>
            <div className="md:pr-20 text-center md:text-left">
              <Heading size="huge" className="leading-snug mb-4 font-extrabold">
                Hi, I am Greg. <span className="text-slate-400">I build things for web.</span>
              </Heading>
              <Text>
                Soy un desarrollador web fronted expecializado en React con +5 años de experiencia creando soluciones extraordinarias para problemas ordinarios.
              </Text>
              <div className="flex md:justify-start justify-center mt-6">
                <Social />
              </div>
            </div>
          </Container>
        </Header>
        <div className="h-14 bg-gray-900 sticky top-0 z-10"></div>

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
