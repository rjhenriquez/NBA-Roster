/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ak-static.cms.nba.com", "cdn.nba.com"],
  },
};

module.exports = nextConfig;
