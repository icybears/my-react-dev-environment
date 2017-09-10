const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

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
// the following is only relevant for the build process
if(process.env.NODE_ENV === 'production'){
  config.plugins.push(
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
        new webpack.optimize.UglifyJsPlugin()
     )
}

module.exports = config;

//note:
//the HtmlWebpackPlugin we installed and added as a plugin will take our index.html,
//and create a new index.html inside the dist folder based on that original one,
//and automatically add a script tag to it referencing our index_bundle.js.

