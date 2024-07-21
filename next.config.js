/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
