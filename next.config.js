const { i18n } = require('./next-i18next.config');
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  distDir: 'dist',
  trailingSlash: true,
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
};

module.exports = nextConfig;
