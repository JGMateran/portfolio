import type {
  ComponentPropsWithoutRef,
  ElementType
} from 'react'

import clsx from 'clsx'

type InputProps <T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T,
  variant?: 'normal' | 'outline',
  label?: string
}

export function Input <T extends ElementType> (
  props: InputProps<T>
) {
  const {
    as: Component = 'input',
    className,
    variant = 'normal',
    label,
    ...rest
  } = props

  const classes = clsx(
    {
      'p-3 border-2 border-gray-600 rounded-lg bg-gray-800 focus:outline-none focus-visible:border-gray-500': variant === 'normal',
      'bg-transparent leading-7 p-3 border border-slate-700 rounded-md': variant === 'outline'
    },
    className
  )

  return (
    <label className="block flex flex-col my-8">
      {
        label && (
          <span className="block text-sm font-semibold mb-2">
            {label}
          </span>
        )
      }
      <Component
        className={classes}
        {...rest}
      />
    </label>
  )
}
