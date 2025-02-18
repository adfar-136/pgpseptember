import mongoose, { Schema } from "mongoose";

export default new Schema({
    userId : {
        type: mongoose.ObjectId,
        ref:"User"
    },
    roleId : {
        type:mongoose.ObjectId,
        ref:"Role"
    }
})