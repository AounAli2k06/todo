import express from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/userControllers.js";
import { isauthenticated } from "../middlewares/ath.js";

const rounter = express.Router();

rounter.post("/new", register);

rounter.post("/login", login);

rounter.get("/logout", logout);

rounter.get("/me", isauthenticated, getProfile);

export default rounter;
