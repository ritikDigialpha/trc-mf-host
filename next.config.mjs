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
      filename: "static/chunks/remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header",
        "./Footer": "./src/components/Footer",
        "./hooks/useStore": "./src/hooks/useStore",
        "./hooks/useStoreSelector": "./src/hooks/useStoreSelector",
        "./providers/StoreProvider": "./src/providers/StoreProvider",
      },
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: deps.react,
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     requiredVersion: deps["react-dom"],
      //   },
      // },
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
      // new FederatedTypesPlugin({ federationConfig })
    );
    return config;
  },
};
export default nextConfig;
