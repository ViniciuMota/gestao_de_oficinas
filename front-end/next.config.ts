import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.pexels.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
