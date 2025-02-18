import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const uri = process.env.URI
console.log(uri)
export default mongoose.connect(uri).then(()=>{
    console.log("connect to db")
})