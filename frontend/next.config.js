const Dotenv = require("dotenv-webpack");
const webpack = require('webpack');

module.exports = {
    webpack: (config, { dev }) => {
        // Add the new plugin to the existing webpack plugins
        config.plugins.push(new Dotenv({ silent: true }));

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
    // Have to list all the environment variables used here to make it available
    // to the client code
    env: {
        CMS_GRAPHQL_ENDPOINT: process.env.CMS_GRAPHQL_ENDPOINT,
        NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT: process.env.NEXT_PUBLIC_FEDERATED_GRAPHQL_ENDPOINT,
        NEXT_PUBLIC_THEME: process.env.NEXT_PUBLIC_THEME,
    },
};