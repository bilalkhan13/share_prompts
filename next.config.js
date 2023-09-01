/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    webpack(config, {webpack}){
        config.experiments = {
            topLevelAwait: true,
            layers: true,
        }

        return config
    }
}

module.exports = nextConfig
