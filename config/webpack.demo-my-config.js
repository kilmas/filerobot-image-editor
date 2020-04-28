const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "../examples/mydemo/src/index.html"),
  filename: "./index.html",
  inject: true,
});

const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, options) => {
  return {
    entry: path.join(__dirname, "../examples/mydemo/src/index.js"),
    output: {
      path: path.join(__dirname, "../examples/mydemo/dist"),
      // filename: "filerobot-image-editor.[chunkhash].js",
      // chunkFilename: "filerobot-image-editor.[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /(node_modules|bower_components)\/(?!pretty-bytes\/).*/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      htmlWebpackPlugin,
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {},
            mangle: false, // Note `mangle.properties` is `false` by default.
            module: false,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_classnames: undefined,
            keep_fnames: false,
            safari10: false,
          },
        }),
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    devtool: options.mode === "production" ? "none" : "sourcemap",
    devServer: {
      host: '0.0.0.0',
      port: 3003,
    },
  };
};
