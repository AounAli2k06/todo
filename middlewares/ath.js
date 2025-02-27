import { user } from "../models/userModels.js"
import  Jwt  from "jsonwebtoken"


export const isauthenticated = async(req , res , next) => {
    const { token } = req.cookies

    if(!token){
        return res.status(404).json({
            success: false,
            message: "login first"
        })
    }

    const decoded = Jwt.verify(token, process.env.JWT_SECRET)
    req.user = await user.findById(decoded.id)

    next()
}