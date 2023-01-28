/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/auth/kakao',
        destination: `https://kauth.kakao.com/oauth/authorize?client_id=${
          process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`
      },
    ]
  },
}

module.exports = nextConfig
