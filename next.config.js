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
    },
    images: {
        domains: ['lh3.googleusercontent.com'], // Add your domain here
      },
}

module.exports = nextConfig
