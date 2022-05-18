import {
  useState,
  useEffect
} from 'react'

export function usePrefersColorScheme () {
  const [prefersColor, setPrefersColor] = useState<'light' | 'dark'>('light')

  useEffect(
    () => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      const handler = () => {
        setPrefersColor(mediaQuery.matches ? 'dark' : 'light')
      }

      mediaQuery.addEventListener('change', handler)

      return () => {
        mediaQuery.removeEventListener('change', handler)
      }
    },
    []
  )

  return prefersColor
}
