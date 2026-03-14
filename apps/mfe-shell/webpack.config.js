const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

const SPORTS_URL = process.env.SPORTS_URL || 'http://localhost:3001';

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
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        sports: `sports@${SPORTS_URL}/remoteEntry.js`,
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.2.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.2.0' },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
