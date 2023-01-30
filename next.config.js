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
  async redirects() {
    return [
      {
        source: '/auth/kakao',
        destination: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
          process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig