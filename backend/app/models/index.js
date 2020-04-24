const User = require('./user.model')
const Ring = require('./ring.model')
const UserRing = require('./userRing.model')
const Database = require('./db')
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const dbConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: '0',
  port: dbConfig.PORT,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = new Database([
  User,
  Ring,
  UserRing
], Sequelize, dbConnection)

// db.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = db;