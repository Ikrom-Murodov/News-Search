const WebpackMerge = require("webpack-merge");
const WebpackConfigBase = require("./webpack.config.base");

const WebpackConfigDev = WebpackMerge(WebpackConfigBase, {
  mode: "development",
  devServer: {
    port: 8081,
    contentBase: `${WebpackConfigBase.externals.paths.public}`,
    open: true,
    overlay: true
  }
});

module.exports = WebpackConfigDev;
