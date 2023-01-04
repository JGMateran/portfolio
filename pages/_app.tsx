import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { DefaultSeo } from 'next-seo'

import '../styles/globals.css'

import Router from 'next/router'

import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from '@next/font/google'

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

import clsx from 'clsx'

const inter = Inter({
  variable: '--font-inter'
})

function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(
    () => {
      const handleRouteStart = () => {
        NProgress.start()
      }

      const handleRouteDone = () => {
        NProgress.done()
      }

      Router.events.on('routeChangeStart', handleRouteStart)
      Router.events.on('routeChangeComplete', handleRouteDone)
      Router.events.on('routeChangeError', handleRouteDone)

      return () => {
        Router.events.off('routeChangeStart', handleRouteStart)
        Router.events.off('routeChangeComplete', handleRouteDone)
        Router.events.off('routeChangeError', handleRouteDone)
      }
    },
    []
  )
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableColorScheme={false}>
      <main className={clsx(inter.variable, 'font-inter')}>
        <DefaultSeo
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.svg'
            }
          ]}
        />
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
