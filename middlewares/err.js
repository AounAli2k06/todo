export const errHandler = (err , req , res , next) => {
   
    err.message = err.message || "interval server err"

    res.status(404).json({
        success: false,
        message: err.message
    })
}