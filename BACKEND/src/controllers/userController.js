import EmployeeModel from "../models/userModel.js";

export const createEmployee = async (req, res) => {
  const {
    empNo,
    empName,
    empAddressLine1,
    empAddressLine2,
    empAddressLine3,
    empDateOfJoin,
    empStatus,
    empImage,
  } = req.body;

  // Validate the request body
  if (
    !empNo ||
    !empName ||
    !empAddressLine1 ||
    !empDateOfJoin ||
    typeof empStatus !== "boolean" ||
    !empImage
  ) {
    return res.status(400).json({
      message: "Missing required fields. Please provide all mandatory details.",
    });
  }

  const newEmployee = new EmployeeModel({
    empNo,
    empName,
    empAddressLine1,
    empAddressLine2: empAddressLine2 || null,
    empAddressLine3: empAddressLine3 || null,
    empDateOfJoin,
    empStatus,
    empImage,
  });

  try {
    const employeeId = await EmployeeModel.create(newEmployee);
    res.status(201).json({
      message: "Employee created successfully",
      employeeId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating employee",
      error: error.message,
    });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await EmployeeModel.getAll();
    res.status(200).json({
      message: "Employees retrieved successfully",
      employees,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving employees",
      error: error.message,
    });
  }
};
export const getEmployeeByEmpNo = async (req, res) => {
  const { empNo } = req.params;

  // Validate the empNo
  if (!empNo) {
    return res.status(400).json({
      message: "Missing employee number (empNo).",
    });
  }

  try {
    const employee = await EmployeeModel.getByEmpNo(empNo);
    if (!employee) {
      return res.status(404).json({
        message: `Employee with empNo "${empNo}" not found.`,
      });
    }

    res.status(200).json({
      message: "Employee retrieved successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving employee",
      error: error.message,
    });
  }
};