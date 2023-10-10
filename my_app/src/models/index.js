const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testing', 'root', 'ANSKk08aPEDbFjDO',
  {
    dialect: "mysql",
    host: 'localhost',
    port: 3307
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.firm = require("./firm.model.js")(sequelize, Sequelize)

module.exports = db;