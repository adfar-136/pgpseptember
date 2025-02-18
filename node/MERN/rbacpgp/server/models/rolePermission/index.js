import mongoose, { Schema } from "mongoose";

export default new Schema({
    roleId : {
        type: mongoose.ObjectId,
        ref:"Role"
    },
    permissionId : {
        type:mongoose.ObjectId,
        ref:"Permission"
    }
})