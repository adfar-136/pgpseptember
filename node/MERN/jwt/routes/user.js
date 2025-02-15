const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const router = express.Router();

router.post('/signup',async (req, res) => {
    
    const { username, email, password } = req.body;
    const user = await User.findOne({email})
    if(user){
        return res.json({status:false,message:"User already exists"})
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = new User({username,email,password:hashPassword});
    await newUser.save();
    return res.status(201).json({status:true,message:"User created successfully"})
    
});

router.post('/signin', async(req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"User does not exist"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:"Incorrect password"})
    }
    const token = jwt.sign({email:user.email,userId:user._id},'secret',{expiresIn:'4h'});
    res.cookie("token",token)
    return res.status(200).json({message:"User signed in successfully",token})
});

router.get("/dashboard",auth,(req,res)=>{
    res.status(200).json({message:"Welcome to dashboard",user:req.user.email})
})

router.get("/profile",auth,(req,res)=>{
    res.status(200).json({message:"Welcome to profile",user:req.user})
})
module.exports = router;