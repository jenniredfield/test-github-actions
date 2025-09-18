import type { NextConfig } from "next";

 const repo = 'test-github-actions'; // <-- exact repo name

const isProd = process.env.NODE_ENV === 'production';


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',                 // generate ./out
  images: { unoptimized: true },    // needed for static export
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  trailingSlash: true,              // optional but helps with static hosting
};

export default nextConfig;
