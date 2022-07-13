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

          <script async defer data-website-id="853d84ff-d935-4bec-85e7-2a02112e7db8" src="https://umami-rosy-theta.vercel.app/umami.js"></script>
        </Head>

        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
