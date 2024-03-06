/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/cookly-presale.github.io",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cookly.co.uk',
                port: '',
                pathname: '**',
            },
        ]
    },
    distDir: 'docs',
};

module.exports = nextConfig;