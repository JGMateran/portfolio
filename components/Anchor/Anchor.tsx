import type { ComponentPropsWithoutRef } from 'react'

import style from './Anchor.module.css'

import clsx from 'clsx'

type AnchorProps = ComponentPropsWithoutRef<'a'>

export function Anchor ({
  className,
  ...props
}: AnchorProps) {
  const classes = clsx(
    'focus:outline-none focus-visible:ring-2 hover:cursor-pointer',
    style.anchor,
    className
  )

  return (
    <a
      className={classes}
      {...props}
    />
  )
}
