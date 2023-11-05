/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: "export",
  basePath: isProd ? "/sample-nextjs-blog" : "",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
