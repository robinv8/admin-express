var Sequelize = require('sequelize');
var dbConfig = require('./DBConfig');

var mysql = dbConfig.mysql;
var sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
  host: mysql.host,
  port: mysql.port,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  Sequelize: Sequelize
});

function ApplicationMysql() {
  return sequelize;
}

module.exports = new ApplicationMysql();

