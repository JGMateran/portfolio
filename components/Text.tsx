import type { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

type TextProps = ComponentPropsWithoutRef<'p'>

export function Text ({
  className,
  ...props
}: TextProps) {
  const classes = clsx(
    'text-slate-300',
    className
  )

  return (
    <p
      className={classes}
      {...props}
    />
  )
}
