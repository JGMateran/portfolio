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
        <div className="h-14 bg-gray-800 sticky top-0 z-10"></div>
        <div>
          {children}
        </div>
      </div>

      <div className="h-14 bg-gray-900 sticky top-0 z-10"></div>
    </>
  )
}
