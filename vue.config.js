// addition starts here
const TerserPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";
// addition ends here

module.exports = {
  // addition ends here
  // and keep what was already here
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
