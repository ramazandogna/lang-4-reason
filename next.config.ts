import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**'
      },
      {
        protocol: 'https',
        hostname: 'wp.pekafilli.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: ''
      }
    ]
  }
};

export default nextConfig;
