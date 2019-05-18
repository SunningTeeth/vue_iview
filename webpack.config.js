const path = require("path")

const webpackHtmlPlugin = require("html-webpack-plugin")

module.exports = {

  entry:path.join(__dirname,'./src/main.js'),

  output:{
    path:path.join(__dirname,"./dist"),

    filename:"bundle.js"
  },
  plugins:[
    new webpackHtmlPlugin({
      template:"./src/index.html",
      filename:"index.html"
    })
  ]


}