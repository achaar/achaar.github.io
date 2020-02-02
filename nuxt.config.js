const { join, resolve } = require('path')

module.exports = {
  head: {
    title: 'Ankur Kunder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am currently working at SRI-Delhi as a Software Engineer. I have a B.Tech in ECE with a Minor in CSE. I am also a machine learning enthusiast and currently learning about topics such as YOLO and GANs. In leisure time, I like to read books on Economics, watch TV shows, sketch, and play Basketball.' }
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
