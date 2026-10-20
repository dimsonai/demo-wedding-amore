import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Игнорируем ошибки типов при сборке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорируем ошибки линтера при сборке
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
