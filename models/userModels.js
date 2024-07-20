import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,  
        required: true,        
    } ,
    email:{
        required: true,  
        type: String,
        unique: true
    },
    password:{
        required: true,  
        type: String,
        select: false
    },
    creteatedAt:{
        type: Date,
        default: Date.now,
    }
})

export const user = mongoose.model("user",schema)