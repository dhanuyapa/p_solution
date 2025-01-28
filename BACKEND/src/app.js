// app.js
import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';
import { checkConnection } from './config/db.js';
import createAllTable from './utils/dbUtils.js';

import cors from 'cors'

const app = express();
app.use(cors());


app.use(express.json()); // Middleware to parse JSON bodies
app.use('/api/users',employeeRoutes); // Use user routes for API calls

app.listen(3000, async() => {
  console.log('Server running on port 3000');
  try {
    await checkConnection();
    await createAllTable();
  } catch (error) {
    console.log("Failed to initialize the database",error);
    
  }
});

