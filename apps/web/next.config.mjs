/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['www.localhost'],
  transpilePackages: ["@workspace/ui"],
}

export default nextConfig
