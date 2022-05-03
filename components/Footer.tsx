import {
  Heart,
  Coffee
} from 'react-feather'

import { DarkmodeButton } from '@/components/DarkmodeButton'

export function Footer () {
  return (
    <div className="flex items-center my-14 text-white">
      <div className="flex items-center">
        Make with <Heart className="mx-2" /> and a lot of <Coffee className="mx-2" />
      </div>
      <div className="flex-1"></div>
      <div>
        <DarkmodeButton />
      </div>
    </div>
  )
}
