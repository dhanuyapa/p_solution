import { pool } from "../config/db.js";

class EmployeeModel {
  constructor(employee) {
    this.empNo = employee.empNo;
    this.empName = employee.empName;
    this.empAddressLine1 = employee.empAddressLine1;
    this.empAddressLine2 = employee.empAddressLine2 || null; // Optional fields
    this.empAddressLine3 = employee.empAddressLine3 || null;
    this.empDateOfJoin = employee.empDateOfJoin;
    this.empStatus = employee.empStatus;
    this.empImage = employee.empImage;
  }

  // Static method to create a new employee in the database
  static async create(employee) {
    const query = `
      INSERT INTO employee (empNo, empName, empAddressLine1, empAddressLine2, empAddressLine3, empDateOfJoin, empStatus, empImage)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      employee.empNo,
      employee.empName,
      employee.empAddressLine1,
      employee.empAddressLine2,
      employee.empAddressLine3,
      employee.empDateOfJoin,
      employee.empStatus,
      employee.empImage,
    ];

    try {
      const [result] = await pool.query(query, values);
      return result.insertId; // Return the ID of the newly created employee
    } catch (error) {
      throw new Error(`Error creating employee: ${error.message}`);
    }
  }

// Retrieve all employees
static async getAll() {
  const query = "SELECT * FROM employee";
  try {
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    throw new Error(`Error retrieving employees: ${error.message}`);
  }
}
}

export default EmployeeModel;
