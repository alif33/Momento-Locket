/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: ["drive.google.com", "lh3.googleusercontent.com"],
    }
}

module.exports = nextConfig
