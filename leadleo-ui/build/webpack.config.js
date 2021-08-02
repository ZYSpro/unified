/* eslint-disable @typescript-eslint/no-var-requires */
require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  },
]
const plugins = [new VueLoaderPlugin()]

const entry = path.resolve(__dirname, '../packages/leadleo/index.ts')

const config = {
  mode: 'production',
  entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Leadleo',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: 'vue-loader',
      },
      {
        test: '/\.css$/',
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css'],
  },
  externals,
  plugins,
}

module.exports = config