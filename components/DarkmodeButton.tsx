import {
  useState,
  useEffect
} from 'react'

import {
  Sun,
  Moon
} from 'react-feather'

import { Switch } from '@/components/Switch'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export function DarkmodeButton () {
  const [darkmode, setDarkmode] = useLocalStorage('darkmode', 'light')

  const handleToggleDarkmode = () => {
    setDarkmode(darkmode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="flex items-center space-x-4">
      <span>
        {darkmode}
      </span>
      <Sun />
      <Switch
        active={false}
        onClick={handleToggleDarkmode}
      />
      <Moon />
    </div>
  )
}
