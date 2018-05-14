require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'アメイジングチェッカー - アメチェク！',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'アメチェク！' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios'
  ],
  plugins: [
    { src: '~plugins/element-ui', ssr: true },
    { src: '~plugins/axios', ssr: false }
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/style.scss'
  ],
  axios: {
    baseURL: process.env.API_URL || '',
    credentials: false,
    https: false
  }
}
