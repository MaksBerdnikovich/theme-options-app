module.exports = {
  publicPath: 'inc/theme-options/dist',

  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/svg',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.svg$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
          extract: true,
          spriteFilename: 'img/svg-pack.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
          plainSprite: true
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
};
