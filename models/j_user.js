/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('j_user', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1
    },
    username: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'j_user'
  });
};
