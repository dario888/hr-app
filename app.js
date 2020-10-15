const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./connectDB');

// Import Routes
const empoyeeRoutes = require('./routes/empoyeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const positionsRoutes = require('./routes/positionsRoutes');





const app = express();
app.use(express.json());

 //Conntecting to MongoDb Atlas
connectDB();


//ROUTES
app.use('/api/employees', empoyeeRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/positions', positionsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('APP IS RUNNING ON PORT 5000'));
