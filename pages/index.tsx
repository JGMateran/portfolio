import { Skills } from '@/components/Skills'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Article } from '@/components/Article'
import { ContactForm } from '@/components/ContactForm'
import { HomeLayout } from '@/layouts/HomeLayout'

import { NextSeo } from 'next-seo'
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
          Dolor minus molestias quam mollitia iusto totam. Eum doloribus velit deleniti quas explicabo. Minima ea delectus praesentium maiores itaque. Distinctio non expedita ab beatae ipsam consequatur Alias eligendi nulla optio?
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
