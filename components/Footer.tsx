import {
  Linkedin,
  GitHub,
  Twitter
} from 'react-feather'

import { DarkmodeButton } from '@/components/DarkmodeButton'

export function Footer () {
  return (
    <div className="flex items-center mt-14 pb-14 text-white">
      <div className="flex items-center">
        <span className="mr-4 text-sm uppercase text-gray-200 font-bold">
          Follow me on
        </span>
        <div className="flex items-center space-x-3">
          <a href="#">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#">
            <GitHub className="w-5 h-5" />
          </a>
          <a href="#">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="flex-1"></div>
      <div>
        <DarkmodeButton />
      </div>
    </div>
  )
}
