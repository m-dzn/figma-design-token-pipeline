"use strict";

const { merge } = require("webpack-merge");

const common = require("./webpack-plugins/webpack.common");
const devConfig = require("./webpack-plugins/webpack.dev");
const prodConfig = require("./webpack-plugins/webpack.prod");

module.exports = (env, argv) => {
  // Define environment flag
  const isDevelopment = argv.mode === "development";

  // Merge Webpack configs
  const config = isDevelopment ? devConfig : prodConfig;
  return merge(common, config);
};
