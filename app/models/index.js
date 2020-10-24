const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//-----models-----

db.usuario = require('./usuario.model.js')(sequelize, Sequelize);

//----------------

module.exports = db;
