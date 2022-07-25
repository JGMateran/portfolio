import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="es">
        <Head>
          <link rel="icon" href="/images/favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />

          <script async defer data-website-id="fc50a674-0289-4fec-8873-ce79dfca03fa" src="https://umami-qa34psfio-reburn.vercel.app/umami.js"></script>
        </Head>

        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
