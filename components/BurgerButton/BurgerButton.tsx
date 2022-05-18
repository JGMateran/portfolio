import type { ComponentPropsWithoutRef } from 'react'

import style from './BurgerButton.module.css'

import clsx from 'clsx'

type BurgerButtonProps = ComponentPropsWithoutRef<'button'> & {
  open: boolean
}

export function BurgerButton ({
  open,
  ...props
}: BurgerButtonProps) {
  return (
    <button
      className="w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 flex items-center justify-center hover:cursor-pointer"
      {...props}
    >
      <span
        className={clsx(
          style.line,
          {
            [style.open]: open
          }
        )}
      />
    </button>
  )
}