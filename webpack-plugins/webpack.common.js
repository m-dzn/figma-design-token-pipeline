const webpack = require("webpack");
const path = require("path");
const HtmlWebpackInlineSourcePlugin = require("@effortlessmotion/html-webpack-inline-source-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const paths = require("./paths.js");

module.exports = {
  entry: {
    ui: paths.uiIndex,
    plugin: paths.pluginIndex,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        loader: "url-loader",
      },
      {
        test: /.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },

  output: {
    filename: "[name].js",
    path: paths.appBuild,
    publicPath: "/",
  },

  optimization: {
    usedExports: true,
    concatenateModules: true,
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.uiHtml,
      filename: "ui.html",
      inlineSource: ".(js)$",
      chunks: ["ui"],
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
};
