import type {
  ReactNode
} from 'react'

import clsx from 'clsx'

type ContainerProps = {
  children: ReactNode,
  className?: string,
  size?: 'small' | 'medium' | 'large',
  gap?: boolean
}

export function Container ({
  children,
  className = '',
  size = 'medium',
  gap = true
}: ContainerProps) {
  const classes = clsx(
    'mx-auto w-full px-6',
    {
      'max-w-2xl': size === 'small',
      'max-w-4xl': size === 'medium',
      'max-w-6xl': size === 'large',
      'px-6': gap === true
    },
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
