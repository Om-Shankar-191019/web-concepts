import express from "express";
import { addStudent, getStudents } from "../controllers/form.controller.js";

const router = express.Router();

router.get("/students", getStudents);
router.post("/addStudent", addStudent);

export default router;
