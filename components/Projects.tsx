import type { ReactNode } from 'react'

import { Heading } from '@/components/Heading'
import { Text } from '@/components/Text'

import { GitHub, ExternalLink } from 'react-feather'

function Badge ({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex text-xs py-2 px-3 rounded-full border border-dotted border-gray-600">
      {children}
    </span>
  )
}

type ProjectProps = {
  title: string,
  description: string,
  image: string
}

function Project ({
  title,
  description,
  image
}: ProjectProps) {
  return (
    <div className="md:flex md:items-center bg-gray-800 border border-dotted border-gray-600 rounded-lg overflow-hidden mb-8">
      <div className="md:w-1/2">
        <a href="#">
          <img src={image} alt="" />
        </a>
      </div>
      <div className="p-6 md:w-1/2">
        <div className="flex items-center mb-1">
          <Heading size="small" className="flex-1 truncate">
            {title}
          </Heading>
          <a href="#" className="ml-4">
            <GitHub className="w-5 h-5" />
          </a>
          <a href="#" className="ml-4">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <Text className="text-sm leading-7 mb-3">
          {description}
        </Text>
        <div className="flex items-center space-x-2">
          <Badge>
            Vite
          </Badge>
          <Badge>
            TailwindCSS
          </Badge>
        </div>
      </div>
    </div>
  )
}

export function Projects () {
  return (
    <>
      <Heading size="big" className="text-center mb-8">
        Personal projects
      </Heading>

      <Project
        title="Dolor consequuntur aspernatur optio a"
        description="Dolor adipisicing explicabo provident totam reiciendis Dolorum ab iusto minus!"
        image="/images/01.png"
      />

      <Project
        title="Dolor consequuntur aspernatur optio a"
        description="Dolor adipisicing explicabo provident totam reiciendis Dolorum ab iusto minus!"
        image="/images/02.png"
      />
    </>
  )
}
