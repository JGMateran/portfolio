import {
  useState,
  useEffect
} from 'react'

import type {
  Dispatch,
  SetStateAction
} from 'react'

type UseState <T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function useLocalStorage (
  key: string,
  defaultValue: string
): UseState<string> {
  const [value, setValue] = useState(defaultValue)

  useEffect(
    () => {
      const storageValue = localStorage.getItem(key)

      if (storageValue) {
        setValue(storageValue)
      } else {
        localStorage.setItem(key, value)
      }
    },
    []
  )

  useEffect(
    () => {
      localStorage.setItem(key, value)
    },
    [value]
  )

  return [value, setValue]
}
