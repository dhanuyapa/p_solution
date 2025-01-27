import { pool } from "../config/db.js"; // Import database connection

// Query to create the "employee" table
const employeeTableQuery = `
CREATE TABLE IF NOT EXISTS employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    empNo VARCHAR(10) UNIQUE NOT NULL,
    empName VARCHAR(100) NOT NULL,
    empAddressLine1 NVARCHAR(100) NOT NULL,
    empAddressLine2 NVARCHAR(100),
    empAddressLine3 NVARCHAR(100),
    empDateOfJoin DATETIME NOT NULL,
    empStatus BOOL NOT NULL,
    empImage LONGTEXT NOT NULL
);
`;

// Function to create a single table
const createTable = async (tableName, query) => {
  try {
    await pool.query(query); // Execute the table creation query
    console.log(`${tableName} table created or already exists`);
  } catch (error) {
    console.error(`Error creating ${tableName} table:`, error.message);
  }
};

// Function to initialize all tables (in this case, just the employee table)
const createAllTables = async () => {
  try {
    await createTable("Employee", employeeTableQuery); // Create the "employee" table
    console.log("All tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error.message);
    throw error;
  }
};

// Export the function to initialize tables
export default createAllTables;
