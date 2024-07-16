const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  i18n,
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
