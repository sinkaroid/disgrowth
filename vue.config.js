const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: isProd ? [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: { drop_console: true },
            output: { comments: false, beautify: false }
          }
        })
      ] : []
    }
  }
};
