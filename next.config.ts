import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static HTML export

  images: {
    // This is the CRITICAL line that resolves the error with 'output: "export"'
    unoptimized: true,

    // You can keep your external domains list
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
