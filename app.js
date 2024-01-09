const express = require('express');
const connectDB = require('./routes/connections'); // USE FOR WEEK 2 LEARNING ASSIGNMENT
const app = express();

// connectDB();
const port = process.env.PORT || 3000;
 
app.use('/', require('./routes')); // USE FOR WEEK 1 PERSONAL ASSIGNMENT
 
app.listen(port, () => console.log('Web Server is listening at port ' + (process.env.PORT || port)));
