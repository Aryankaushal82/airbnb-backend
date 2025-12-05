import { Sequelize } from "sequelize";
import { databaseConfig } from "../../config";
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: databaseConfig.DB_HOST,
    username: databaseConfig.DB_USER,
    password: databaseConfig.DB_PASSWORD,
    database: databaseConfig.DB_NAME,
    logging: true, // Enable logging of SQL queries
});

export default sequelize;