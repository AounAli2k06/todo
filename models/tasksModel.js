import mongoose from "mongoose"
import { user } from "./userModels.js"

const schema = new mongoose.Schema({
    title:{
        type:String,
        required: true,  
    }, 
    description:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true
    },
    creteatedAt:{
        type: Date,
        default: Date.now,
    }
})

export const Task = mongoose.model("Task",schema)