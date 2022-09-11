/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // styled-componentsの有効化
  styledComponents: true,

  swcMinify: true,

  compiler: (() => {
    let compilerConfig = {}

    //本番環境ではdata-testidプロパティは削除
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$'] },
      }
    }
    return compilerConfig
  })(),

  async rewrites() {
    return [
      {
        // ex. /api/proxy
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        // ex. http://localhost:8000
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ]
  },
}

module.exports = nextConfig
