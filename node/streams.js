var fs = require("fs")
// const readStream = fs.createReadStream("./adfar.txt","utf-8");
// readStream.on('data',(chunk)=>{
//     console.log("received chunk :", chunk)
// })

// readStream.on('end',()=>{
//     console.log("Stream reading finished")
// })

// const writeStream = fs.createWriteStream("output.txt");
// writeStream.write("this is the first line. \n")
// writeStream.write("this is the second line. \n");
// writeStream.end("Writing completed");
// writeStream.on("finish",()=>{
//     console.log("all data has been written")
// })

const readStream = fs.createReadStream("./adfar.txt");
const writeStream = fs.createWriteStream("./output.txt");

readStream.pipe(writeStream)
console.log("data piped sugfdrt")