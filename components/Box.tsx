import type { ReactNode } from 'react'

import clsx from 'clsx'

interface BoxProps {
  children: ReactNode
  className?: string
}

export function Box ({
  children,
  className = ''
}: BoxProps) {
  const classes = clsx(
    'dark:bg-gray-800 bg-slate-100 border border-dotted dark:border-gray-600 border-slate-400 rounded-md overflow-hidden',
    className
  )

  return (
    <div className={classes}>
      {children}
    </div>
  )
}
