/* eslint-disable no-undef */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const svgToMiniDataURI = require("mini-svg-data-uri");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[path][name].[ext]",
                limit: 8192,
              },
            }, 'img-loader'
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                generator: (content) => svgToMiniDataURI(content.toString()),
              },
            },
          ],
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
        },
      ],
    },
    devServer: {
      stats: "errors-warnings",
      open: true,
      port: 3000,
    },
    devtool: "eval-source-map",
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new FriendlyErrorsWebpackPlugin(),
      new OptimizeCssAssetsPlugin(),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    ],
  };
};
