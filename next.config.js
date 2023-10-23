/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
