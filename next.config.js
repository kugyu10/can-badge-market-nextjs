/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
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
}

module.exports = nextConfig
