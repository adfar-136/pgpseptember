var fs = require("fs")
console.log("1")
fs.readFile("adfar.txt","utf-8",(err,data)=>{
   if(err){
    console.log(err)
   }
   console.log(data)
})
console.log("2")