import express from "express";
import { userhome } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userhome);

export default router;
