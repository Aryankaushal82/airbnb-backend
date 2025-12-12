const { databaseConfig } = require("./index");
const dbConfig = {
  development: {
    username: databaseConfig.DB_USER,
    password: databaseConfig.DB_PASSWORD,
    database: databaseConfig.DB_NAME,
    host: databaseConfig.DB_HOST,
    dialect: "mysql",
  }
};

module.exports = dbConfig;
