const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },  
  module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  { 
                      loader: 'css-loader', 
                      options: { importLoaders: 1 } 
                  },
                  {
                      loader: 'postcss-loader',
                      options: {
                          ident: 'postcss',
                          plugins: () => [autoprefixer]
                      }
                  }
              ]
          })
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin('../dist', {}),
      new HtmlWebPackPlugin({ 
        template: './src/index.html', 
        filename: './index.html' 
      }),
      new ExtractTextPlugin('style.css')
    ]
  };