var fs = require("fs")
var data  = fs.readFileSync("./adfar.txt","utf-8")
// console.log(data.toString())
console.log(data)
// fs.writeFileSync("cuvette.txt","and we are discussing node js")
// fs.writeFileSync("index.html","<h1>Adfar Rasheed</h1>")
// fs.appendFileSync("cuvette.txt"," we are from cuvette")
fs.unlinkSync("cuvette.txt")