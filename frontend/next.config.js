require('dotenv').config();

const webpack = require('webpack');

module.exports = (phase, { defaultConfig }) => {
    return Object.assign(
      {},
      defaultConfig,
      {
        webpack: (config, { dev }) => {
          const { isServer } = config;
          if (dev) {
            config.module.rules.push({
              test: /\.(ts|tsx)$/,
              loader: 'eslint-loader',
              exclude: ['/node_modules/', '/.next/', '/out/'],
              enforce: 'pre',
              options: {
                emitWarning: true,
                fix: true,
              },
            });
          }
          return config;
        },
      },
      {
      }
    )
};
