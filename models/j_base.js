const sequelize = require('../config/applicationMysql');
const DataTypes = sequelize.Sequelize
module.exports = function (name) {
    const model = require('./' + name);
    return model(sequelize, DataTypes);
}