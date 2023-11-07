import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { type ReactNode } from 'react'

export default function BlogLayout ({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />

      <main className="dark:bg-gray-900 dark:text-white min-h-screen bg-white">
        {children}

        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
