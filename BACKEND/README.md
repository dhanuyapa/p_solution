Employee Management System API

Description
The Employee Management System API allows you to manage employee records through a RESTful API. This project is built using Node.js, Express.js, and MySQL and includes features like creating, reading, updating, and deleting employee records.

Features
Add a new employee record.
Retrieve all employee records or a specific employee by id.
Update employee details:
Full update using PUT.
Partial update using PATCH.
Delete an employee record by id.


Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework for building RESTful APIs.
MySQL: Relational database for storing employee records.
dotenv: For managing environment variables.
mysql2: MySQL client for database connectivity.
nodemon: For automatic server restarts during development.


Installation
Follow these steps to set up the project:

Clone the repository:

git clone https://github.com/dhanuyapa/p_solution.git
Navigate to the project directory:


Install dependencies:
npm install

Set up the .env file:

Create a .env file in the root directory.
Add the following environment variables:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=work
PORT=3000


Start the server:

npm run dev
