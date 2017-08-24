/* jshint indent: 2 */

module.exports = {
  id: {
    type: DataTypes.STRING(64),
    allowNull: false,
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
}
