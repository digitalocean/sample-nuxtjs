const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  serverMiddleware: ['~/api/index.js'],
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: process.env.BROWSER_BASE_URL, // Used as fallback if no runtime config is provided
    proxyHeaders: true,
    credentials: true,
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL,
  //   },
  // },
  // proxy: {
  //   '/api': {
  //     target: 'https://nalatenschap-do-hfuai.ondigitalocean.app',
  //     pathRewrite: {
  //       '^/api': '/',
  //     },
  //   },
  // },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
      // Need this to make fs work (for the webdav things)
      config.node = {
        fs: 'empty',
        // 'fs-extra': 'empty'
      };
    },
  },
};
