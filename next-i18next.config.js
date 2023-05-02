const path = require('path')

module.exports = {
  i18n: {
    //debug: process.env.NODE_ENV === 'development',
    http: process.env.NODE_ENV !== 'production',
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeDetection: false,
    localePath: path.resolve('./public/locales')
  },
}
