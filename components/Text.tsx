import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type TextProps = ComponentPropsWithoutRef<'p'>

export function Text ({
  className,
  ...props
}: TextProps) {
  const classes = clsx(
    'text-gray-600 dark:text-gray-100',
    className
  )

  return (
    <p
      className={classes}
      {...props}
    />
  )
}
