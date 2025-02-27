import  express from "express";
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js";
import { isauthenticated } from "../middlewares/ath.js";

const router = express.Router()

router.post("/new" , isauthenticated ,newTask)

router.get("/my" , isauthenticated , getMyTask)

router
.route("/:id")
.put( isauthenticated , updateTask)
.delete( isauthenticated , deleteTask)


export default router 