var Sequelize = require('sequelize');
var dbConfig = require('./DBConfig');
var FileStreamRotator = require('file-stream-rotator')
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
    logging: myLogFunc,
    Sequelize: Sequelize
});

function ApplicationMysql() {
    return sequelize;
}

var myLogFunc = function (msg) {
    console.log(msg)
}
module.exports = new ApplicationMysql();

