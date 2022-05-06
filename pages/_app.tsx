import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import '../styles/globals.css'

import Router from 'next/router'

import 'nprogress/nprogress.css'
import NProgress from 'nprogress'

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
    <Component {...pageProps} />
  )
}

export default MyApp
