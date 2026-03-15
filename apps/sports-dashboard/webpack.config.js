const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{
      test: /\.(ts|tsx|js)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:8000'),
    }),
    new ModuleFederationPlugin({
      name: 'sports',
      filename: 'remoteEntry.js',
      exposes: {
        './SportsDashboard': './src/SportsDashboard',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
