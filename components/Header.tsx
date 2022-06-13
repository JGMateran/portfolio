import type { ReactNode } from 'react'

import { Navbar } from '@/components/Navbar'

export function Header ({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />

      <div className="pb-14 py-4">
        <div className="h-14 bg-slate-200 dark:bg-gray-800 sticky top-0 z-10"></div>
        <div>
          {children}
        </div>
      </div>

      <div className="h-14 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 sticky top-0 z-10"></div>
    </>
  )
}
