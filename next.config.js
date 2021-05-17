const withImages = require('next-images');
const withPWA = require('next-pwa');
const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');

module.exports = withImages(
  withPWA(
    {
      pwa: {
        dest: 'public',
      },
    },
    withSass(
      withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
      })
    )
  )
);
