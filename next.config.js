/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'images.unsplash.com'],
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
  },
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: [],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
