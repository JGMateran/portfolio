import { NextSeo } from 'next-seo'

import { HOME_URL } from '@/lib/constants'

import { Skills } from '@/components/Skills'
import { HomeLayout } from '@/layouts/HomeLayout'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'

export default function Home () {
  return (
    <HomeLayout>
      <NextSeo
        title="José Gregorio Materán | Frontend web developer"
        description="I am a front-end web developer specialized in the React and TypeScript ecosystem with more than 5 years of experience building digital products."
        twitter = {{
          handle: '@reburn_dev',
          cardType: 'summary_large_image'
        }}
        openGraph={{
          images: [
            {
              url: `${HOME_URL}/images/website.png`,
              width: 1200,
              height: 630
            }
          ]
        }}
      />

      <Experience />
      <Skills />
      <Projects />
    </HomeLayout>
  )
}
