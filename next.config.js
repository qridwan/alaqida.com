/** @type {import('next').NextConfig} */
const nextConfig = {
  //   i18n: {
  //     locales: ['en', 'bn'],
  //     defaultLocale: 'en',
  //   },
  output: 'export',
  distDir: 'docs',
  trailingSlash: true,
  async redirects() {
    return [
      // redirect if hit the root
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
