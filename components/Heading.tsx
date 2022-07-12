import type {
  ComponentPropsWithoutRef,
  ElementType
} from 'react'

import clsx from 'clsx'

type AsWithoutProps <T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T
}

type ValidHeadings = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps <T extends ValidHeadings> = AsWithoutProps<T> & {
  size?: 'small' | 'large' | 'big' | 'huge'
}

export function Heading <T extends ValidHeadings> (
  props: HeadingProps<T>
) {
  const {
    as: Component = 'h4',
    className,
    size = 'large',
    ...rest
  } = props

  const classes = clsx(
    'font-bold',
    {
      'text-xl': size === 'small',
      'text-2xl': size === 'large',
      'text-3xl': size === 'big',
      'text-4xl': size === 'huge'
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
