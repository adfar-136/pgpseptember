const express = require('express');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/signup',async (req, res) => {
    
    const { username, email, password } = req.body;
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUser = new User({username,email,password:hashPassword});
    await newUser.save();
    return res.status(201).json({message:"User created successfully"})
    
});

router.post('/signin', (req, res) => {
    // Signin logic here
});

module.exports = router;