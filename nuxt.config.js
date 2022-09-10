export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }, ...i18nHead.link],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/i18n-directives'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/router',
    'nuxt-webpack-optimisations',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  serverMiddleware: ['~/server-middleware/router'],

  routerModule: {
    keepDefaultRouter: true,
    fileName: 'index.js',
    path: './router',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  i18n: {
    strategy: 'prefix',
    detectBrowserLanguage: false,
    locales: [
      {
        code: 'it',
        iso: 'it-IT',
        name: 'Italiano',
        file: 'it.js',
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr.js',
      },
      {
        code: 'en',
        iso: 'en-EN',
        name: 'English',
        file: 'en.js',
      },
    ],
    defaultLocale: null,
    langDir: 'locales/',
    lazy: true,
    parsePages: false, // Disable babel parsing

    // here we rename the routes
    pages: {
      'site/faq': {
        fr: '/site/faq-fr',
        it: '/site/faq-it',
        en: '/site/faq-en',
      },
    },
  },

  webpackOptimisations: {
    features: {
      postcssNoPolyfills: true,
      esbuildLoader: true,
      esbuildMinifier: true,
      imageFileLoader: true,
      webpackOptimisations: true,
      cacheLoader: true,
      hardSourcePlugin: false,
      parallelPlugin: process.env.NODE_ENV === 'development',
      debug: process.env.NODE_ENV === 'development',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: '0.0.0.0',
  },
}
