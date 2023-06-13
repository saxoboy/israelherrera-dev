// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  //debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  localePath: path.resolve('./public/locales'),
  react: { useSuspense: false },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
