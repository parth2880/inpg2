const params = require('./env');

const webpack = require("webpack");

let config = {};

/*
|--------------------------------------------------------------------------
| Site Version
|--------------------------------------------------------------------------
*/
let version = params.version;
config.publicRuntimeConfig = {
  version: params.version || 'NA' // can be accessed using $config.version or this.$config.version
}

/*
|--------------------------------------------------------------------------
| Global Parameters
|--------------------------------------------------------------------------
*/
config.env = {
  env: params.env,
  debug: params.debug,
  base_url: params.base_url,
  api_url: params.api_url,
  tokbox_api_key: params.tokbox_api_key,
  tokbox_api_secret: params.tokbox_api_secret,
};


/*
|--------------------------------------------------------------------------
| Nuxt Config
|--------------------------------------------------------------------------
*/
config.target = 'static';

config.head= {
  title: "WebReinvent's Meeting Software Developed by our team",
    htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { hid: 'robots', name: 'robots', content: 'noindex' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vaahcss@latest/css/vaahcss.min.css' },
  ],
  head: {
    /*script: [
      {
        src: "https://static.opentok.com/v2/js/opentok.min.js"
      }
    ]*/
  }
};

config.css= [
  "@/assets/themes/meet/build.scss",
  "@/assets/themes/meet/style.scss"
];

config.plugins= [
]

config.components= true;


config.buildModules= [
];

  // Modules: https://go.nuxtjs.dev/config-modules
config.modules= [
  'nuxt-buefy',
  '@nuxtjs/axios',
  '@nuxt/content'
];


config.axios= {
  baseURL: '/'
};

config.content= {};

config.build= {

  vendor: ["jquery"],

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ],

  extractCSS: true,
  /*
    filenames:{
      css: ({ isDev }) => isDev ? '[name].css?v='+version : 'css/[contenthash:7].css?v='+version,
    },*/

  extend(config, {}) {
    config.node = {
      fs: 'empty'
    }
  }
}

export default config;
