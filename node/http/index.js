// var http = require("http");
// http.createServer((req,res)=>{
//    res.write("Hello Welcome to my first server");
//    res.write("Hello Welcome to my first server");
//    res.write("Hello Welcome to my first server");
//    res.end()
// }).listen(3000,()=>{
//     console.log("Listening to port 3000")
// })

var http = require("http")
var fs = require("fs")
const data =fs.readFileSync("./public/index.html","utf-8")
const about = fs.readFileSync("./public/about.html","utf-8")
var server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end(data);
    } else if(req.url === "/about"){
        res.end(about);
    } else if(req.url === "/contact"){
        res.end("<h1>I am a contact Component</h1>")
    } else {
        res.end("<h1>Page not found</h1>");
    }
})
server.listen(8000,()=>{
    console.log("listenign to port 8000")
})



















