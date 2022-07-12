import {
  Linkedin,
  GitHub,
  Twitter
} from 'react-feather'

import { ContactForm } from '@/components/ContactForm'
import { DarkmodeButton } from '@/components/DarkmodeButton'
import { Container } from '@/components/Container'
import { Divider } from './Divider'

export function Footer () {
  return (
    <>
      <Container>
        <ContactForm />
      </Container>

      <Container>
        <Divider />
        <div className="flex sm:flex-row flex-col items-center my-14 text-black dark:text-white">
          <div className="flex items-center sm:mb-0 mb-6">
            <span className="mr-4 text-sm uppercase text-slate-800 dark:text-gray-100">
              Follow me on
            </span>
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/reburning" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.github.com/JGMateran" target="_blank" rel="noopener noreferrer">
                <GitHub className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com/reburn_dev" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex-1"></div>
          <DarkmodeButton />
        </div>
      </Container>
    </>
  )
}
