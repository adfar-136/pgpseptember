const express = require('express');

const app = express();
const port = 8000;
// app.set("view engine","ejs")
// app.get('/', (req, res) => {
//     res.render("index",{
//         name:"Adfar Rasheed",
//         age:28
//     })
// });
// app.get("/about",(req,res)=>{
//     const users = ["Adfar","Manoj","Rahul","Rajesh"]
//     res.render("about",{users})
// })
app.set("view engine","hbs")

app.get('/', (req, res) => {
    res.render("index",{
        name:"Adfar Rasheed",
        age:28,
        data:["HTML","CSS","JS","React"]
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});