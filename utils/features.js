import  Jwt  from "jsonwebtoken"


export const sendCookie = (User , res , message , statusCode) => {
    
    const token = Jwt.sign({id:User._id}, process.env.JWT_SECRET)
    res.status(statusCode).cookie("token",token,{
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    }).json({
        success:true,
        message
    })
}
