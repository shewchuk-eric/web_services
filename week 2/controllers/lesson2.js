// const dbase = require('../routes/connections');
const data = require('../public/script.js');

const professional = (req, res) => {
    res.send(data);
};

module.exports = {
    professional
};