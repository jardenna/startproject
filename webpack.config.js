const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
   mode = 'production';
   target = 'browserslist'; // to fix temporary hmr problem for scss

}

module.exports = {
   mode,
   module: {
      rules: [
         {
            test: /\.(s[ac]|c)ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               'css-loader',
               'postcss-loader',
               'sass-loader'

            ]
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         }




      ]
   },

   plugins: [

      new MiniCssExtractPlugin()

   ],

   target,
   devtool: 'source-map',

   // required if using webpack-dev-server
   devServer: {
      contentBase: './dist',
      port: 4000,
      open: true,
      hot: true
   }
};
