import { Task } from "../models/tasksModel.js"

export const newTask = async (req , res , next) => {
    try {
        const {title , description} = req.body
    
        await Task.create({
            title,
            description,
            user: req.user
        })
    
        res.status(201).json({
            succcess:true,
            message:"task added"
        })
        
    } catch (error) {
        next(error)

    }
    
}

export const getMyTask = async (req , res) => {
    const id = req.user._id

    const tasks = await Task.find({user : id})

    res.status(200).json({
        success: true,
        tasks
    })
}
export const updateTask = async (req , res , next) => {

    try {

    const tasks = await Task.findById(req.params.id)   

    if(!tasks) return next(new Error("invalid id"))
    tasks.isCompleted = !tasks.isCompleted 
    await tasks.save()
    
    res.status(200).json({
        success: true,
        messages: "task updated"
    })

    } catch (error) {
     next(error)
    }

}
export const deleteTask = async (req , res , next) => {
   try {

       const tasks = await Task.findById(req.params.id)
       
       if(!tasks) return next(new Error("invalid id"))
   
       await tasks.deleteOne()
   
       res.status(200).json({
           success: true,
           message:"task deleted"
       })
    
   } catch (error) {
    next(error)
   }
}