var http = require("http");
var fs = require("fs");
var path =require("path")
var server = http.createServer((req,res)=>{
    let filepath = path.join(__dirname,"public",req.url === "/"?"index.html":req.url);
    let contentType = "text/html";
    const extname = path.extname(filepath);
    let obj = {
        ".html":"text/html",
        ".css":"text/css",
        ".js":"text/js",
        ".png":"image/png",
        ".jpg":"image/jpg",
        ".jpeg":"image/jpeg"
    }
    contentType= obj[extname]
    fs.readFile(filepath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,"public","error.html"),(error,data)=>{
                res.writeHead(404,{"Content-Type":"text/html"})
                res.end(data)
            })
        } else {
            res.writeHead(200,{"Content-Type":contentType})
            res.end(content)
        }
    })
})

server.listen(8000,()=>{
    console.log("server is litening to port 8000")
})