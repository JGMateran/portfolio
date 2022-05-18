import type {
  ReactNode
} from 'react'

import clsx from 'clsx'

type ContainerProps = {
  children: ReactNode,
  className?: string,
  size?: 'small' | 'medium' | 'large',
  gap?: boolean,
  centered?: boolean
}

export function Container ({
  children,
  className = '',
  size = 'medium',
  gap = true,
  centered = true
}: ContainerProps) {
  const classes = clsx(
    'w-full',
    {
      'max-w-2xl': size === 'small',
      'max-w-4xl': size === 'medium',
      'max-w-6xl': size === 'large',
      'px-6': gap,
      'mx-auto ': centered
    },
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
