import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000',
  },
  output: 'export',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Helia's browser defaults import this optional service. The real
      // implementation pulls in Node's `node:stream` and undici.
      '@libp2p/http$': path.resolve(process.cwd(), 'app/libp2p-http-browser.js'),
    };
    return config;
  },
};

export default nextConfig;
