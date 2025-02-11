// //user registration:  username, email, password

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/pgpseptember").then(()=>{
//     console.log("connection successful");
// })
// const userschema = new mongoose.Schema({
//     username:String,
//     email:String,
//     password:String
// })
// const userModel = new mongoose.model("User",userschema);
// function adder(){
//     const user1 = new userModel({
//         username:"Adfar",
//         email:"adfar@gmail.com",
//         password:"12345"
//     })
//     user1.save()
// }
// adder()