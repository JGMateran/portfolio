/** @type {import('next').NextConfig} */

const {
  withContentlayer
} = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: false,
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
})
