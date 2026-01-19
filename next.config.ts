import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL('https://avatars.githubusercontent.com/u/*'),
            new URL('https://azukashiic.sirv.com/assets/portfolio/projects/*.png?format=original&q=100'),
            new URL('https://azukashiic.sirv.com/assets/portfolio/devices/**/*.png?format=original&q=100'),
        ],
    },
};

export default nextConfig;
