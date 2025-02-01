const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/",(req,res)=>{
    //logic for admin homepage
    //database
})
adminRouter.get("/signin",(req,res)=>{
    res.send("Admin Signin Page");
})
adminRouter.get("/signup",(req,res)=>{
    res.send("Admin Signup Page");
})
adminRouter.get("/logout",(req,res)=>{
    res.send("Admin Logout Page");
})

module.exports = adminRouter