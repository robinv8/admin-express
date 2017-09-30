/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jshopRoleHasJshopPermission', {
    jshopRoleRoleId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jshop_role',
        key: 'role_id'
      },
      field: 'jshop_role_role_id'
    },
    jshopPermissionPermissionId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jshop_permission',
        key: 'permission_id'
      },
      field: 'jshop_permission_permission_id'
    }
  }, {
    tableName: 'jshop_role_has_jshop_permission'
  });
};
