const NextFederationPlugin = require('@module-federation/nextjs-mf');
module.exports = {
    webpack(config, options) {
        const { isServer } = options;
        config.plugins.push(
            new NextFederationPlugin({
                name: 'next1',
                remotes: {
                    RemoteNextApp: 'remote@http://localhost:8081/_next/static/chunks/remoteEntry.js',
                    Weather: "remote_app_cra@http://localhost:3001/remoteEntry.js",
                },
                filename:"remoteEntry.js",
            })
        );

        return config;
    },
};