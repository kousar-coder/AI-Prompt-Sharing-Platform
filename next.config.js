/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Removed serverExternalPackages to avoid the error
  },
  images: {
    domains: ['lh3.googleusercontent.com'], // Keep this if you're using images from Google
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true, // Enables top-level await in webpack
    }
    return config;
  },
};

module.exports = nextConfig;
