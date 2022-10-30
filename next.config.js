const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  i18n,
  images: {
    domains: ['storage.googleapis.com'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
