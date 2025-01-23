var path = require("path")
var a = "C:/Users/LEGION/adfar/node/adfar.html"
// console.log(path.dirname(a))
// console.log(path.extname(a))
// console.log(path.parse(a))
// var b = {
//     root: 'C:/',
//     dir: 'C:/Users/LEGION/adfar/node',
//     base: 'adfar.html',
//     ext: '.html',
//     name: 'adfar'
//   }
//   console.log(path.format(b))

var b = path.join("public","adfar","index")
console.log(b)