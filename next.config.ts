import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Игнорировать ошибки типов при сборке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорировать ошибки линтера при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
