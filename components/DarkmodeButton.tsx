import {
  useCallback
} from 'react'

import {
  Sun,
  Moon
} from 'react-feather'

import { Switch } from '@/components/Switch'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export function DarkmodeButton () {
  const [darkmode, setDarkmode] = useLocalStorage('theme', 'dark')

  const handleClick = useCallback(() => {
    const nextValue = darkmode === 'dark' ? 'light' : 'dark'

    setDarkmode(nextValue)
    document.documentElement.setAttribute('class', nextValue)
  }, [setDarkmode, darkmode])

  return (
    <div className="flex items-center space-x-4">
      <Sun />
      <Switch
        active={darkmode === 'dark'}
        onClick={handleClick}
      />
      <Moon />
    </div>
  )
}
