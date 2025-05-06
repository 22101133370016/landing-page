// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      config.infrastructureLogging = { level: 'verbose' };
      return config;
    },
  };
  
  module.exports = nextConfig;
  