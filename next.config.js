/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://13.235.173.222:3000/api/:path*', // Replace with your backend URL
          },
        ]
      },
}

module.exports = nextConfig
