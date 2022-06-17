/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // images from firbase
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

module.exports = nextConfig;
