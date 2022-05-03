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
  const [value, setValue] = useState<string>(defaultValue)

  return [value, setValue]
}
