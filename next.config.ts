import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

/* Disable ESLint on build for now */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
