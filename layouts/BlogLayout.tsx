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
import { Footer } from '@/components/Footer'
import { Text } from '@/components/Text'

function shareOnFacebookUrl (url: string) {
  return `https://www.facebook.com/sharer.php?u=${url}`
}

function shareOnTwitterUrl (url: string) {
  return `https://twitter.com/intent/tweet?url=${url}`
}

function shareOnLinkedinUrl (url: string) {
  return `https://www.linkedin.com/shareArticle?url=${url}`
}

export function BlogLayout ({
  children,
  title,
  description,
  url
}: {
  children: ReactNode,
  title: string,
  description: string,
  url: string
}) {
  return (
    <>
      <div className="selection:bg-blue-600 selection:text-white min-h-screen dark:bg-gray-800 bg-slate-200 dark:text-white leading-7">
        <Header>
          <Container>
            <Heading size="big" className="mb-4 leading-10">
              {title}
            </Heading>
            <Text>
              {description}
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
                  <a href={shareOnFacebookUrl(url)}>
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={shareOnTwitterUrl(url)}>
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={shareOnLinkedinUrl(url)}>
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
          </Container>
          <Footer />
        </main>
      </div>
    </>
  )
}
