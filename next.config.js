/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
  },
  async headers() {
    return [
      {
        source: ".js|.css|.woff|.jpg|.png|.gif|.ttf",
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
