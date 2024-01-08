// SECTION 1 ***********************************************

const express = require('express');
// const Writer = require('./routes/writer');
const Writer = require('./routes/writer');
const writer = new Writer();
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send(`My name is ${writer.name}`);
});
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});

// SECTION 2 ***********************************************

// const express = require('express');
// const app = express();
// const router = express.Router();
 
// router.get('/home', (req, res) => {
//   res.send('Hello World, This is home router');
// });
 
// router.get('/profile', (req, res) => {
//   res.send('Hello World, This is profile router');
// });
 
// router.get('/login', (req, res) => {
//   res.send('Hello World, This is login router');
// });
 
// router.get('/logout', (req, res) => {
//   res.send('Hello World, This is logout router');
// });
 
// app.use('/', router);
 
// app.listen(process.env.PORT || 3000, () => {
//   console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
// });

// SECTION 3 ***********************************************

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// // register a listener
// logger.on('messageLogged', (arg) => {
//   console.log('Listener Called', arg);
// });

// logger.log('message');