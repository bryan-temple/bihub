/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bihub.tech'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable production mode optimizations
      config.optimization.minimize = true;
    }
    
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;