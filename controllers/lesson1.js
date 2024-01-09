const tree = 'I am ';
const nameTag = 'My name is ';
const dbase = require('../routes/connections');

const grootRoute = (req, res) => {
    res.send(`${tree} Groot`);
};

const rocketRoute = (req, res) => {
    res.send(`${nameTag} Rocket`);
};

const starlordRout = (req, res) => {
    res.send(`${nameTag} Star Lord`);
};

const DBRout = (req, res) => {
    res.send(dbase.connectDB());
};

module.exports = {
    grootRoute, rocketRoute, starlordRout, DBRout
};