var sequelize = require('../config/applicationMysql');
var DataTypes = sequelize.Sequelize
module.exports = function (name) {
    var model = require('./' + name);
    return model(sequelize, DataTypes);
}