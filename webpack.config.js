const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
   mode: 'development',
   entry: {
    'bundle.min.css': [
      './css/menu.scss',
      './css/nav.scss',
      './css/list.css',
    ],
    'bundle.js': [
      './js/main.js',
      './js/base.js',
    ]
  },
  output: {
    filename: '[name]',
    path: '/Applications/MAMP/htdocs/webpack/dist',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
	      test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
