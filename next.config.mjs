/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  headers: async () => {
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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
          {
            key: 'Feature-Policy',
            value: 'geolocation none',
          },
        ],
      },
    ];
  }
  ,
  experimental: {
    optimizePackageImports: ["axios", "input-otp", "@tanstack/react-table", "nextjs-toploader",],
    staleTimes: {
      dynamic: 60,
      static: 180,
    },
  },


};

export default nextConfig;
