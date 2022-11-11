import type { ReactNode } from 'react'

import Image from 'next/image'

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
    <span className="mr-2 mb-2 inline-flex text-xs py-2 px-3 rounded-full border border-dotted border-gray-600">
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
}: ProjectTypes) {
  return (
    <div className="md:flex md:items-center bg-slate-100 dark:bg-gray-800 border border-dotted border-slate-400 dark:border-gray-600 rounded-lg mb-8">
      <div className="md:w-1/2">
        <a href={url} rel="noopener noreferrer" target="_blank" className="flex">
          <Image
            src={image}
            className="rounded-lg"
            width="695"
            height="390"
            alt={title}
          />
        </a>
      </div>
      <div className="p-6 md:w-1/2">
        <div className="flex items-center mb-2">
          <Heading as="h3" size="small" className="truncate">
            <a href={url} rel="noopener noreferrer" target="_blank" className="truncate">
              {title}
            </a>
          </Heading>
          <div className="flex-1"></div>
          <a aria-label="Go to the project on GitHub" href={github} className="ml-4" rel="noopener noreferrer" target="_blank">
            <GitHub className="w-5 h-5" />
          </a>
          <a aria-label="Go to the project" href={url} className="ml-4" rel="noopener noreferrer" target="_blank">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <Text className="line-clamp-2 text-sm leading-6 mb-4">
          {description}
        </Text>
        <div className="flex flex-wrap items-center">
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
    title: 'Movie Search Engine',
    description: 'A movie search engine where you can get information about current movies, actors information, see the trailer an much more.',
    image: '/images/01.png',
    url: 'https://vite-tmdb-explorer.vercel.app/',
    github: 'https://github.com/JGMateran/tmdb-exporer',
    technologies: [
      'TypeScript',
      'Vite',
      'TailwindCSS'
    ]
  },
  {
    id: 1,
    title: 'Beautiful Twitter Cards',
    description: 'A tool to easily create modern and beautiful twitter cards to post on social network.',
    image: '/images/02.png',
    url: 'https://beautiful-twitter-cards.vercel.app/',
    github: 'https://github.com/JGMateran/beautiful-twitter-cards',
    technologies: [
      'Vite',
      'TailwindCSS'
    ]
  },
  {
    id: 2,
    title: 'Open-Source URL Shortener',
    description: 'A simple tool to shorten URLs.',
    image: '/images/03.png',
    url: 'https://reburn-link.vercel.app',
    github: 'https://github.com/JGMateran/url-shortener',
    technologies: [
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
        projects.map((project) => (
          <Project key={project.id} {...project} />
        ))
      }
    </>
  )
}
