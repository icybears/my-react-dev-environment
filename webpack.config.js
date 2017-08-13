const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {
    historyApiFallback: true 
  },
 plugins:[
     new HtmlWebpackPlugin({
         template: './app/index.html'
     })
 ]
};

//the HtmlWebpackPlugin we installed and added as a plugin will take our index.html,
//and create a new index.html inside the dist folder based on that original one,
//and automatically add a script tag to it referencing our index_bundle.js.

