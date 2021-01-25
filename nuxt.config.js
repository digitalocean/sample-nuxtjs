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

  // serverMiddleware: [
  //   // 'redirect-ssl',
  //   { path: '/api', handler: '~/api/index.js' },
  //   // { path: '/server-middleware', handler: '~/server-middleware/index.js' },
  // ],

  serverMiddleware: ['~/serverMiddleware/ok'],
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
    ['vue-scrollto/nuxt', { duration: 300 }],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
  ],
  /*
   ** Axios module configuration
   */

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: 'https://nalatenschap-do-hfuai.ondigitalocean.app',
    // credentials: true,
    // proxy: false,
    // debug: true,
    // retry: {
    //   retries: 3,
    // },
    // requestInterceptor: (config, { store }) => {
    //   config.headers.common['Authorization'] = '';
    //   config.headers.common['Content-Type'] =
    //     'application/x-www-form-urlencoded;application/json';
    //   return config;
    // },
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL,
  //   },
  // },
  // proxy: {
  //   '/api/': 'https://nalatenschap-do-hfuai.ondigitalocean.app/api',
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
