const express =  require("express")
const app =  express();

// app.use((req,res,next)=>{
//     console.log("req method", req.method);
//     console.log("req url", req.url);
//     console.log("Current", new Date());
//     next()
// })
app.use(express.json())
app.use("/about",(req,res,next)=>{
    console.log("Hello Adfar");
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello welcome to my App")
})
app.get("/about",(req,res)=>{
    res.send("Hello welcome to my About page")
})
app.listen(4000,()=>{
    console.log("Listening to port 4000")
})