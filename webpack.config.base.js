const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackCopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  public: path.resolve(__dirname, "public"),
  src: path.resolve(__dirname, "src")
};

const WebpackConfigBase = {
  entry: {
    main: `${PATHS.src}/js/index.js`
  },

  output: {
    path: PATHS.public,
    publicPath: "/",
    filename: "js/[name].min.js"
  },

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      base: false,
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].min.css"
    }),
    new WebpackCopyPlugin([
      {
        from: `${PATHS.src}/img`,
        to: `${PATHS.public}/img`
      },
      {
        from: `${PATHS.src}/fonts`,
        to: `${PATHS.public}/fonts`
      }
    ])
  ],

  resolve: {
    extensions: [".js", ".css", ".sass", ".scss"]
  },

  externals: {
    paths: PATHS
  }
};

module.exports = WebpackConfigBase;
