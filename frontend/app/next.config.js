/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Işık hızında derleme
  images: {
    domains: ['api.binance.com'],
    unoptimized: true // Görsel yükünü azaltır
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // Küresel Edge Network yapılandırması
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' }, // Ekran koruması desteği
          { key: 'X-XSS-Protection', value: '1; mode=block' }
        ],
      },
    ];
  },
};

module.exports = nextConfig;