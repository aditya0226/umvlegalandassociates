/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.umvlegal.com',
        port: '5000',
        pathname: '/carousel-images/**',
      },
    ],
  },
};

export default nextConfig;
