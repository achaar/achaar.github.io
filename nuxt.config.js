const { join, resolve } = require('path')
const { description } = require('./package.json')

module.exports = {
  head: {
    title: 'Ankur Kunder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description }
    ]
  },

  router: {
    mode: 'history'
  },

  loading: {
    color: 'white'
  },

  modules: [
    '@nuxtjs/axios',
    { src: '@nuxtjs/blog', options: {
      static: true,
      base: 'https://achaar.github.io',
      markdown: {
        plugins: [require('markdown-it-katex'), require('markdown-it-attrs')]
      }
    } }
  ],

  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: /@nuxtjs/,
        query: { presets: ['vue-app'], babelrc: false }
      })
    }
  }
}
