var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: './auto_fill/bundle.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
      loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel',
           query: {
              presets: ['es2015', 'react']
           }
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
   }

}

module.exports = config;
