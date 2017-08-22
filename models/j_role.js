/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('j_role', {
    id: {
      type: DataTypes.STRING(64),
      primaryKey: true
    },
    rolename: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    create_date: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'j_role'
  });
};
