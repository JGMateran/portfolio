import type { ReactNode } from 'react'

import { useForm, ValidationError } from '@formspree/react'

import { Skills } from '@/components/Skills'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Button } from '@/components/Button'
import { Article } from '@/components/Article'
import { ContactForm } from '@/components/ContactForm'
import { HomeLayout } from '@/layouts/HomeLayout'

import { NextSeo } from 'next-seo'

function CustomLink ({
  children
}: {
  children: ReactNode
}) {
  return (
    <a href="#" className="border-b-2 border-slate-800 focus:outline-none focus-visible:ring-2 border-gray-800 bg-slate-700/10 hover:bg-slate-700/20 text-slate-300 font-semibold text-slate-300 inline-block">
      {children}
    </a>
  )
}

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// function ContactForm () {
//   const [state, handleSubmit] = useForm('xnqwobwa')
//
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>
//   }
//
//   return (
//     <form onSubmit={handleSubmit} className="text-black p-8 bg-white rounded-lg flex flex-col">
//       <label className="flex flex-col mb-8">
//         <span className="mb-2 font-semibold text-sm">
//           Your email
//         </span>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           className="border border-gray-500 rounded-sm p-3"
//         />
//         <ValidationError
//           prefix="Email"
//           field="email"
//           errors={state.errors}
//         />
//       </label>
//       <label className="flex flex-col mb-8">
//         <span className="mb-2 font-semibold text-sm">
//           Your message
//         </span>
//         <textarea
//           id="message"
//           name="message"
//           className="border border-gray-500 rounded-sm p-3"
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//         />
//       </label>
//       <Button type="submit" disabled={state.submitting}>
//         Submit
//       </Button>
//     </form>
//   )
// }

export default function Home () {
  return (
    <HomeLayout>
      <NextSeo
        title="Next SEO"
        description="The Next-gen Open Graph and Twitter Card SEO package"
      />

      <Container className="text-center" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-4">
          Experience
        </Heading>
        <Text>
          <CustomLink>Dolor minus molestias quam</CustomLink> mollitia iusto totam. Eum doloribus velit deleniti quas explicabo. Minima ea delectus praesentium maiores itaque. Distinctio non expedita ab beatae ipsam consequatur Alias eligendi nulla optio?
        </Text>
      </Container>

      <Divider />

      <Container className="text-center mb-8 my-14" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-2">
          Technologies
        </Heading>
        <Heading as="h4" size="small" className="text-slate-400">
          that I know
        </Heading>
      </Container>

      <Skills />

      <Divider />

      <Container className="text-center mb-8" gap={false} size="small">
        <Heading size="big" as="h3" className="mb-2">
          Latest articles (in spanish)
        </Heading>
        <Heading as="h4" size="small" className="text-slate-400">
          Prepared especially for you.
        </Heading>
      </Container>

      <Article
        title="Elit maiores minus corporis sed magnam."
        description="Elit maiores minus corporis sed magnam. Laboriosam ipsa mollitia inventore in placeat Dignissimos accusantium vitae harum officia velit ipsa Porro suscipit laudantium repellat distinctio culpa! Fugit facilis omnis nihil asperiores"
        read={300}
        date="13 de abril"
      />

      <div className="text-lg font-semibold text-slate-400 text-center my-10">
        Ver todos los articulos
      </div>

      <ContactForm />
    </HomeLayout>
  )
}
