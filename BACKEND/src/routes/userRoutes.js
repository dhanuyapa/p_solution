import express from "express";
import { createEmployee } from "../controllers/userController.js";

const router = express.Router();

// Route to create a new employee
router.post("/employees", createEmployee);

export default router;
