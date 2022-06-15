import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import Script from 'next/script'

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
        </Head>

        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
