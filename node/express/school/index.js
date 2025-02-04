const express = require("express");
const studentArray = require("./studentArray");
const app = express();
app.use(express.json());
let currentId = studentArray.length;
app.get("/api/students",(req,res)=>{
    res.send(studentArray)
})
app.get("/api/students/:id",(req,res)=>{
   let id = req.params.id;
   if(!isNaN(id)){
    id=parseInt(id)
    let stuObject = studentArray.find((item)=>item.id === id)
    if(stuObject === undefined){
        res.sendStatus(404)
    }
    res.status(200).send(stuObject)
   } else {
      res.sendStatus(400)
   }

})
app.post("/api/students",(req,res)=>{
    let {name,currentClass,division} = req.body;
    // // if(name && currentClass && division){
    // //     currentId++;
    // //     studentArray.push({id:currentId,name:name,currentClass:currentClass,division:division});
    // //     res.send(studentArray)
    // // }
    let reqKeys =  Object.keys(req.body)
    if(reqKeys.includes("name") && reqKeys.includes("currentClass") && reqKeys.includes("division")){
          if(!isNaN(req.body.currentClass)) {
            currentId++;
            studentArray.push({id:currentId,name:name,currentClass:parseInt(currentClass),division:division});
            res.send(studentArray)
          } else {
            res.status(400).send("bad request")
          }
         
    } else {
        res.status(400).send("bad request")
    }
})
app.put("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    id = parseInt(id)
    let oldObj =  studentArray.find((item)=>item.id === id)
    if(oldObj === undefined){
        res.status(404).send("student not found")
    }
    let newObj = req.body;
    let updatedObj = {...oldObj,...newObj}
    let index = studentArray.indexOf(oldObj);
    studentArray.splice(index,1)
    studentArray.push(updatedObj)
    res.send(studentArray)
})
app.patch("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    id = parseInt(id)
    let oldObj =  studentArray.find((item)=>item.id === id)
    if(oldObj === undefined){
        res.status(404).send("student not found")
    }
    let newObj = req.body;
    let updatedObj = {...oldObj,...newObj}
    let index = studentArray.indexOf(oldObj)
    studentArray[index] = updatedObj;
    res.send(studentArray)
})
app.delete("/api/students/:id",(req,res)=>{
    let id = req.params.id;
    id = parseInt(id);
    let stuObj = studentArray.find((item)=>item.id === id);
    if(stuObj === undefined){
        res.status(404).send("Student Not Found")
    }
    let index = studentArray.indexOf(stuObj)
    studentArray.splice(index,1)
    res.send(studentArray)
})
app.listen(4000,()=>{
    console.log("listening to port 4000")
})