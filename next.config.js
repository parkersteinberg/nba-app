/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'ak-static.cms.nba.com',
  //       port: '',
  //       pathname: '/wp-content/uploads/headshots/nba/latest/260x190/**',
  //     },
  //   ],
  // },
}

module.exports = nextConfig
