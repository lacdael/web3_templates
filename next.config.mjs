import path from 'node:path';

// GitHub Pages serves this project from /web3_templates. Keep local
// development at the domain root unless a different prefix is supplied.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH
  ?? (process.env.NODE_ENV === 'production' ? '/web3_templates' : '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000',
    unoptimized: true,
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
