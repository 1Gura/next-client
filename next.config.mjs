/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*",
      }
    ]
  }
};

export default nextConfig;
