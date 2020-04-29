const path = require('path')

module.exports = {
  css: {
    loaderOptions:
      {
      postcss: 
      {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/'),
        "Style": path.resolve(__dirname, 'src/assets/scss/'),
      }
    }
  }
}