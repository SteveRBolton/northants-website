
// if (process.env.NODE_ENV === 'development') {
//     // Only load from .env files in development mode?
//     const Dotenv = require("dotenv-webpack");
// }

module.exports = {
    distDir: 'build',
    webpack: (config, { dev }) => {
        // Config
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
};