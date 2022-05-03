import type { ReactNode } from 'react'

export function Header ({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="pb-14 py-4">
      <div className="h-14 bg-gray-800 sticky top-0 z-10"></div>
      <div>
        {children}
      </div>
    </div>
  )
}
