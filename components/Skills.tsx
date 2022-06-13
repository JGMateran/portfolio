import * as Icon from '@/components/Icon'

import { useState } from 'react'
import { Button } from '@/components/Button'

const allSkills = [
  {
    name: 'HTML',
    Icon: Icon.HTMLIcon
  },
  {
    name: 'CSS',
    Icon: Icon.CSSIcon
  },
  {
    name: 'JavaScript',
    Icon: Icon.JavaScriptIcon
  },
  {
    name: 'TypeScript',
    Icon: Icon.TypeScriptIcon
  },
  {
    name: 'React',
    Icon: Icon.ReactIcon
  },
  {
    name: 'Vue',
    Icon: Icon.VueIcon
  },
  {
    name: 'Svelte',
    Icon: Icon.SvelteIcon
  },
  {
    name: 'TailwindCSS',
    Icon: Icon.TailwindCSSIcon
  },
  {
    name: 'Next.js',
    Icon: Icon.NextJsIcon
  },
  {
    name: 'Node.js',
    Icon: Icon.NodeJsIcon
  },
  {
    name: 'Firebase',
    Icon: Icon.FirebaseIcon
  },
  {
    name: 'Git',
    Icon: Icon.GitIcon
  }
]

export function Skills () {
  const [skills, setSkills] = useState(() => allSkills.slice(0, 12))

  const handleShow = () => {
    setSkills(allSkills)
  }

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {
          skills.map(({ name, Icon }) => (
            <div key={name} className="px-2 bg-slate-200 dark:bg-gray-800 py-6 text-center border border-dotted border-slate-400 dark:border-gray-600 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4">
                <Icon />
              </div>
              <p className="text-sm font-semibold">
                {name}
              </p>
            </div>
          ))
        }
      </div>
      <div className="text-lg font-semibold text-slate-400 text-center my-8">
        {
          skills.length < allSkills.length && (
            <Button onClick={handleShow}>
              Y muchos mas
            </Button>
          )
        }
      </div>
    </>
  )
}
