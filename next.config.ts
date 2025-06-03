import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL('https://avatars.githubusercontent.com/u/*')],
    },
};

export default nextConfig;
