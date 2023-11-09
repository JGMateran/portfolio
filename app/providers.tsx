'use client'

import { type ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'

export function Providers ({
  children
}: {
  children: ReactNode

}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableColorScheme={false}
    >
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
