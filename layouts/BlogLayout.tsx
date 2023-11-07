import { type ReactNode } from 'react'

import Link from 'next/link'

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
import { ContactForm } from '@/components/ContactForm'

function shareOnFacebookUrl (url: string) {
  return `https://www.facebook.com/sharer.php?u=${url}`
}

function shareOnTwitterUrl (url: string, title: string) {
  return `https://twitter.com/intent/tweet?url=${url}&title=${title}`
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
  children: ReactNode
  title: string
  description: string
  url: string
}) {
  return (
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
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-4" />
              <span className="text-sm">
                Back to home
              </span>
            </Link>

            <div className="flex-1"></div>

            <div className="flex items-center">
              <span className="mr-4 text-sm">
                Share on
              </span>
              <div className="flex space-x-3 items-center">
                <a target="_blank" rel="noopener noreferrer" href={shareOnFacebookUrl(url)}>
                  <Facebook className="w-5 h-5" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={shareOnTwitterUrl(url, title)}>
                  <Twitter className="w-5 h-5" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href={shareOnLinkedinUrl(url)}>
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

        <ContactForm />
        <Footer />
      </main>
    </div>
  )
}
