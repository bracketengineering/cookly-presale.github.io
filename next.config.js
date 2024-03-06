/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/cookly-presale.github.io",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        domains: ['cookly.co.uk'],
    },
    distDir: 'docs',
};

module.exports = nextConfig;