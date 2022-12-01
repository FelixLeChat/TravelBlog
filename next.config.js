const withPlugins = require('next-compose-plugins');
const withOffline = require('next-offline');
const optimizedImages = require('next-optimized-images');
const withLess = require("next-with-less");
const { i18n } = require('./next-i18next.config');

const plugins = [
  withOffline,
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      optimizeImagesInDev: false,
      optimizeImages: true,
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'ico', 'gif'],
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      webp: {
        quality: 80,
        alphaQuality: 80,
        method: 5,
      },
      responsive: {
        adapter: require('responsive-loader/sharp'),
        sizes: [300, 600, 1200, 2000],
        placeholder: true,
        placeholderSize: 50,
      },
    },
  ],
  [withLess, {
    lessLoaderOptions: {
    }
  }]
];

// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const config = {
  i18n,
  publicRuntimeConfig: {
    domain: process.env.DOMAIN_NAME,
    appName: process.env.APP_NAME,
    // Tracking
    googleAnalyticsTrackingCode: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
    // Password protection
    hasPasswordProtection: !!process.env.PASSWORD_PROTECTION,
  },
  images: {
    disableStaticImages: true,
  },
};

// eslint-disable-next-line import/no-commonjs
module.exports = withPlugins(plugins, config);
