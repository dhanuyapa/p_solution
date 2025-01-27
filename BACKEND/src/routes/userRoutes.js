import express from "express";
import { createEmployee,getAllEmployees,getEmployeeById,updateEmployee,patchEmployee,deleteEmployee } from "../controllers/userController.js";

const router = express.Router();

// Route to create a new employee
router.post("/addemployees", createEmployee);
router.get("/employees", getAllEmployees);
router.get("/employees/:id", getEmployeeById);
// Route to update the entire employee record (PUT)
router.put("/employees/:id", updateEmployee);

// update specific fields of an employee (PATCH)
router.patch("/employees/:id", patchEmployee);

// delete an employee
router.delete("/employees/:id", deleteEmployee);

export default router;
