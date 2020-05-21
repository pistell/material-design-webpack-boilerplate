const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    inline: true,
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader?sourceMap=true',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // https://stackoverflow.com/questions/60641532/how-to-import-material-theme-and-material-textfield-style-to-create-own-theme
                // mdc-web doesn't use sass-loader's normal syntax for imports
                // across modules, so we add all module directories containing
                // mdc-web components to the Sass include path
                // https://github.com/material-components/material-components-web/issues/351
                includePaths: glob.sync(
                  Path.join(__dirname, '**/node_modules/@material'),
                ).map((dir) => Path.dirname(dir)),
              },
              implementation: require('sass'),
              webpackImporter: false,
            },
          }],
      },
    ],
  },
});
