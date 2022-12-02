// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  i18n: {
    // These are all the locales you want to support in your application
    locales: ['en'],
    // This is the default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
    localePath: path.resolve('./public/locales'),
    // Disable automatic locale detection (only provide locale information detected from either the locale based domain or locale path)
    localeDetection: false,
    lowerCaseLng: true,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
  trailingSlash: true,
};
