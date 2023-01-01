import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <Html lang="en">
        <Head>
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
