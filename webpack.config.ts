import * as path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const devServer: DevServerConfiguration = {
  static: "./dist",
};

const config: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/scripts/index.ts",
    ship: "./src/scripts/ship.ts",
    gameboard: "./src/scripts/gameboard.ts",
    cell: "./src/scripts/cell.ts",
    player: "./src/scripts/player.ts",
    aiPlayer: "./src/scripts/aiPlayer.ts",
    initDisplay: "./src/scripts/initDisplay.ts",
    domManipulator: "./src/scripts/domManipulator.ts",
    pubsub: "./src/scripts/pubsub.ts",
    gameDisplay: "./src/scripts/gameDisplay.ts",
    gameLoop: "./src/scripts/gameLoop.ts",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/i,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|jpeg|gif|)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.json$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp3|ogg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/assets/images/favicon.ico",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer,
};

export default config;
