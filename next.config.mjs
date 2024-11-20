/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  experimental: {
    turbo: {
      resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json',],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'backend-server.nextechlify.xyz',
      },
    ],
    domains: ['localhost', 'backend-server.nextechlify.xyz'],
  },
};

export default nextConfig;
