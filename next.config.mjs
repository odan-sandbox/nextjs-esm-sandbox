/** @type import('webpack').Configuration */
const webpackConfig = {
  module: {
    rules: [{ test: "@nivo/core", resolve: { conditionNames: ["import"] } }],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // config.module.rules.push({
    //   test: /@nivo\/core/,
    //   resolve: { alias: "node_modules/@nivo/core/dist/nivo-core.es.js" },
    // });

    return config;
  },
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: [
    "@nivo/core",
    "@nivo/tooltip"
  ],
};

export default nextConfig;
