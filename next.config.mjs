import NextFederationPlugin from "@module-federation/nextjs-mf";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      hotels: `hotels@http://localhost:3001/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
      flights: `flights@http://localhost:3002/_next/static/${
        isServer ? "ssr" : "chunks"
      }/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "host",
      remotes: remotes,
      shared: {},
      filename: "static/chunks/remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
      },
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
      // new FederatedTypesPlugin({ federationConfig })
    );
    return config;
  },
};
export default nextConfig;
