import express from "express"
import userRouuter from "./routes/userRoutes.js"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import taskRouter from "./routes/task.js"
import { errHandler } from "./middlewares/err.js"

config({
  path:"./data/config.env"
})

export const app = express()

//using middleware
app.use(express.json())
app.use(cookieParser())

// using routes
app.use("/users",userRouuter)

app.use("/tasks",taskRouter)

app.use(errHandler)

