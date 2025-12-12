require('ts-node/register') //tell node js to dinamically compile ts files (node converts ts file to js for sequelize to read it)
const config = require('./db.config');
module.exports = config;