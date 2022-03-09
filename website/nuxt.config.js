export default {
  target: 'static',
  generate: {
    dir: '../public_html/',
    devtools: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en,ko-kr',
    },
    titleTemplate: '%s | Coding-Insight',
    title: 'Coding-Insight',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        http_equiv: 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'theme-color',
        content: '#20232a',
      },
      {
        name: 'keywords',
        content: [
          'python',
          'c',
          'c++',
          '파이썬',
          'programming',
          '프로그래밍',
          'coding',
          'coding-insight',
          'python-factory',
        ],
      },
      {
        hid: 'Coding-Insight',
        name: 'description',
        content:
          'Learn programming through learning, practicing, and building. Our site includes full courses of python, c, c++, and rust for free in both Korean and English language.',
      },
      {
        name: 'author',
        content: ['Hyunseung', 'Juha', 'Gun'],
      },
      {
        name: 'copyright',
        content: 'Coding-Insight',
      },
      {
        name: 'subtitle',
        content: 'Learning Programming, Coding, Ethical Hacking',
      },
      {
        name: 'subject',
        content: 'Programming, Coding, Ethical Hacking',
      },
      {
        name: 'language',
        content: 'ES, KO-KR',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon.ico',
      },
    ],
  },

  css: [
    './assets/css/global.css',
    './assets/css/transition.css',
    './assets/css/media.css',
  ],

  // https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // https://go.nuxtjs.dev/config-components
  components: true,

  components: {
    dirs: [
      '~/components/local/',
      '~/components/global/',
      '~/components/content/',
    ],
  },

  // https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/vuetify'],

  vue: {
    config: {
      devtools: true,
      performance: true,
      productionTip: true,
    },
  },

  // https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  sitemap: {
    hostname: 'https://www.coding-insight.com',
    gzip: true,
    exclude: ['/.nuxt', '/404', '/500'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://www.coding-insight.com/sitemap.xml',
    },
    {
      userAgent: 'Googlebot-image',
      Disallow: '/',
    },
  ],

  // https://go.nuxtjs.dev/config-axios
  axios: {
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  loading: {
    color: 'skyblue',
    failedColor: 'red',
    height: '5px',
    continuous: true,
    throttle: 50,
    css: false,
  },
  loadingIndicator: {
    name: 'pulse',
    color: 'white',
    background: 'black',
  },

  //  https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Coding-Insight',
      short_name: 'Coding-Insight',
      version: '2022.02',
      description:
        'Learn programming through learning, practicing, and building. Our site includes full courses of python, c, c++, and rust for free in both Korean and English language.',
      dir: 'rtl',
      id: '/index.html',
      author: ['Hyunseung', 'Juha', 'Gun'],
      categories: [
        'python',
        'c',
        'c++',
        'rust',
        'programming',
        'coding-insight',
        'python-factory',
      ],
      theme_color: '#20232a',
      background_color: '#20232a',
      display: 'minimal-ui',
      scope: './',
      start_url: '/',
      prefer_related_applications: false,
      related_applications: [
        {
          platform: 'webapp',
          url: 'https://www.coding-insight.com',
          id: 'com.Coding-Insight.app',
        },
      ],
      orientation: 'portrait',
      icons: [
        {
          src: '/pwa/256x256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      screenshots: [
        {
          src: '/pwa/screenshot-home.png',
          sizes: '1280x800',
          type: 'image/png',
        },
        {
          src: '/pwa/screenshot-mobile-home.png',
          sizes: '750x1334',
          type: 'image/png',
        },
      ],
      shortcuts: [
        {
          name: '파이썬',
          url: '/korean/python',
          description: '파이썬 프로그래밍 언어 배우기',
        },
        {
          name: 'Python',
          url: '/english/python',
          description: 'Learn Python Programming Language',
        },
        {
          name: 'C/C++',
          url: '/korean/c-cpp',
          description: 'Learn C/C++ Programming Language',
        },
        {
          name: 'Rust',
          url: '/korean/rust',
          description: 'Rust 프로그래밍 언어 배우기',
        },
      ],
    },
  },

  router: {
    base: '/',
  },

  vuetify: {
    theme: {
      dark: true,
    },
    icons: {
      iconfont: 'mdi',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devtools: true,
    optmizeCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    html: {
      minify: {
        collapseWhitespace: false,
        removeComments: true,
      },
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.performance = {
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        };
      }
    },
  },
};
