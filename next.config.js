/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js']
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(nextConfig)
