import type { ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'
import { Divider } from '@/components/Divider'

import { GitHub, ExternalLink } from 'react-feather'

type ProjectTypes = {
  id: number,
  title: string,
  description: string,
  image: string,
  url: string,
  github: string,
  technologies: string[]
}

function Badge ({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex text-xs py-2 px-3 rounded-full border border-dotted border-gray-600">
      {children}
    </span>
  )
}

function Project ({
  title,
  description,
  image,
  url,
  github,
  technologies
}: Omit<ProjectTypes, 'id'>) {
  return (
    <div className="md:flex md:items-center bg-slate-200 dark:bg-gray-800 border border-dotted border-slate-400 dark:border-gray-600 rounded-lg mb-8">
      <div className="md:w-1/2">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <img src={image} className="rounded-lg" alt="" />
        </a>
      </div>
      <div className="p-6 md:w-1/2">
        <div className="flex items-center mb-1">
          <Heading size="small" className="flex-1 truncate">
            {title}
          </Heading>
          <a href={github} className="ml-4" rel="noopener noreferrer" target="_blank">
            <GitHub className="w-5 h-5" />
          </a>
          <a href={url} className="ml-4" rel="noopener noreferrer" target="_blank">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <Text className="text-sm leading-7 mb-3">
          {description}
        </Text>
        <div className="flex items-center space-x-2">
          {
            technologies.map((technology, index) => (
              <Badge key={index}>{technology}</Badge>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const projects: ProjectTypes[] = [
  {
    id: 0,
    title: 'Movie Search',
    description: 'A search engine for movies.',
    image: '/images/01.png',
    url: 'https://vite-tmdb-explorer.vercel.app/',
    github: 'https://github.com/JGMateran/tmdb-exporer',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS'
    ]
  },
  {
    id: 1,
    title: 'Beautifull Twitter Cards',
    description: 'A simple tool to generate Twitter Cards.',
    image: '/images/02.png',
    url: 'https://beautiful-twitter-cards.vercel.app/',
    github: 'https://github.com/JGMateran/beautiful-twitter-cards',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS'
    ]
  },
  {
    id: 2,
    title: 'Open-Source URL Shortener',
    description: 'A simple tool to shorten URLs.',
    image: '/images/03.png',
    url: '#',
    github: '#',
    technologies: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Supabase'
    ]
  }
]

export function Projects () {
  return (
    <>
      <Divider />

      <Heading size="big" className="text-center mb-8">
        Personal projects
      </Heading>

      {
        projects.map(({ id, ...rest }) => (
          <Project key={id} {...rest} />
        ))
      }

      <div className="text-center mt-10 mb-14">
        <a href="#" className="font-semibold">
          Ver todos los proyectos
        </a>
      </div>
    </>
  )
}
