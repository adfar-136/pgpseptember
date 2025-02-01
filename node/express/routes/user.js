const express = require("express");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.send("User Homepage");
})
userRouter.get("/signin",(req,res)=>{
    res.send("User Signin Page");
})
userRouter.get("/signup",(req,res)=>{
    res.send("User Signup Page");
})
userRouter.get("/logout",(req,res)=>{
    res.send("User Logout Page");
})


module.exports = userRouter;