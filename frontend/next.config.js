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
        env: {
            NODE_ENV: process.env.NODE_ENV,
            CMS_GRAPHQL_ENDPOINT: process.env.CMS_GRAPHQL_ENDPOINT,
            NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT,
            NEXT_PUBLIC_THEME: process.env.NEXT_PUBLIC_THEME,
        },
      },
      {
      }
    )
};
