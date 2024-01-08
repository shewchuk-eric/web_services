const tree = 'I am ';
const nameTag = 'My name is ';

const grootRoute = (req, res) => {
    res.send(`${tree} Groot`);
};

const rocketRoute = (req, res) => {
    res.send(`${nameTag} Rocket`);
};

const starlordRout = (req, res) => {
    res.send(`${nameTag} Star Lord`);
};

module.exports = {
    grootRoute, rocketRoute, starlordRout
};