const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mssql',
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433,
    logging: true,
    option: { trustServerCertificate: true}
});

const db = {};
module.exports = db;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Auth = require('./auth.model')(sequelize);
db.Users = require('./users.model')(sequelize);
