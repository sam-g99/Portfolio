export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Samuel Graham',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My web developer portfolio.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portlogo.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,700&display=swap',
      },
    ],
    script: [
      { src: '/three.r92.min.js' },
      { src: '/vanta.fog.min.js', body: true },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/locomotiveScroll.js',
      mode: 'client',
    },
    {
      src: '~/plugins/tooltip.js',
      ssr: false,
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],

  styleResources: {
    scss: ['assets/styles/main.scss'],
  },

  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
