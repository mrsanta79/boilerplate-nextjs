module.exports = {
  output: 'standalone',
  compress: true,
  pageExtensions: ['js', 'ts', 'jsx', 'tsx'],
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  }
}
