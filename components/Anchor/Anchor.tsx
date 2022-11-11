import type { ComponentPropsWithoutRef } from 'react'

import Link from 'next/link'

import style from './Anchor.module.css'

import clsx from 'clsx'

type AnchorProps = ComponentPropsWithoutRef<'a'>

export function Anchor ({
  className,
  href = '#',
  ...props
}: AnchorProps) {
  const classes = clsx(
    'hover:cursor-pointer text-black dark:text-white',
    style.anchor,
    className
  )

  return <Link href={href} className={classes} {...props} />
}
