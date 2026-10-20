import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Мы убрали блок eslint, так как Netlify на него ругается
};

export default nextConfig;
