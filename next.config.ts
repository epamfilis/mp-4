import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.artsearch.io",
                port: "",
                pathname: "/artworks/**",
            },
        ],
    },
};

export default nextConfig;
