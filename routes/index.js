const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.grootRoute);
routes.get('/rocket', lesson1Controller.rocketRoute);
routes.get('/starlord', lesson1Controller.starlordRout);
routes.get('/db', lesson1Controller.DBRout);

module.exports = routes;

