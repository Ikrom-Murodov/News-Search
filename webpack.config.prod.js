const WebpackMerge = require("webpack-merge");
const WebpackConfigBase = require("./webpack.config.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const WebpackConfigProd = WebpackMerge(WebpackConfigBase, {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: `${WebpackConfigBase.externals.paths.src}/index.html`,
      filename: "index.html",
      base: false,
      inject: false,
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),
    new CleanWebpackPlugin()
  ]
});

module.exports = WebpackConfigProd;
