import express from "express";
import { createEmployee,getAllEmployees,getEmployeeByEmpNo, } from "../controllers/userController.js";

const router = express.Router();

// Route to create a new employee
router.post("/employees", createEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:empNo", getEmployeeByEmpNo);

export default router;
