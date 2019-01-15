const webpack = require('webpack')

const nodeModules = {}
fs.readdirSync("node_modules")
  .filter(x => {
  return ['.bin'].indexOf(x) === -1
})
  .forEach(mod => {
    nodeModules[mod] = 'commonjs' + mod
  })
module.exports = {
  entry: __dirname + '/server.js', //已多次提及的唯一入口文件
  output: {
    path: __dirname + '/build',
    filename: 'bundle-[hash].js',
  },
  target: 'node',
  externals: nodeModules,
  context: __dirname,
  node: {
    __filename: false,
    __dirname: false
  },
  devtool: 'none',
  devServer: {
    contentBase: './public', //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true,
    hot: true,
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: 'babel-loader',
      },
      exclude: /node_modules/,
    }]
  },
}
