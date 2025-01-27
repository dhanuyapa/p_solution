import express from "express";
import { createEmployee,getAllEmployees,getEmployeeByEmpNo,updateEmployee,patchEmployee } from "../controllers/userController.js";

const router = express.Router();

// Route to create a new employee
router.post("/employees", createEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:empNo", getEmployeeByEmpNo);
// Route to update the entire employee record (PUT)
router.put("/employees/:empNo", updateEmployee);

// Route to update specific fields of an employee (PATCH)
router.patch("/employees/:empNo", patchEmployee);

export default router;
