/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/image/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
