/** @type {import('next').NextConfig} */

const {
  withContentlayer
} = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: false,
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin']
        }
      }
    ]
  }
})
