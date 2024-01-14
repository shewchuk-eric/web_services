const express = require('express');
const app = express();
// const http = require('http');
// const server = http.createServer(function(req, res) {
//     console.log('bite me');
// });
const dotenv = require('dotenv'); // this line and the next required to use .env variables
dotenv.config();
const connectDB = require('./routes/connections'); // USE FOR WEEK 2 LEARNING ASSIGNMENT


// connectDB();
const port = process.env.PORT || 3000;
 
app.use('/', require('./routes')); // USE FOR WEEK 1 PERSONAL ASSIGNMENT
 
app.listen(port, () => console.log('Web Server is listening at port ' + (process.env.PORT || port)));
