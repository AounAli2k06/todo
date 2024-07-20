import { user } from "../models/userModels.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js"

export const login = async(req , res , next) => {

    try {
        const { email , password } = req.body

        const User = await user.findOne({ email }).select("+password")
    
        if(!User){
            return res.status(404).json({
                success: true,
                message: "Invalid Email or Password"
            })
        }
        
        const isMatch = await bcrypt.compare(password,User.password)
        
        if(!isMatch){
            return res.status(404).json({
                success: true,
                message: "Invalid Email or Password"
            })
        }
        
        sendCookie(User , res , `Welcome back ${User.name}` , 200)
    } catch (error) {

        next(error)

    }



}

export const register =  async (req , res) => {

    try {

        const {name , email , password} = req.body

        let User = await user.findOne({email})
        
        if(User){
            return res.status(404).json({
                success: false,
                message: " user already exists"
            })
        }
    
        const hashedPassword = await bcrypt.hash(password,10)
    
         User = await user.create({name, email, password:hashedPassword})
        sendCookie(User , res, "Registered Succesfully" ,201)
        
    } catch (error) {
        next(error)

    }
}

export const getProfile = (req , res) => {

    res.status(200).json({
        success: true,
        User: req.user
    })
}

export const logout = (req , res) => {
    res.status(200).cookie("token",null,{
        expires: new Date(Date.now())
    }).json({
        success: true,
    })
}