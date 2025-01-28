import EmployeeModel from "../models/employeeModel.js";

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

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  // Validate the id
  if (!id) {
    return res.status(400).json({
      message: "Missing employee ID.",
    });
  }

  try {
    const employee = await EmployeeModel.getById(id);
    if (!employee) {
      return res.status(404).json({
        message: `Employee with id "${id}" not found.`,
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


export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const {
    empName,
    empAddressLine1,
    empAddressLine2,
    empAddressLine3,
    empDateOfJoin,
    empStatus,
    empImage,
  } = req.body;

  // Validate input
  if (!id || !empName || !empAddressLine1 || !empDateOfJoin || typeof empStatus !== "boolean" || !empImage) {
    return res.status(400).json({
      message: "Missing required fields. Please provide all employee details.",
    });
  }

  try {
    const updated = await EmployeeModel.updateById(id, {
      empName,
      empAddressLine1,
      empAddressLine2,
      empAddressLine3,
      empDateOfJoin,
      empStatus,
      empImage,
    });

    if (!updated) {
      return res.status(404).json({
        message: `Employee with id "${id}" not found.`,
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      error: error.message,
    });
  }
};

export const patchEmployee = async (req, res) => {
  const { id } = req.params;
  const fieldsToUpdate = req.body;

  // Validate input
  if (!id || Object.keys(fieldsToUpdate).length === 0) {
    return res.status(400).json({
      message: "Employee ID and at least one field to update are required.",
    });
  }

  try {
    const updated = await EmployeeModel.patchById(id, fieldsToUpdate);

    if (!updated) {
      return res.status(404).json({
        message: `Employee with ID "${id}" not found.`,
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      error: error.message,
    });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  // Validate the id
  if (!id) {
    return res.status(400).json({
      message: "Employee ID is required.",
    });
  }

  try {
    const deleted = await EmployeeModel.deleteById(id);

    if (!deleted) {
      return res.status(404).json({
        message: `Employee with ID "${id}" not found.`,
      });
    }

    res.status(200).json({
      message: `Employee with ID "${id}" deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error: error.message,
    });
  }
};
