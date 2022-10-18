const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: [
      'vuetify'
    ],

    configureWebpack: {
        output: {
            libraryTarget: "system",
        },
    },

    pluginOptions: {
      i18n: {
        locale: 'es',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true,
        includeLocales: false,
        enableBridge: true
      }
    }
});
