import express  from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { Role, User, UserRole } from '../../models/index.js';
import fetchRolesAndPermissions from '../../helpers/fetchRolesAndPermissions.js';
const router = express.Router()

router.post("/register",async (req,res)=>{
    try {
        const {username,password} = req.body ;
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new User({username,password:hashedPassword})
        const {_id:userId}= await user.save();
       const {_id:roleId} =  await Role.findOne({role:"Standard"});
       await new UserRole({
        userId : userId,
        roleId:roleId
       }).save()
       res.status(201).json({message:"User Created succesfully"})
    } catch (error) {
       res.status(500).json({message:"Server Error"})
        
    }
})
router.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username});
    if(!user) {
        return res.status(404).json({message:"User not found"});
    } 
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid Password"});
    }
    req.user = {
        _id : user._id
    }
  const token = jwt.sign({userId:user._id,userName:user.username},process.env.JWT_SECRET,{expiresIn:"3h"})
  const data = await fetchRolesAndPermissions(req)
  res.status(200).json({message:"Logged in Successfully",token,data})
})
export default router
