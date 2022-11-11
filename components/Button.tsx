import {
  ComponentPropsWithoutRef,
  ElementType
} from 'react'

import clsx from 'clsx'

type ButtonProps <T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T,
  variant?: 'normal' | 'outlined',
}

export function Button <T extends ElementType> (
  props: ButtonProps<T>
) {
  const {
    as: Component = 'button',
    variant = 'normal',
    className,
    ...rest
  } = props

  const classes = clsx(
    {
      'hover:cursor-pointer leading-none py-3 px-4 rounded-md inline-block bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20 text-sm active:scale-95': variant === 'normal',
      'border-2 border-black dark:border-white font-semibold leading-none py-3 px-4 rounded-md text-sm active:scale-95 focus:outline-none focus-visible:bg-white/5 hover:bg-white/5': variant === 'outlined'
    },
    className
  )

  return (
    <Component
      className={classes}
      {...rest}
    />
  )
}
