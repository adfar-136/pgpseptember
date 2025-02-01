var express = require("express");
var app = express();
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.listen(4000,()=>{
    console.log("listening to port 4000")
})


//=> routes => controllers => middlewares => services =>models =>response

// var express = require("express");
// const fs =require("fs");
// const path = require("path");
// const app = express();
// const staticPath = path.join(__dirname,"public");
// app.use(express.static(staticPath));
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","index.html"));
// })



// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","about.html"));
// })
// app.get("/contact",(req,res)=>{
//     res.sendFile(path.join(__dirname,"public","contact.html"));

// })
// app.get("/services",(req,res)=>{
//     res.send("<h1>Services Page</h1>")
// })
// app.listen(5000,()=>{
//     console.log("listening to port 5000")
// })
