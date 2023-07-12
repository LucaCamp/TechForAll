const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {rules: [
    {
      
        // test: /\.(png|svg|jpg|jpeg|gif|)$/i,
        // type: 'asset/resource',
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']

     
       
      
    },
    
  ]},
  plugins: [
    new HtmlWebpackPlugin({ title: 'Applicazione webpack',
  template: './src/index.html'})
  ],
  devServer: {
    port: 3000,
    open: true,
    static: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
}

