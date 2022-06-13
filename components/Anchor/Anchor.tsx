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
    'focus:outline-none focus-visible:ring-2 hover:cursor-pointer text-black dark:text-gray-100',
    style.anchor,
    className
  )

  return (
    <Link href={href}>
      <a
        className={classes}
        {...props}
      />
    </Link>
  )
}
